"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromTop, slideInFromLeft, slideInFromRight } from '@/utils/motion'
import { SparklesIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
    initial='hidden'
    animate='visible'
    className='flex flex-row gap-10 items-center justify-center px-20 mt-40 w-full z-[-20]'>
        <div className='h-full w-full flex flex-col items-start justify-center gap-5 m-auto text-start'>
            <motion.div
            variants={slideInFromLeft(0.5)}
            className='flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto'>
                <span>
                    Hi, my name is
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    {" "}
                    Jeremia Pinnywan Immanuel{" "}
                    </span>
                </span>
            </motion.div>

            <motion.p
            variants={slideInFromLeft(0.7)}
            className='text-xl text-gray-400 my-5 max-w-[600px]'>
                I&apos;m a Computer Science undergraduate passionate about AI, Machine Learning, Networking, and Cybersecurity. Explore my projects and see how I apply data-driven and secure solutions in real-world applications.
            </motion.p>

            <motion.div
            variants={slideInFromLeft(0.9)}
            className='flex flex-row gap-6'>
                <motion.a href='https://github.com/Nikanzz'><FaGithub className='h-15 w-15 text-gray-800 hover:text-gray-600 cursor-pointer'></FaGithub></motion.a>
                <motion.a href='https://www.linkedin.com/in/jeremia-pinnywan-immanuel/'><FaLinkedin className='h-15 w-15 text-gray-800 hover:text-gray-600 cursor-pointer'></FaLinkedin></motion.a>
            </motion.div>
        </div>

        <motion.div
        variants={slideInFromRight(0.5)}
        className='flex justify-center items-center'>
            <Image 
            src="/jeremia_profilepicture.PNG" 
            alt="Photo Profile" 
            height={650} 
            width={650}
            className='rounded-full border-4 border-[#7042f88b]'></Image>
        </motion.div>
    </motion.div>
  )
}

export default HeroContent
