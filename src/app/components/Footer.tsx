import React from 'react';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa6';
import { RiWhatsappFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import logo from '../../../public/images/pimtek.svg';

const Footer = () => {
  return (
    <footer className="bg-[#162639] w-full py-10 px-6 sm:px-10 flex flex-col items-center">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-4xl mb-6 sm:mb-4 space-y-6 sm:space-y-0">
        <div className="flex justify-center sm:justify-start items-center">
          <Image
            src={logo}
            alt="logo pimtek"
            className="w-48 sm:w-64 lg:w-96 h-auto"
          />
        </div>

        <div className="text-primary-white text-base sm:text-lg space-y-2 text-center sm:text-left">
          <div className="font-bold mb-2">Terhubung dengan kami</div>
          <div className="flex justify-center sm:justify-start items-center space-x-2">
            <FaInstagram className="text-[#FFCC00]" />
            <span>@pimtek_2024</span>
          </div>
          <div className="flex justify-center sm:justify-start items-center space-x-2">
            <RiWhatsappFill className="text-[#FFCC00]" />
            <span>+62 8xxxxxxxxx</span>
          </div>
          <div className="flex justify-center sm:justify-start items-center space-x-2">
            <MdEmail className="text-[#FFCC00]" />
            <span>pimtekftuh2024@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="text-primary-white text-xs sm:text-sm text-center mt-4">
        © PIMTEK 2024. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
