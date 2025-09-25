"use client"

import Image from 'next/image'
import React, {useState } from 'react'
import gsap from 'gsap';

const Carousel = () => {
  const projects = [
    {id:1, title: "Sample_1"},
    {id:2, title: "Sample_2"},
    {id:3, title: "Sample_3"},
  ]

  const [currentIndex,setCurrentIndex] = useState(0);


  

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };


  return (
  <div className='flex gap-10'>
    <button onClick={prevSlide}>
            <Image src='/arrow-right.png' alt='' width={45} height={45} className='transform scale-x-[-1]'/>
    </button>

    <div  className='flex'>
        <div className='w-7xl h-[700px] bg-[#FFF0F0] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] rounded-2xl flex justify-center items-center'>
                <h2>{projects[currentIndex].title}</h2>
      </div>
    </div>

      
        <button onClick={nextSlide}>
            <Image src='/arrow-right.png' alt='' width={45} height={45}/>
        </button>
  </div>
    
  )

}
export default Carousel
