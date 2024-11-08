'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/pimtek.svg';
import RegisButton from '../utils/RegisButton';

type NavbarItem = {
  key: number;
  item: string;
  link?: string;
};

import navbar from '../utils/NavItem';
import { text } from 'stream/consumers';

const Navbar = ({ showBackGround = true }) => {
  const [isOpen, setOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full px-32 transition-all duration-300 ${
          (isScrolled && showBackGround) || showBackGround === false
            ? 'z-50 bg-primary-blue'
            : 'shadow-none'
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          <Image
            src={logo}
            priority={true}
            alt="logo pimtek"
            className="w-[150px]"
          />
          <div
            className={`md:flex space-x-8 ${
              isOpen ? 'block' : 'hidden'
            } md:block`}
          >
            <ul className="columns-3 text-primary-blue text-base font-semibold">
              {navbar.map((navItem) => (
                <li
                  key={navItem.key}
                  className={`px-4 hover:text-secondary-yellow ${
                    (isScrolled && showBackGround) || showBackGround === false
                      ? 'text-primary-white'
                      : 'text-primary-blue'
                  }`}
                >
                  <a href={navItem.link || '#'}>{navItem.item}</a>
                </li>
              ))}
            </ul>
          </div>
          <RegisButton />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
