import React from "react";
import Image from "next/image";

const CompanyLogo = () => {
  return (
    <div className="w-full pt-14 px-4">
      <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 justify-center items-center">
        <div className="flex justify-center items-center">
          <Image src="/pictures/zapier.png" alt="Zapier Logo" width={85} height={87} />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/pictures/pipedrive.png" alt="Pipedrive Logo" width={107} height={109} />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/pictures/logo(5).webp" alt="Cib Bank Logo" width={135} height={139} />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/pictures/company logo (2).png" alt="Company 4 Logo" width={63} height={65} />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/pictures/burnt toast.png" alt="Burnt Toast Logo" width={98} height={101} />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/pictures/pandaDoc.png" alt="Panda Doc Logo" width={113} height={115} />
        </div>
        <div className="flex justify-center items-center">
          <Image src="/pictures/moz.png" alt="Moz Logo" width={84} height={87} />
        </div>
      </div>
    </div>
  );
};

export default CompanyLogo;
