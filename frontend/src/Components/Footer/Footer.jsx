import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Left Section */}
        <div className="md:w-1/3">
          <h1 className="text-3xl font-bold text-red-500 mb-4">PaMoTra</h1>
          <p className="text-gray-300">
            PaMoTra delivers your favorite restaurant dishes straight to your door.
            Enjoy fast, reliable, and delicious food delivery service designed to satisfy your cravings anytime, anywhere.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="text-gray-300 hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-110 hover:drop-shadow-xl"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-110 hover:drop-shadow-xl"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-110 hover:drop-shadow-xl"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* Center Section */}
        <div className="md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-red-500 transition duration-300 ease-in-out"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-red-500 transition duration-300 ease-in-out"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-red-500 transition duration-300 ease-in-out"
              >
                Delivery
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-red-500 transition duration-300 ease-in-out"
              >
                Privacy
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="md:w-1/3">
          <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
          <ul className="space-y-2">
            <li className="text-gray-300 hover:text-red-500 transition duration-300 ease-in-out">
              +91 7008939577
            </li>
            <li className="text-gray-300 hover:text-red-500 transition duration-300 ease-in-out">
              gohanmohapatra@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-8 border-gray-700" />
      <p className="text-center text-gray-500 text-sm">
        © 2025 PaMoTra. All rights reserved. No part of this publication may be reproduced,
        distributed, or transmitted in any form or by any means without prior written permission.
      </p>
    </div>
  );
};

export default Footer;
