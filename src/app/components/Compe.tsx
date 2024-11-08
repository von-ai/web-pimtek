'use client';
import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import SkimCard from '../hooks/SkimCard';
import skim from '../utils/SkimData';

const Compe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleItemsCount = 3;

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
      <section className="bg-background-primary w-full h-auto pt-28">
        <div className="flex justify-center items-center text-primary-white font-bold text-5xl">
          CABANG KOMPETISI
        </div>
        <div className="flex justify-center items-center pt-20">
          <SkimCard
            visibleItems={visibleItemsCount}
            startIndex={currentIndex}
          />
        </div>
        <div
          className="flex justify-center items-center"
          style={{ paddingTop: '2rem', paddingBottom: '6rem' }}
        >
          <button
            className="w-12 h-12 bg-secondary-yellow rounded-full mx-4 flex items-center justify-center hover:bg-primary-white duration-200 ease-in-out"
            onClick={() => handlePrevious()}
          >
            <IoIosArrowBack className="w-10 h-10 text-background-primary " />
          </button>
          <button
            className="w-12 h-12 bg-secondary-yellow rounded-full mx-4 flex items-center justify-center hover:bg-primary-white duration-200 ease-in-out"
            onClick={() => handleNext()}
          >
            <IoIosArrowForward className="w-10 h-10 text-background-primary" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Compe;
