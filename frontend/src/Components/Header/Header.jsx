import React from "react"; 
import { FaUtensils, FaArrowRight, FaMotorcycle, FaStar } from "react-icons/fa";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <div className="relative w-full min-h-[90vh] overflow-hidden">
      {/* Background image with optimized styling */}
      <div className="absolute inset-0 z-0">
        <img 
          src={assets.header_img} 
          alt="Delicious Food" 
          className="w-full h-full object-cover"
        />
        {/* Enhanced overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 md:py-0 h-full flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-2/3">
            {/* Brand badge with animation */}
            <div className="inline-flex items-center bg-yellow-500 text-gray-900 px-4 sm:px-5 py-2 rounded-full mb-6 sm:mb-8 shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              <FaUtensils className="mr-2 sm:mr-3 text-lg sm:text-xl" />
              <span className="font-bold tracking-wide text-base sm:text-lg">PaMoTra</span>
            </div>
            
            {/* Main heading with improved typography */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 sm:mb-8">
              <span className="block">Delicious Food</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
                Delivered Fast
              </span>
            </h1>
            
            <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 max-w-xl">
              Welcome to PaMoTra, where we bring premium culinary experiences to your doorstep. Our chefs craft each meal with passion, ensuring every bite is an unforgettable delight.
            </p>
            
            {/* CTA button with improved styling */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-8 lg:mb-0">
              <button className="group flex items-center space-x-2 sm:space-x-3 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center sm:justify-start">
                <span className="text-base sm:text-lg">Explore Menu</span>
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </button>
              
              {/* Social proof indicator - now visible on all screens */}
              <div className="flex items-center space-x-1 sm:space-x-2 text-yellow-400 mt-4 sm:mt-0">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="ml-2 text-white text-sm sm:text-base font-medium">4.9/5 (2.5k+ reviews)</span>
              </div>
            </div>
          </div>
          
          {/* Feature cards column */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/10 transform hover:-translate-y-1 transition-all duration-300 shadow-md">
              <div className="flex items-center">
                <div className="bg-yellow-500/20 p-3 sm:p-4 rounded-full mr-3 sm:mr-4">
                  <FaMotorcycle className="text-yellow-500 text-lg sm:text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg">Express Delivery</h3>
                  <p className="text-gray-300 text-xs sm:text-sm mt-1">Hot food delivered in 30 minutes</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/10 transform hover:-translate-y-1 transition-all duration-300 shadow-md">
              <div className="flex items-center">
                <div className="bg-yellow-500/20 p-3 sm:p-4 rounded-full mr-3 sm:mr-4">
                  <FaUtensils className="text-yellow-500 text-lg sm:text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg">Premium Quality</h3>
                  <p className="text-gray-300 text-xs sm:text-sm mt-1">Crafted by professional chefs</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/10 transform hover:-translate-y-1 transition-all duration-300 shadow-md">
              <div className="flex items-center">
                <div className="bg-yellow-500/20 p-3 sm:p-4 rounded-full mr-3 sm:mr-4">
                  <FaStar className="text-yellow-500 text-lg sm:text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base sm:text-lg">5-Star Experience</h3>
                  <p className="text-gray-300 text-xs sm:text-sm mt-1">Customer satisfaction guaranteed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle animated gradient at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-pulse"></div>
    </div>
  );
};

export default Header;