
import React from "react";
import Image from "next/image";
const AboutSection=() => {
  return (
    <div className="max-w-screen-xl mx-auto mt-32 px-6">
      <h2 className="text-[32px] font-semibold text-center mb-12">
        What makes our Brand Different
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
        <div className="bg-[#F9F9F9] p-6 text-center">
          <div className="flex flex-col ">
            <Image src={"/pictures/Delivery (1).png"} width={24} height={24} alt={"pic"} />
            <h3 className="text-[20px] font-normal text-[#007580] flex items-center justify-center pt-5 text-left">
              Next day as standard
            </h3>
          </div>
          <p className="text-[16px] font-normal text-[#007580]  mt-4 text-left">
            Order before 3pm and get your order the next day as standard
          </p>
        </div>

        <div className="bg-[#F9F9F9] p-6 text-center">
          <Image src={"/pictures/Checkmark.png"} width={24} height={24} alt={"pic"} />
          <h3 className="text-[20px] font-normal text-[#007580] flex items-center justify-center pt-5">


            Made by true artisans
          </h3>
          <p className="text-[16px] font-normal text-[#007580] mt-4 text-left">
            Handmade crafted goods made with real passion and craftsmanship
          </p>
        </div>

        <div className="bg-[#F9F9F9] p-6 text-center">
          <Image src={"/pictures/Purchase(1).png"} width={24} height={24} alt={"pic"} />
          <h3 className="text-[20px] font-normal text-[#007580] flex items-center justify-center pt-5 text-left">
            Unbeatable prices
          </h3>
          <p className="text-[16px] font-normal text-[#007580] mt-4 text-left">
            For our materials and quality you won’t find better prices anywhere
          </p>
        </div>

        <div className="bg-[#F9F9F9] p-6 text-center">
          <Image src={"/pictures/Sprout (1).png"} width={24} height={24} alt={"pic"} />
          <h3 className="text-[20px] font-normal text-[#007580] flex justify-center pt-5 text-left">
            Recycled packaging
          </h3>
          <p className="text-[16px] font-normal text-[#007580] mt-4 text-left">
            We use 100% recycled material to ensure our footprint is more
            manageable
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
