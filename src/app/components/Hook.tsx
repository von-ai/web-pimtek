import React from 'react';
import RegisButton from '../utils/RegisButton';

const Hook = () => {
  return (
    <>
      <section className="bg-background-primary w-full h-auto pt-20 sm:pt-28">
        <div className="flex justify-center px-4 sm:px-8 lg:px-72 items-center text-primary-white font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
          accumsan turpis a efficitur.
        </div>
        <div className="flex justify-center items-center pt-8 sm:pt-10 pb-10 sm:pb-20">
          <RegisButton />
        </div>
      </section>
    </>
  );
};

export default Hook;
