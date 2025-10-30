import React from 'react'
import HeroContent from '../sub/HeroContent'

const Hero = () => {
  return (
    <div className='relative flex flex-col h-full w-full'>
      <video
        autoPlay
        muted
        loop
        className='absolute rotate-180 top-[-350px] h-full w-full left-0 z-[-99] object-cover'>

        <source src='/blackhole.webm' type='video/webm'></source>
        </video>
        <HeroContent />
    </div>
  )
}

export default Hero
