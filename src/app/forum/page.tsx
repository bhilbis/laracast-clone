"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import CategoryCard from '@/components/forum/CategorySideBar';
import SearchBar from '@/components/navigation/SearchBar';
import CategoryCardChannels from '@/components/forum/CategoryCardChannels';
import CategoryCardAllThreads from '@/components/forum/CategoryCardAllThreads';
// Import other category card components similarly

const Forum = () => {
  const [category, setCategory] = useState('All threads');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showSortText, setShowSortText] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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

  const handleTagSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value && !selectedTags.includes(value)) {
      setSelectedTags([...selectedTags, value]);
    }
  };

  const handleTagRemove = (tag: string) => {
    setSelectedTags(selectedTags.filter(t => t !== tag));
  };

  const renderCategoryContent = () => {
    switch (category) {
      case 'All threads':
        return (
          <>
            <CategoryCardAllThreads />
            <CategoryCardChannels />
            {/* Add other category components here */}
          </>
        );
      case 'Channels':
        return <CategoryCardChannels />;
      // Add other cases similarly
      default:
        return <CategoryCardAllThreads />;
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div className="flex min-h-screen bg-[#0A0F19] text-white pt-16 mt-9">
      {/* Left Sidebar */}
      <div className="w-1/6 p-4 bg-[#0A0F19] sticky top-16 h-screen overflow-y-auto ml-4">
        <button className="w-full mb-4 py-4 px-8 bg-blue-500 rounded-2xl hover:bg-blue-700">
          New Discussion
        </button>
        <div>
          {categories.map((cat) => (
            <CategoryCard
              key={cat}
              category={cat}
              isActive={category === cat}
              onClick={() => setCategory(cat)}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-4/6 p-8">
      <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2 text-[12px] text-[#BAD9FC]">
            <select title='category1' className="bg-[#0F1B2E] py-2 px-3 rounded-3xl">
              <option>Admin 1</option>
              <option>Admin 2</option>
              <option>Admin 3</option>
            </select>
            <select title='category2' className="bg-[#0F1B2E] py-2 px-3 rounded-3xl" onChange={handleTagSelect}>
              <option value="">All</option>
              <option value="Latest">Latest</option>
              <option value="Discussion Channels">Discussion Channels</option>
              <option value="Popular This Week">Popular This Week</option>
              <option value="Popular All Time">Popular All Time</option>
              <option value="Solved">Solved</option>
              <option value="Unsolved">Unsolved</option>
              <option value="No Replies Yet">No Replies Yet</option>
            </select>
          </div>
          <div className="flex items-center space-x-2 text-[12px] text-[#BAD9FC]">
            <button title='show' type='button' className="flex items-center" onClick={() => setShowSortText(!showSortText)}>
            <svg width={15} height={15} viewBox='0 0 15 15' className='mx-2'>
              <g className='forum-excerpt-toggle-lines fill-current text-black/50 dark:text-gray-600'>
                <rect className='forum-excerpt-toggle-line' width={15} height={6} rx={2}></rect>
                <rect className='forum-excerpt-toggle-line' width={15} height={6} rx={2} y={9}></rect>
              </g>
            </svg>
            </button>

            <button title='hidden' disabled type='button' className="flex items-center" onClick={() => setShowSortText(!false)}>
            <svg width={15} height={15} viewBox='0 0 15 15' className='mx-2'>
              <g className='forum-excerpt-toggle-lines fill-current text-black/50 dark:text-gray-600'>
                <rect className='forum-excerpt-toggle-line' width={15} height={4} rx={2}></rect>
                <rect className='forum-excerpt-toggle-line' width={8} height={4} rx={2} y={11}></rect>
                <rect className='forum-excerpt-toggle-line' width={15} height={4} rx={2} y={5.5}></rect>
              </g>
            </svg>
            </button>

            <button className="flex items-center bg-[#0F1B2E] py-2 px-3 rounded-3xl hover:bg-[#112340]" onClick={toggleSearch}>
              <Image 
                src={"/assets/search1.svg"}
                alt='search'
                width={24}
                height={24}
                className='w-5 h-5'
              />
              <span className="ml-2">Search...</span>
            </button>
          </div>
        </div>

        <div className="mb-4 flex flex-wrap">
          {selectedTags.map(tag => (
            <div key={tag} className="bg-blue-500 text-white px-4 py-1 rounded-full mr-2 mb-2 flex items-center">
              <span>{tag}</span>
              <button className="ml-2" onClick={() => handleTagRemove(tag)}>
                &times;
              </button>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {renderCategoryContent()}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-1/6 p-4 bg-[#0A0F19] sticky top-16 h-screen overflow-y-auto mr-4">
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

      {searchOpen && <SearchBar toggleSearch={toggleSearch} />}
    </div>
  );
};

export default Forum;
