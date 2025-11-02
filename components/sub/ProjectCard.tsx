"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { slideInFromLeft } from '@/utils/motion'

interface Props {
    src: string;
    title: string;
    description: string
}

const ProjectCard = ( {src, title, description }: Props ) => {
  return (
    <motion.div 
    initial='hidden'
    animate='visible'
    variants={slideInFromLeft(0.9)}
    className='relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]'>
      <div className='relative w-full h-56'>
        <Image
        src={src}
        alt={title}
        fill
        className='object-cover'/>
      </div>

      <div className='relative p-4'>
        <h1 className='text-2xl font-bold text-white'> {title} </h1>
        <p className='mt-2 text-gray-300'> {description} </p>
      </div>
    </motion.div>
  )
}

export default ProjectCard
