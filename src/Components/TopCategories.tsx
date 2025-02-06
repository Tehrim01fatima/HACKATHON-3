"use client"
import Image from "next/image";
import Link from "next/link";
import {client} from  "@/sanity/lib/client"; // Adjust the path to your sanity client file
import { useEffect, useState } from "react";

interface Category {
  name: string;
  products: number;
  image: string;
  href: string;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
        const fetchData = async () => {
      const data = await client.fetch(`
        *[_type == "categories"]{
          title,
          "products": products,
          "image": image.asset->url
        }
      `);

      const mappedData = data.map((item: any) => ({
        name: item.title,
        products: item.products,
        image: item.image,
        href: `/products/${item.title.toLowerCase().replace(/\s+/g, '-')}`, 
      }));

      setCategories(mappedData);
    };

    fetchData();
  }, []);

  return (
    <section className="w-full px-4 py-[7rem] md:px-6">
      <div className="flex-col flex">
        <h2 className="text-3xl font-bold tracking-tight my-10">
          Top categories
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10 md:mx-12 items-center">
          {categories.map(({ name, products, image, href }) => (
            <Link
              key={name}
              href={href}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[5/4] w-full ">
                <Image
                  src={image}
                  alt={`${name} category`}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  layout="responsive"
                  width={400}
                  height={300}
                  priority
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-6">
                  <h3 className="mb-2 text-xl font-medium text-white">{name}</h3>
                  <p className="text-sm text-gray-200">{products} Products</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
