"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full bg-white pt-5 pb-5">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 sm:px-8">

        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-[14px] font-medium hover:text-[#005d5d]">
            Home
          </Link>

          <Link href="/Shop" className="text-[14px] font-medium hover:text-[#005d5d]">
          Shop
          </Link>

          

          <Link href="/contact" className="text-[14px] font-medium hover:text-[#005d5d]">
            Contact
          </Link>

          <Link href="/Aboutus" className="text-[14px] font-medium hover:text-[#005d5d]">
            About
          </Link>

          <Link href="/Faqs" className="text-[14px] font-medium hover:text-[#005d5d]">
            FAQ
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4 ml-auto">
          <span className="font-normal text-[#636270] text-[14px]">
            Contact:
          </span>
          <span className="font-medium text-[#272343] text-[14px] ml-1">
            (808) 555-0111
          </span>
        </div>

        <button
          className="lg:hidden flex items-center justify-center p-2"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className={`w-6 h-6 transform transition-transform duration-300 ${isMenuOpen ? "rotate-45" : ""}`}
         
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden flex flex-col gap-4 mt-4 px-4">
          <Link href="/" onClick={closeMenu} className="text-[14px] font-medium hover:text-[#005d5d]">
            Home
          </Link>
          <Link href="/Product" onClick={closeMenu} className="text-[14px] font-medium hover:text-[#005d5d]">
            Product
          </Link>
          <Link href="/SingleProduct" onClick={closeMenu} className="text-[14px] font-medium hover:text-[#005d5d]">
            Single Product
          </Link>
          <Link href="/contact" onClick={closeMenu} className="text-[14px] font-medium hover:text-[#005d5d]">
            Contact
          </Link>
          <Link href="/Aboutus" onClick={closeMenu} className="text-[14px] font-medium hover:text-[#005d5d]">
            About
          </Link>
          <Link href="/Faqs" onClick={closeMenu} className="text-[14px] font-medium hover:text-[#005d5d]">
            FAQS
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
