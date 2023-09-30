'use client';

import React from 'react';
import Image from 'next/image';
import CustomButton from './CustomButton';

function Hero() {
  const handleScroll = () => {}
  return (
  <div className='hero'>
    <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
            Find, Book or Rent a car - quicly and easily!
        </h1>
        
        <p className='hero__subtitle'>Stream line your car booking experience with us!</p>
        <CustomButton 
          title="Explore cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
    </div>
    <div className='hero__image-container'>
      <div className='hero__image'>
        <Image src='/hero.png' alt='hero'
        fill className='object-contain'/>

        <div className='hero__image-overlay' />
      </div>
    </div>
  </div>
  )
}

export default Hero