import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
      <nav className="bg-[#0A0F19] relative">
        <div className="navbar-background"></div>
        <div className="container mx-auto flex items-center justify-between p-4 relative z-10">
          {/* Logo / Name */}
          <div className="text-xl font-bold ml-3 text-[22px] pr-[14rem] text-white">
          <Link href="/">FAKERXYNS</Link>
          </div>
  
          {/* Navigation Links */}
          <div className="flex space-x-0">
          <Link href="#" className="block text-md font-medium uppercase text-[15px] text-gray-500 hover:text-white md:px-3 xl:px-5 xl:text-center">Topics</Link>
          <Link href="#" className="block text-md font-medium uppercase text-[15px] text-gray-500 hover:text-white md:px-3 xl:px-5 xl:text-center">Series</Link>
          <Link href="#" className="block text-md font-medium uppercase text-[15px] text-gray-500 hover:text-white md:px-3 xl:px-5 xl:text-center">Path</Link>
          <Link href="#" className="block text-md font-medium uppercase text-[15px] text-gray-500 hover:text-white md:px-3 xl:px-5 xl:text-center">Larabits</Link>
          <Link href="#" className="block text-md font-medium uppercase text-[15px] text-gray-500 hover:text-white md:px-3 xl:px-5 xl:text-center">Forum</Link>
          <Link href="#" className="block text-md font-medium uppercase text-[15px] text-gray-500 hover:text-white md:px-3 xl:px-5 xl:text-center">Podcast</Link>
          </div>
  
          {/* Right Side Icons and Buttons */}
          <div className="flex items-center space-x-3 mr-2">
            <button type="button" title="search" className="btn flex-center text-white bg-[#112139] py-[10px] px-3 rounded-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <button type="button" className="btn flex-center text-white bg-[#112139] px-8 py-2 rounded-lg hover:bg-blue-950">Sign In</button>
            <button type="button" className="btn flex-center text-white bg-blue-500  px-4 py-2 rounded-lg">Get Started For Free</button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;