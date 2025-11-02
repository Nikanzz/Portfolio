"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'

const SkillText = () => {
  return (
    <div className='Skills w-full h-full flex flex-col items-center justify-center'>
      <motion.div
      variants={slideInFromTop}
      className='Welcome-box py-[10px] px-[9px] border border-[#7042f88b] opacity-[0.9]'>
        <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'></SparklesIcon>
        <h1 className='Welcome-text text-[13px]'>Curiosity in motion</h1>
      </motion.div>

      <motion.div
      variants={slideInFromLeft(0.5)}
      className='text-[50px] text-white font-bold mt-[15px] text-center mb-[15px]'>
        Skills
      </motion.div>
    </div>
  )
}

export default SkillText


