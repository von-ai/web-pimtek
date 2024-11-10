'use client';
import React from 'react';

const RegisButton = () => {
  const handleButton = () => {
    window.location.href = 'https://www.instagram.com/pimtek_2024/';
  };
  return (
    <div>
      <button
        className="w-auto h-auto px-[25px] py-[10px] bg-secondary-yellow font-semibold text-sm rounded-full
        hover:bg-white transition-colors duration-200 ease-in-out"
        onClick={handleButton}
      >
        Daftar Sekarang
      </button>
    </div>
  );
};

export default RegisButton;
