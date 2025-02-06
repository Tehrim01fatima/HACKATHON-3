import React from "react";
import Image from "next/image";

const Instagram = () => {
  return (
    <div className="w-full h-auto bg-[#F0F2F3]">
   
      <div className="max-w-3xl mx-auto py-16 px-4 text-center space-y-6">
        <h2 className="font-bold text-[40px] sm:text-[50px] mt-4">
          Or Subscribe to the Newsletter
        </h2>
        <div className="flex justify-center items-center gap-16 sm:gap-8">
          <div className="flex flex-col items-start mt-12">
            <span className="text-[#8F9499] text-[14px] sm:text-[16px] font-semibold mb-2 ml-3">
              Email address...
            </span>
            <div className="w-[250px] sm:w-[643px] h-[2px] bg-black"></div>
          </div>
          <div className="flex flex-col items-center mt-12">
            <span className="text-[14px] sm:text-[16px] font-normal mb-2">SUBMIT</span>
            <div className="w-[91px] h-[2px] bg-black"></div>
          </div>
        </div>
      </div>

    
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        <h2 className="text-[40px] sm:text-[50px] font-bold text-center">
          Follow Products and Discounts on Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pb-24">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/pictures/chair5.png"
              alt="Instagram product 1: Library stool chair"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/pictures/image (3).png"
              alt="Instagram product 2: Modern armchair"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/pictures/chair2.png"
              alt="Instagram product 3: Elegant office chair"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/pictures/chair1.png"
              alt="Instagram product 4: Cozy lounge chair"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/pictures/chair3.png"
              alt="Instagram product 5: Stylish accent chair"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/pictures/image (4).png"
              alt="Instagram product 6: Contemporary office chair"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
