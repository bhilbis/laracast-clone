"use client"; // Menandai komponen ini sebagai komponen klien

import React from "react";

interface SignInModalProps {
  toggleSignInModal: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ toggleSignInModal }) => {
  return (
    <div className="fixed inset-0 bg-[#0A0F19] bg-opacity-95 flex items-center justify-center z-20">
      <div className="relative bg-[#121d2e] p-8 rounded-lg shadow-lg w-[34em]">
        <button 
          type="button" 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={toggleSignInModal}
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>
        <form>
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-2 mb-4 border border-gray-300 rounded-lg"
          />
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white px-2 py-3 rounded-lg my-3"
          >
            Log In
          </button>

          <button 
            type="submit" 
            className="w-full bg-[#112139] text-white p-2 rounded-lg"
          >
            Log In With GitHub?
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInModal;
