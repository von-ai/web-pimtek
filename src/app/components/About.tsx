import React from 'react';
import RegisButton from '../utils/RegisButton';
import GuideButton from '../utils/GuideButton';
import Image from 'next/image';
import logo from '../../../public/images/pimtek.svg';

const About = () => {
  return (
    <>
      <section
        id="About"
        className="flex flex-col lg:flex-row px-6 lg:px-32 items-center w-full justify-center"
        style={{ paddingTop: '6rem', paddingBottom: '8rem' }}
      >
        <section className="flex  justify-center columns-2 gap-8">
          <div>
            <div className="text-primary-blue font-bold text-3xl md:text-4xl lg:text-6xl lg:leading-normal">
              PEKAN ILMIAH MAHASISWA TEKNIK 2024
            </div>
            <div className="mt-4 text-base md:text-lg leading-relaxed">
              Pekan Ilmiah mahasiswa Teknik atau PIMTEK merupakan kegiatan pekan
              kreatif mahasiswa yang akan menjadi langkah awal untuk
              mempersiapkan para mahasiswa Teknik Universitas Hasanuddin dalam
              menyambut Pekan Ilmiah Mahasiswa Nasional (PIMNAS) ke-38 Together
              We Fight, Together We Win
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <RegisButton />
              <GuideButton />
            </div>
          </div>
          <div className="justify-center mt-8 lg:mt-0 hidden lg:flex">
            <Image src={logo} alt="logo pimtek" />
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
