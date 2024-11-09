import React from 'react';
import Navbar from './hooks/Navbar';
import About from './components/About';
import Compe from './components/Compe';
import Timeline from './components/Timeline';
import Hook from './components/Hook';

const page = () => {
  return (
    <main>
      <Navbar />
      <About />
      <Compe />
      <Timeline />
      <Hook />
    </main>
  );
};

export default page;
