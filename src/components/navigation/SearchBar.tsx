"use client"; // Menandai komponen ini sebagai komponen klien

import React from "react";

interface SearchBarProps {
  toggleSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ toggleSearch }) => {
  return (
    <div className="fixed inset-0 bg-[#0A0F19] bg-opacity-90 flex items-center justify-center z-20">
      <div className="relative bg-white p-4 rounded-lg shadow-lg w-96">
        <button 
          type="button" 
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={toggleSearch}
        >
          &times;
        </button>
        <input 
          type="text" 
          placeholder="Search..." 
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
    </div>
  );
};

export default SearchBar;
