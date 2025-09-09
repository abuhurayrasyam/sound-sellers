import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter, FiYoutube } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white px-6 py-12 md:px-20">
      <div className="max-w-[1200px] mx-auto">

        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="flex-1 min-w-[250px] text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-4 gap-2">
              <img src="/logo.png" alt="SoundSellers" className="h-8 w-8 md:h-10 md:w-10 object-contain" />
              <h2 className="text-2xl font-bold">SoundSellers</h2>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs mx-auto lg:mx-0">
              The premier marketplace for musical instruments and equipment.
              Connect with musicians, find your perfect gear, and grow your
              musical journey.
            </p>

            <div className="flex justify-center lg:justify-start space-x-4 mt-4 text-gray-400">
              <LuFacebook className="hover:text-white cursor-pointer transition-colors" />
              <FiTwitter className="hover:text-white cursor-pointer transition-colors" />
              <FaInstagram className="hover:text-white cursor-pointer transition-colors" />
              <FiYoutube className="hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div className="flex-[2] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center sm:text-left">
            <div>
              <h4 className="text-white font-semibold mb-3">Marketplace</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">Guitars</li>
                <li className="hover:text-white cursor-pointer">Keyboards</li>
                <li className="hover:text-white cursor-pointer">Drums</li>
                <li className="hover:text-white cursor-pointer">Audio Equipment</li>
                <li className="hover:text-white cursor-pointer">Sell Your Gear</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">Contact Us</li>
                <li className="hover:text-white cursor-pointer">FAQ’s</li>
                <li className="hover:text-white cursor-pointer">About Us</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
              <p className="text-sm text-gray-400 mb-3">
                Get the latest deals and music news delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row items-center sm:items-start w-full">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:flex-1 px-4 py-2 rounded-md text-black mb-2 sm:mb-0 sm:mr-2 bg-[#F0ECE9] focus:outline-none"
                />
                <button className="w-full sm:w-auto bg-[#A4754B] text-white px-5 py-2 rounded-md hover:bg-[#8c603b] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8 border-t border-[#a1a0a0]"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-6 mt-8 text-center">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6">
            <div className="flex items-center gap-1">
              <img src="/secure.png" alt="" />
              Secure Payments
            </div>
            <div className="flex items-center gap-1">
              <img src="/car.png" alt="" />
              Fast Shipping
            </div>
          </div>

          <div>© 2024 SoundSellers. All rights reserved.</div>

          <div className="flex flex-wrap justify-center md:justify-end items-center gap-6">
            <div className="flex items-center gap-1">
              <img src="/wallet.png" alt="" />
              Stripe
            </div>
            <div className="flex items-center gap-1">
              <img src="/wallet.png" alt="" />
              PayPal
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;