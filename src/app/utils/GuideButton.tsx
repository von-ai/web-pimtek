'use client';
import React from 'react';

const GuideButton = () => {
  const handleButton: any = () => {
    window.location.href = 'https://www.instagram.com/pimtek_2024/';
  };
  return (
    <div>
      <button
        className="w-auto h-auto px-[25px] py-[10px] bg-secondary-krem font-semibold text-sm rounded-full 
        hover:bg-white transition-colors duration-200 ease-in-out"
        onClick={handleButton}
      >
        Unduh Pedoman
      </button>
    </div>
  );
};

export default GuideButton;
