"use client";
import React from 'react';
import Image from 'next/image';

const CategoryCardAllThreads: React.FC = () => {
  return (
    <div className="bg-[#0F1B2E] px-10 py-4 rounded transition-all duration-300 ease-in-out">
      <div className="flex space-x-4 items-center">
        <Image 
            src="/assets/thumbnail.png" 
            alt="thumbnail" 
            width={150}
            height={150}
            className="w-24 h-24 object-cover rounded" 
        />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">Discussion Title</h2>
            <div className="flex space-x-2 items-center">
              <span className="flex items-center text-sm text-gray-400">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.55 4.55a2 2 0 01-2.83 2.83L12 13l-4.72 4.72a2 2 0 01-2.83-2.83L9 10 5 6m10 0l4 4"></path>
                </svg>
                35
              </span>
              <span className="flex items-center text-sm text-gray-400">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 10l-6 6m0 0L9 15l-3-3"></path>
                </svg>
                10
              </span>
              <button className="py-1 px-3 bg-blue-500 rounded hover:bg-blue-700">All Threads</button>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-400">User performed some activity</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCardAllThreads;
