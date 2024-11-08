import React from 'react';
import Navbar from './hooks/Navbar';
import About from './components/About';

const page = () => {
  return (
    <main>
      <Navbar />
      <About />
    </main>
  );
};

export default page;
