import React from "react";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

const Hero=() => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-screen-xl h-auto bg-[#F0F2F3] flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 lg:px-16 py-6">


        <div className="flex flex-col justify-center items-center sm:items-start w-full sm:w-1/2 space-y-4 sm:space-y-6">
          <h1 className="text-[14px] sm:text-[18px] md:text-[24px] lg:text-[32px] pt-[50px] sm:pt-[119px] font-normal text-[#272343] text-center sm:text-left">
            WELCOME TO CHAIRY
          </h1>
          <p className="w-full sm:w-[557px] text-[30px] sm:text-[40px] lg:text-[60px] font-bold text-center sm:text-left mb-6">
            Best Furniture Collection for your interior.
          </p>
          <Link href="/Faqs">
            <button className="flex bg-[#029FAE] w-[171px] h-[52px] text-white py-4 px-6 rounded-[8px]  items-center gap-[20px] text-[16px] hover:bg-slate-700 mx-auto sm:mx-0">
              Shop Now
              <FaLongArrowAltRight />

            </button>
          </Link>
        </div>


        <div className="w-full sm:w-1/2 mt-6 sm:mt-0 sm:ml-[130px] flex justify-center">
          <Image
            src="/pictures/Product Image.png"
            alt="Product Image"
            width={434}
            height={584}
            priority
            className="object-contain sm:object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
