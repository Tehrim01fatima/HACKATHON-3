import React from "react";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaPaypal, FaCcVisa, FaCcMastercard, FaCcAmex } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 sm:px-12 md:px-28">
      <div className="mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              <Image
                src="/pictures/Logo.png"
                alt="logo"
                width={168}
                height={40}
              />
            </div>
            <p className="mt-4 text-gray-500">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus.
            </p>
            <div className="flex justify-start gap-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                <FaInstagram />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                <FaPinterestP />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#007580] text-xl p-2 border-2 border-transparent rounded-full hover:border-[#007580]"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="flex  sm:flex-row gap-8 sm:col-span-2">
            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-[#9A9CAA] uppercase">Category</h4>
              <ul className="mt-4 text-[#272343] space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                  >
                    Sofa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                  >
                    Armchair
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                  >
                    Wing Chair
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                  >
                    Desk Chair
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                  >
                    Wooden Chair
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                  >
                    Park Bench
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="text-lg font-semibold text-[#9A9CAA] uppercase">Support</h4>
              <ul className="mt-4 text-[#272343] space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                  >
                    Help & Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#007580] hover:underline hover:underline-offset-4"
                  >
                    Help
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-[#9A9CAA] uppercase">Newsletter</h4>
            <div className="mt-4 flex gap-1">
              <input
                type="email"
                placeholder="Your email"
                className="px-6 py-2 w-full border text-[#9A9CAA] border-gray-300 rounded-md focus:outline-none"
              />
              <button className="bg-[#029FAE] text-white px-6 py-2 rounded-md hover:bg-teal-700">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tincidunt erat enim.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center flex-wrap text-[#9A9CAA] border-t pt-8">
          <p>
            © 2021 - Blogy - Designed & Developed by{" "}
            <a href="#" className="text-[#272343] hover:underline">
              Zakirsoft
            </a>
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <FaCcMastercard size={40} />
            <FaPaypal size={40} />
            <FaCcAmex size={40} />
            <FaCcVisa size={40} />
          </div>
        </div>
      </div>
    </footer>
  );
}
