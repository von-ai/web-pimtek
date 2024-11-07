import React from 'react';
import RegisButton from '../utils/RegisButton';
import GuideButton from '../utils/GuideButton';
import Image from 'next/image';
import logo from '../../../public/images/pimtek.svg';

const About = () => {
  return (
    <>
      <section
        className="flex px-32  items-center"
        style={{ paddingTop: '3rem', paddingBottom: '8rem' }}
      >
        <section className="flex-[2] max-w-lg">
          <div>
            <div className="text-[64px] font-bold text-primary-blue">
              PEKAN ILMIAH MAHASISWA TEKNIK 2024
            </div>
            <div className="mt-4 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              vehicula accumsan turpis a efficitur. Fusce arcu quam, cursus at
              vehicula sit amet, sollicitudin nec sapien. Praesent at aliquam
              libero. Nullam.
            </div>
            <div className="mt-6 flex gap-4">
              <RegisButton />
              <GuideButton />
            </div>
          </div>
        </section>
        <section className="flex-[1] flex justify-center">
          <Image
            src={logo}
            className="w-[600px] h-auto pl-10"
            alt="logo pimtek"
          />
        </section>
      </section>
    </>
  );
};

export default About;
