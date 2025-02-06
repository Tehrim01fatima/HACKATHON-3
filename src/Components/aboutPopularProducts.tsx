import Image from "next/image";
import React from "react";

const AboutPopularProduct = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-16 px-6">
      {/* Heading for Popular Products */}
      <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold text-left mb-12">
        Our Popular Products
      </h2>

      {/* Product Cards Container */}
      <div className="flex flex-col sm:flex-row lg:flex-row justify-between gap-8">
        
        {/* First Product */}
        <div className="text-center flex flex-col items-center">
          <Image
            src="/Large.png"
            alt="1"
            width={590}
            height={375}
            className="object-cover mx-auto w-full max-w-[590px]"
          />
          <p className="pt-5 text-[18px] sm:text-[20px] md:text-[22px] font-normal text-left">The Poplar Suede Sofa</p>
          <p className="pt-2 text-[16px] sm:text-[18px] md:text-[20px] font-normal mb-12 text-left">$99.00</p>
        </div>

        {/* Second Product */}
        <div className="text-center flex flex-col items-center">
          <Image
            src="/pictures/popular2.png"
            alt="2"
            width={305}
            height={375}
            className="object-cover mx-auto w-full max-w-[305px]"
          />
          <p className="pt-5 text-[18px] sm:text-[20px] md:text-[22px] font-normal text-left">The Dandy Chair</p>
          <p className="pt-2 text-[16px] sm:text-[18px] md:text-[20px] font-normal mb-12 text-left">$99.00</p>
        </div>

        {/* Third Product */}
        <div className="text-center flex flex-col items-center">
          <Image
            src="/pictures/popular3.png"
            alt="3"
            width={305}
            height={375}
            className="object-cover mx-auto w-full max-w-[305px]"
          />
          <p className="pt-5 text-[18px] sm:text-[20px] md:text-[22px] font-normal text-left">The Dandy Chair</p>
          <p className="pt-2 text-[16px] sm:text-[18px] md:text-[20px] font-normal mb-12 text-left">$99.00</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPopularProduct;
