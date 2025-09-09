import { useState } from "react";
import { Menu, X, Heart, ShoppingCart, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 py-3 md:py-4">

        <div className="flex items-center space-x-2">
          <img
            src="/Vector.png"
            alt="SoundSellers"
            className="h-8 w-8 md:h-10 md:w-10 object-contain"
          />
          <span className="text-lg md:text-xl font-bold text-gray-800">
            SoundSellers
          </span>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <div className="relative group">
            <button className="flex items-center text-gray-700 hover:text-black">
              Marketplace <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <div className="absolute mt-2 bg-white shadow-md rounded-md py-2 w-44 hidden group-hover:block">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Guitars</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Drums</a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Keyboards</a>
            </div>
          </div>

          <a href="#" className="text-gray-700 hover:text-black">Studio</a>
          <a href="#" className="text-gray-700 hover:text-black">About</a>
          <a href="#" className="text-gray-700 hover:text-black">Contact</a>
        </div>

        <div className="flex items-center space-x-5">
          <div className="relative">
            <Heart className="h-6 w-6 text-[#a36c3e] cursor-pointer" />
            <span className="absolute -top-2 -right-2 text-xs bg-[#a36c3e] text-white rounded-full px-1">
              3
            </span>
          </div>
          <div className="relative">
            <ShoppingCart className="h-6 w-6 text-[#a36c3e] cursor-pointer" />
            <span className="absolute -top-2 -right-2 text-xs bg-[#a36c3e] text-white rounded-full px-1">
              2
            </span>
          </div>

          <div className="relative">
            <button className="flex items-center bg-gray-100 rounded-full px-2 py-1 space-x-2">
              <img
                src="/abu-hurayra-syam-with-panjabi.jpg"
                alt="User"
                className="h-8 w-8 rounded-full border"
              />
              <ChevronDown className="h-4 w-4 text-gray-600" />
            </button>
          </div>

          <button className="bg-[#a36c3e] text-white px-5 py-2 rounded-full hover:bg-[#8b5932] transition text-sm md:text-base hidden md:block">
            Sell your gear
          </button>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white px-6 pb-4 space-y-4 shadow-lg">
          <a href="#" className="block text-gray-700 hover:text-black">Marketplace</a>
          <a href="#" className="block text-gray-700 hover:text-black">Studio</a>
          <a href="#" className="block text-gray-700 hover:text-black">About</a>
          <a href="#" className="block text-gray-700 hover:text-black">Contact</a>
          <button className="bg-[#a36c3e] text-white px-5 py-2 rounded-full hover:bg-[#8b5932] transition text-sm md:text-base w-full">
            Sell your gear
          </button>
        </div>
      )}
    </nav>
  );
}
