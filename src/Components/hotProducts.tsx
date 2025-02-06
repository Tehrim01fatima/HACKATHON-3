"use client";

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import React from "react";
import { Products } from "../../types/products";
import { urlFor } from "@/sanity/lib/image";

// Fetch products from Sanity
async function fetchProducts(): Promise<Products[]> {
  const query = groq`*[_type == "products"] {
    _id,
    title,
    slug,
    image,
    price,
    isNew,
    isOnSale
  }`;
  return client.fetch(query);
}

export default function HotProduct() {
  const [products, setProducts] = React.useState<Products[]>([]);

  React.useEffect(() => {
    async function getProducts() {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    }
    getProducts();
  }, []);

  return (
    <section
      className="container mx-auto px-4 py-12 lg:py-16"
      role="region"
      aria-label="Hot Product Section"
    >
      <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr]">
        <div
          className="transform transition-transform duration-500 ease-in-out lg:rotate-90 lg:origin-left text-[30px] font-extrabold tracking-wider text-zinc-900 pt-6 lg:block hidden"
          aria-hidden="true"
        >
          EXPLORE NEW AND POPULAR STYLES
        </div>
        <div className="text-xl font-medium tracking-wider text-zinc-900 lg:hidden">
          EXPLORE NEW AND POPULAR STYLES
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {products.length > 0 ? (
          <>
            {/* Main Product Image */}
            <div className="lg:row-span-2">
              <Link href={`/product/${products[0]?.slug?.current}`}>
                {products[0]?.image ? (
                  <Image
                    src={urlFor(products[0]?.image).url()}
                    alt={products[0]?.title || "Product Image"}
                    height={648}
                    width={648}
                    className="rounded-lg shadow-md w-full h-auto object-cover"
                  />
                ) : (
                  <div className="bg-gray-200 rounded-lg shadow-md flex items-center justify-center h-[648px]">
                    <p className="text-gray-500">No Image Available</p>
                  </div>
                )}
              </Link>
            </div>

            {/* Secondary Product Images */}
            <div className="grid grid-cols-2 gap-4">
              {products.slice(1,5).map((product) => (
                <Link
                  key={product._id}
                  href={`/product/${product.slug?.current}`}
                >
                  {product.image ? (
                    <Image
                      src={urlFor(product.image).url()}
                      alt={product.title}
                      height={300}
                      width={300}
                      className="rounded-lg shadow-md w-full h-auto object-cover"
                    />
                  ) : (
                    <div className="bg-gray-200 rounded-lg shadow-md flex items-center justify-center h-[300px]">
                      <p className="text-gray-500">No Image Available</p>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </>
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </section>
  );
}
