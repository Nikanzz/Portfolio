import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='w-full px-10 fixed top-0 backdrop-blur-md z-[100]'>
      <div className='flex flex-row items-center justify-between m-auto'>
        <a className='flex flex-row items-center'>
            <Image 
            src="/logo_nav.png" 
            alt='logo' 
            width={35} 
            height={35} 
            className='cursor-pointer hover:animate-slowspin'/>
        </a>

        <div className='w-[500px] h-full flex flex-row items-center justify-between p-5'>
          <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] rounded-full p-3 font-[500] text-gray-200'>
            <a href="" className="cursor-pointer font-sans hover:text-gray-400"> About me </a>
            <a href="" className="cursor-pointer font-sans hover:text-gray-400"> Skills </a>
            <a href="" className="cursor-pointer font-sans hover:text-gray-400"> Projects </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
