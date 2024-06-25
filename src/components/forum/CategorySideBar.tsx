"use client";
import React from 'react';

interface CategoryCardProps {
  category: string;
  isActive: boolean;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, isActive, onClick }) => {
  return (
    <div
      className={`py-2 px-4 cursor-pointer flex items-center transition-all duration-300 ease-in-out ${
        isActive ? 'bg-[#0F1B2E] text-white' : 'bg-[#0A0F19] hover:bg-[#0F1B2E] text-gray-500'
      }`}
      onClick={onClick}
    >
      <div className={`${isActive ? 'bg-[#1B55AC]' : 'bg-[#0C1628]'} px-1 py-2 rounded-t-lg rounded-b-lg mr-3`}></div>
      <span>{category}</span>
    </div>
  );
};

export default CategoryCard;
