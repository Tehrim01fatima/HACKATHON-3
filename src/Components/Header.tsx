import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full bg-[#F0F2F3] pt-5 pb-5 h-[84px]">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 sm:px-8">
        
        <div className="flex items-center space-x-3">
          <Image
            src="/pictures/Logo.png"
            alt="Comforty Logo"
            width={118}
            height={31}
          />
        </div>

        <Link href="/Cart">
          <button className="flex items-center space-x-2 bg-white py-2 px-4 rounded-md mr-3">
            <FaShoppingCart className="text-xl" />
            <span className="hidden sm:inline text-sm">Cart</span>
            <div className="flex items-center justify-center w-6 h-6 bg-[#007580] text-white text-xs sm:text-sm rounded-full">
              2
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
