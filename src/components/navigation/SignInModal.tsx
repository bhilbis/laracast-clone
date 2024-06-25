"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface SignInModalProps {
  toggleSignInModal: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ toggleSignInModal }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="fixed inset-0 bg-[#05070C] bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-20">
      <div className="relative bg-[#0D131D] p-16 rounded-lg shadow-lg w-[37em] transform transition-transform duration-300 ease-in-out translate-y-10 opacity-0 animate-modal">
        <button
          title="close button" 
          type="button" 
          className="absolute top-5 right-5  bg-[#112139] px-2 py-1 flex items-center justify-center text-[25px] hover:bg-blue-950 rounded-lg"
          onClick={toggleSignInModal}
        >
          <Image
            src={"/assets/closewhite1.svg"}
            alt="Close"
            width={20}
            height={20}
            className="w-7"
          />
        </button>
        <h2 className="text-[35px] text-white font-bold mb-4 text-center">Log In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="text-[#BAD9FC] text-[14px]"><h2>Email</h2></label>
            <input 
              type="email" 
              placeholder="Enter Email" 
              className="w-full p-2 bg-[#0D131D] border-b-2 border-[#112139] focus:outline-none focus:border-blue-600 text-white transition-colors"
            />
          </div>
          <div className="mb-4 relative">
            <label htmlFor="password" className="text-[#BAD9FC] text-[14px]"><h2>Password</h2></label>
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Enter Password" 
              className="w-full p-2 bg-[#0D131D] border-b-2 border-[#112139] focus:outline-none focus:border-blue-600 text-white transition-colors"
            />
            <button
              type="button"
              className="absolute right-2 top-9 text-blue-500 text-[12px]"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white text-[14px] font-[700] px-2 py-3 rounded-lg my-4 "
          >
            Log In
          </button>

          <button 
            type="button" 
            className="w-full bg-[#112139] text-white text-[14px] font-[700] px-5 py-3 rounded-lg mb-4"
          >
            Log In With GitHub?
          </button>

          <div className="flex justify-between text-[#BAD9FC] text-[15px] py-2 bottom-5">
            <Link href="">Forgot Your Password?</Link>
            <Link href="">Sign Up!</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
