import React from "react";
import drumBg from "../../assets/drums.png";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${drumBg})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Your Sound, Your Story
          </h1>

          <p className="text-lg text-gray-300 max-w-xl">
            Buy, sell, and rent musical instruments from trusted sellers.
            Connect with top music teachers and find your perfect sound.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="px-6 py-3 bg-[#c19a6b] rounded-full text-white font-medium hover:bg-[#a88050] transition">
              Shop Now
            </button>
            <button className="px-6 py-3 border border-[#c19a6b] rounded-full text-white font-medium hover:bg-[#c19a6b] hover:text-black transition">
              Find Lessons
            </button>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-8 mt-12">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white">50K+</h3>
              <p className="text-sm text-gray-300">Active Listings</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white">15K+</h3>
              <p className="text-sm text-gray-300">Happy Musicians</p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white">500+</h3>
              <p className="text-sm text-gray-300">Music Teachers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
