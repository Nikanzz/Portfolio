"use client"; 

import React, { useState } from 'react'; 
import Image from 'next/image';
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full px-10 fixed top-0 backdrop-blur-md z-[100] relative'>
      <div className='flex flex-row items-center justify-between m-auto'>
        <a href="#home" className='flex flex-row items-center'>
          <Image 
            src="/logo_nav.png" 
            alt='logo' 
            width={35} 
            height={35} 
            className='cursor-pointer hover:animate-slowspin'
          />
        </a>

        <div className='w-[500px] h-full hidden md:flex flex-row items-center justify-between p-5'>
          <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] rounded-full p-3 font-[500] text-gray-200'>
            <a href="#about-me" className="cursor-pointer font-sans hover:text-gray-400"> About me </a>
            <a href="#skills" className="cursor-pointer font-sans hover:text-gray-400"> Skills </a>
            <a href="#projects" className="cursor-pointer font-sans hover:text-gray-400"> Projects </a>
          </div>
        </div>

        <div className='flex md:hidden p-5'>
          <button
            onClick={() => setIsOpen(!isOpen)} 
            className='text-gray-200 text-3xl cursor-pointer' 
            aria-label="Toggle menu"
          >
            {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div 
          className='
            flex md:hidden flex-col items-center 
            w-full absolute top-full left-0 
            bg-[#030014f0] backdrop-blur-lg 
            shadow-lg rounded-b-lg p-5 
          '
        >
          <a 
            href="#about-me" 
            className="cursor-pointer font-sans text-gray-200 hover:text-gray-400 my-3 text-lg cursor-pointer"
            onClick={() => setIsOpen(false)} 
          > 
            About me 
          </a>
          <a 
            href="#skills" 
            className="cursor-pointer font-sans text-gray-200 hover:text-gray-400 my-3 text-lg cursor-pointer"
            onClick={() => setIsOpen(false)}
          > 
            Skills 
          </a>
          <a 
            href="#projects" 
            className="cursor-pointer font-sans text-gray-200 hover:text-gray-400 my-3 text-lg cursor-pointer"
            onClick={() => setIsOpen(false)}
          > 
            Projects 
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;