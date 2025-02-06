"use client";
import React, { useEffect, useState } from "react";
import { Products } from "../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts, four } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "@/app/Actions/action";
import Swal  from "sweetalert2"
const Page = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
     
        const fetchedProducts: Products[] = await client.fetch(four);
        setProducts(fetchedProducts);
      } 
      
    fetchProducts();
  }, []);
  

  const handleAddtoCart =(e:React.MouseEvent , product:Products)=>{
    e.preventDefault()
   Swal.fire ({
    position:"top-right",
    icon:"success",
    title:`${product.title} added to Cart`,
    showConfirmButton:false,
    timer:1000
   })
    addToCart(product)
   

  }





  const renderProducts = () => {
    if (products.length === 0) {
      return <p className="text-center text-lg text-gray-500">No products found</p>;
    }

    return products.map((products) => (
      <div
        key={products._id}
        className="flex flex-col gap-4 w-4/5 mx-auto my-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
      >
       
        <Link href={`/product/${products?.slug?.current || ''}`} className="block">
          <div className="relative">
            {products.image && (
              <Image
                src={urlFor(products.image).url()}
                alt={products.title}
                className="w-full object-cover"
                width={312}
                height={312}
              />
            ) }
          </div>
          <div className="flex justify-between items-center px-4">
          <div>
            <p className="text-lg font-medium text-gray-800">{products.title}</p>
            <p className="text-lg font-bold text-primary">${products.price}</p>
          </div>
          <button className="bg-[ #029FAE] text-white px-4 py-2 rounded transition" onClick={(e)=>(handleAddtoCart(e,products))}>
            <Image
              src="/pictures/Cart.png"
              alt="Add to Cart"
              width={30}
              height={30}
              className="inline-block"
            />
          </button>
        </div>
        </Link>
        
      </div>
    ));
  };

  return (
    <section className="w-full px-4 py-[7rem] md:px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold tracking-tight mb-10">Featured Products</h2>
     
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {renderProducts()}
          </div>
        

        
      </div>
    </section>
  );
};

export default Page;
