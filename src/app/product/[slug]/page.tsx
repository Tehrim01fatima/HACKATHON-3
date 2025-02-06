"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { Products } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { addToCart } from "@/app/Actions/action";
import { useRouter } from "next/navigation";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface ProductPageProps {
  params: { slug: string };
}

// Fetch function
async function getProduct(slug: string): Promise<Products | null> {
  try {
    const product = await client.fetch(
      groq`*[_type == "products" && slug.current == $slug][0] {
        _id,
        title,
        image,
        price,
        description
      }`,
      { slug }
    );
    return product || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;
  const router = useRouter();
  const [product, setProduct] = useState<Products | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) {
      console.error("Slug is missing in params.");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      setLoading(true);
      const fetchedProduct = await getProduct(slug);
      setProduct(fetchedProduct);
      setLoading(false);
    };

    fetchProduct();
  }, [slug]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 text-center py-10">
        <h1 className="text-3xl font-bold">Loading Product...</h1>
        <p className="text-lg mt-4">Fetching product details, please wait.</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 text-center py-10">
        <h1 className="text-4xl font-bold">Product Not Found</h1>
        <p className="text-lg mt-4">Sorry, we couldn't find the product.</p>
      </div>
    );
  }

  const handleShopNow = () => {
    addToCart(product);
    router.push("/cart");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="aspect-square">
          {product.image && (
            <Image
              src={urlFor(product.image as SanityImageSource).url()}
              alt={product.title}
              height={500}
              width={500}
              className="rounded-lg shadow-md"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.title}</h1>
          <p className="text-2xl font-sans">${product.price}</p>
          <p className="text-lg">{product.description}</p>
          <button
            onClick={handleShopNow}
            className="w-full sm:w-[334.67px] h-[60px] rounded-[30px] text-white bg-[#029FAE] hover:bg-[#027C87] transition"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}
