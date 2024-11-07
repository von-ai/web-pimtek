'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/images/logo pimtek.png';
import RegisButton from '../utils/RegisButton';

type NavbarItem = {
  key: number;
  item: string;
  link?: string;
};

import navbar from '../utils/NavItem';

const Navbar = () => {
  const [isOpen, setOpen] = useState();
  return (
    <>
      <nav className="px-32">
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
                <li key={navItem.key} className="px-4">
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
