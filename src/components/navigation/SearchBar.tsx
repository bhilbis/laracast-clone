"use client"; 
import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface SearchBarProps {
  toggleSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ toggleSearch }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      toggleSearch();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },);

  return (
    <div className="fixed inset-0 bg-[#0A0F19] bg-opacity-90 backdrop-blur-sm flex items-center justify-center z-20">
      <div
        ref={modalRef}
        className="relative bg-white py-2 px-3 rounded-lg shadow-lg w-[27rem] transform transition-transform duration-300 ease-in-out"
      >
        <div className="flex">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 outline-none border-gray-300 rounded-lg"
          />
          <Image
            src={"/assets/search1.svg"}
            alt="search"
            width={20}
            height={20}
            className="ml-2"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
