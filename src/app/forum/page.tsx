"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Forum = () => {
  const [category, setCategory] = useState('All threads');

  const categories = [
    'All threads',
    'Channels',
    'Popular This Week',
    'Popular All Time',
    'Solved',
    'Unsolved',
    'No Replies Yet',
    'Leaderboard'
  ];

  return (
      <div className="flex min-h-screen bg-[#0A0F19] text-white pt-16 mt-9">
      {/* Left Sidebar */}
      <div className="w-1/4 p-4 bg-[#0A0F19] sticky top-16 h-screen overflow-y-auto">
        <button className="w-full mb-4 py-4 px-8 bg-blue-500 rounded-2xl hover:bg-blue-700">
          New Discussion
        </button>
        <div>
          {categories.map((category) => (
            <div
            key={category}
            className={`py-2 px-4 cursor-pointer flex ${category === category ? 'bg-[#0A0F19]' : 'bg-gray-700 hover:bg-gray-600'}`}
              onClick={() => setCategory(category)}
            >
            <div className="px-1 bg-[#1B55AC] rounded-t-lg rounded-b-lg mr-3"></div>
              <span>{category}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-1/2 p-4">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-2">
            <select title='category1' className="bg-[#0F1B2E] py-2 px-4 rounded">
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
            <select title='category2' className="bg-[#0F1B2E] py-2 px-4 rounded">
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <select title='sort' className="bg-[#0F1B2E] py-2 px-4 rounded">
              <option>Sort By</option>
            </select>
            <select title='filter' className="bg-[#0F1B2E] py-2 px-4 rounded">
              <option>Filter By</option>
            </select>
            <button className="flex items-center bg-[#0F1B2E] py-2 px-4 rounded hover:bg-gray-700">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              Begin Your Search...
            </button>
          </div>
        </div>
        <div className="space-y-4">
          {[1, 2].map((item) => (
            <div key={item} className="bg-[#0F1B2E] p-4 rounded">
              <div className="flex space-x-4">
                <Image 
                    src="" 
                    alt="thumbnail" 
                    width={150}
                    height={150}
                    className="w-24 h-24 object-cover rounded" />

                <div className="flex-1">
                  <h2 className="text-xl font-bold">Discussion Title</h2>
                  <p className="text-sm text-gray-400">Watching: 10 | Comments: 5</p>
                  <button className="mt-2 py-1 px-3 bg-blue-500 rounded hover:bg-blue-700">Join Discussion</button>
                  <p className="mt-2 text-gray-300">This is a brief description of the discussion...</p>
                  <p className="mt-2 text-sm text-gray-400">Posted by User</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-1/4 p-4 bg-[#0A0F19] sticky top-16 h-screen overflow-y-auto">
        <div className="bg-[#0F1B2E] p-4 mb-4 rounded">
          <h3 className="text-lg font-bold mb-2">Advertisement 1</h3>
          <p className="text-gray-400">This is an ad description.</p>
        </div>
        <div className="bg-[#0F1B2E] p-4 mb-4 rounded">
          <h3 className="text-lg font-bold mb-2">Advertisement 2</h3>
          <p className="text-gray-400">This is an ad description.</p>
        </div>
        <div className="bg-[#0F1B2E] p-4 mb-4 rounded">
          <h3 className="text-lg font-bold mb-2">Advertisement 3</h3>
          <p className="text-gray-400">This is an ad description.</p>
        </div>
      </div>
    </div>
  );
};

export default Forum;
