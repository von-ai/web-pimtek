'use client';
import React, { useState, useEffect } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import SkimCard from '../hooks/SkimCard';
import skim from '../utils/SkimData';

const Compe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItemsCount, setVisibleItemsCount] = useState(3);

  useEffect(() => {
    const updateVisibleItemsCount = () => {
      if (window.innerWidth < 640) {
        setVisibleItemsCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItemsCount(2);
      } else {
        setVisibleItemsCount(3);
      }
    };

    updateVisibleItemsCount();
    window.addEventListener('resize', updateVisibleItemsCount);
    return () => window.removeEventListener('resize', updateVisibleItemsCount);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, skim.length - visibleItemsCount)
    );
  };

  return (
    <>
      <section
        className="bg-background-primary w-full h-auto pt-20 sm:pt-28"
        id="Compe"
      >
        <div className="flex justify-center items-center text-primary-white font-bold text-3xl sm:text-4xl lg:text-5xl">
          CABANG KOMPETISI
        </div>
        <div className="flex justify-center items-center pt-10 sm:pt-20">
          <SkimCard
            visibleItems={visibleItemsCount}
            startIndex={currentIndex}
          />
        </div>
        <div className="flex justify-center items-center pt-8 sm:pt-10 pb-10 sm:pb-24">
          <button
            className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary-yellow rounded-full mx-2 sm:mx-4 flex items-center justify-center hover:bg-primary-white duration-200 ease-in-out"
            onClick={handlePrevious}
          >
            <IoIosArrowBack className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-background-primary" />
          </button>
          <button
            className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary-yellow rounded-full mx-2 sm:mx-4 flex items-center justify-center hover:bg-primary-white duration-200 ease-in-out"
            onClick={handleNext}
          >
            <IoIosArrowForward className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-background-primary" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Compe;
