import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div
        className="container mx-auto flex justify-between items-center py-4 px-6 
      md:px-20 lg:px-32 bg-transparent"
      >
        <img src={assets.logo} alt="Logo" />
        <ul className="hidden md:flex gap-7 text-white">
          <a
            href="#Header"
            className="cursor-pointer hover:text-gray-400"
          >
            Home
          </a>
          <a
            href="#About"
            className="cursor-pointer hover:text-gray-400"
          >
            About
          </a>
          <a
            href="#Projects"
            className="cursor-pointer hover:text-gray-400"
          >
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials 
          </a>
          
          <a
            href="#Contact"
            className="cursor-pointer hover:text-gray-400"
          >
           Contact Us
          </a>
        </ul>
        <button
          className="hidden md:block bg-white px-8 
        py-2 rounded-full"
        >
          Sign Up
        </button>
        <img
          src={assets.menu_icon}
          onClick={() => setShowMobileMenu(true)}
          className="md:hidden block w-7 cursor-pointer"
          alt="Menu"
        />
      </div>
      {/* -------------mobile-Menu--------------- */}
      <div
        className={`md:hidden ${
          showMobileMenu ? 'fixed w-full h-screen' : 'h-0 w-0'
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            src={assets.cross_icon}
            className="w-6"
            alt="Close Menu"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Projects"
            className="px-4 py-2 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonials"
            className="px-4 py-2 rounded-full inline-block"
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
