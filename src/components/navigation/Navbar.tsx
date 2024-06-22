"use client"; // Menandai komponen ini sebagai komponen klien

import React, { useState } from "react";
import Link from "next/link";
import SearchBar from "./SearchBar";
import SignInModal from "./SignInModal";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleSignInModal = () => {
    setSignInOpen(!signInOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-[#0A0F19] relative">
      <div className="navbar-background"></div>
      <div className="container mx-auto flex items-center justify-between p-4 relative z-10">
        {/* Logo / Name */}
        <div className="text-xl font-bold ml-3 text-[22px] pr-[12rem] text-white tracking-widest">
          <Link href="/">FAKERXYNS</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-0">
          <Link href="#" className="block text-md font-[700] uppercase text-[15px] text-gray-500 hover:text-white md:px-3 xl:px-5 xl:text-center">MY LIBRARY</Link>
          <Link href="#" className="block text-md font-[700] uppercase text-[15px] text-gray-500 hover:text-white md:px-3 xl:px-5 xl:text-center">Topics</Link>
          <Link href="#" className="block text-md font-[700] uppercase text-[15px] text-gray-500 hover:text-white md:px-3 xl:px-5 xl:text-center">Series</Link>
          <Link href="#" className="block text-md font-[700] uppercase text-[15px] text-gray-500 hover:text-white md:px-3 xl:px-5 xl:text-center">Path</Link>
          <Link href="#" className="block text-md font-[700] uppercase text-[15px] text-gray-500 hover:text-white md:px-3 xl:px-5 xl:text-center">Larabits</Link>
          <Link href="#" className="block text-md font-[700] uppercase text-[15px] text-gray-500 hover:text-white md:px-3 xl:px-5 xl:text-center">Forum</Link>
          <Link href="#" className="block text-md font-[700] uppercase text-[15px] text-gray-500 hover:text-white md:px-3 xl:px-5 xl:text-center">Podcast</Link>
        </div>

        {/* Right Side Icons and Buttons */}
        <div className="flex items-center space-x-3 mr-2">
          <button 
            type="button" 
            title="search" 
            className="leading-none flex-center h-full px-3 transition-all text-white bg-[#112139] rounded-lg hover:bg-blue-900 hover:text-blue-700 xl:h-[40px]"
            onClick={toggleSearch}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
          <button 
            type="button" 
            className="btn flex-center font-[700] text-[14px] text-white bg-[#112139] px-8 py-[9px] rounded-lg hover:bg-blue-950"
            onClick={toggleSignInModal}
          >
            <span className="inline-block flex-shrink-0 text-wrap">Sign In</span>
          </button>
          <button type="button" className="btn flex-center font-[700] text-[14px] text-white bg-blue-500  px-4 py-[9px] rounded-lg">Get Started For Free</button>

          {/* Switch Toggle Mode */}
          <button 
            type="button" 
            title="switch toggle mode" 
            className={`relative flex h-full w-14 items-center rounded-full bg-gray-400 transition-all duration-500 md:h-[30px] md:w-[52px] ${darkMode ? 'bg-blue-600' : 'bg-gray-400'}`}
            onClick={toggleDarkMode}
          >
            <span className={`absolute left-1 h-6 w-6 rounded-full bg-white transition-transform duration-300 transform ${darkMode ? 'translate-x-full' : 'translate-x-0'}`}></span>
          </button>

          <div className="flex items-center text-white">
            {/* <img src="/profile-icon.png" alt="Profile" className="w-8 h-8 rounded-full" /> */}
          </div>
        </div>
      </div>

      {searchOpen && <SearchBar toggleSearch={toggleSearch} />}

      {signInOpen && <SignInModal toggleSignInModal={toggleSignInModal} />}
    </nav>
  );
};

export default Navbar;
