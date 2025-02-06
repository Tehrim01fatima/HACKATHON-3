import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutHero = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center bg-white mt-16 lg:mt-32 px-4">
    
      <section className="w-full lg:w-[650px] h-auto lg:h-[478px] bg-[#007580] p-6 flex flex-col justify-start items-start text-left text-white">
        <h1 className="text-[20px] sm:text-[24px] lg:text-[32px] font-bold pl-4 lg:pl-6 pt-8 lg:pt-12">
          About Us - Comforty
        </h1>
        <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-normal pt-4 pl-4 lg:pl-6 pb-12 lg:pb-30">
          At Comforty, we believe that the right chair can transform your space
          and elevate your comfort. Specializing in ergonomic design, premium
          materials, and modern aesthetics, we craft chairs that seamlessly
          blend style with functionality.
        </p>
        <div className="pl-4 lg:pl-4">
          <button className="bg-[rgba(249,249,249,0.15)] text-white px-6 sm:px-8 py-3 sm:py-4 text-[14px] sm:text-[16px] font-normal w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2e6a6d]">
           <Link href={"/Shop"}>
            View Collection
           </Link>
          </button>
        </div>
      </section>

     
      <div className="w-full lg:w-[619px] h-auto lg:h-[478px] mt-6 lg:mt-0 lg:ml-6">
        <Image
          src="/pictures/chair1.png"
          alt="A modern ergonomic chair from Comforty"
          width={619}
          height={478}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default AboutHero;
