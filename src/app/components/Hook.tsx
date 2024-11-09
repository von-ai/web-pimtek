import React from 'react';
import RegisButton from '../utils/RegisButton';
const Hook = () => {
  return (
    <>
      <section className="bg-background-primary w-full h-auto pt-28">
        <div className="flex justify-center px-72 items-center text-primary-white font-bold text-4xl text-balance text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula
          accumsan turpis a efficitur.
        </div>
        <div
          className="flex justify-center items-center"
          style={{ paddingTop: '2rem', paddingBottom: '5rem' }}
        >
          <RegisButton />
        </div>
      </section>
    </>
  );
};

export default Hook;
