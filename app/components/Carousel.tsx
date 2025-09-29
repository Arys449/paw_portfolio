"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import AnimatedWrapper from "./Animations";

const Carousel = () => {
  const projects = [
    { id: 1, title: "Sample_1" },
    { id: 2, title: "Sample_2" },
    { id: 3, title: "Sample_3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const figures = useRef<HTMLDivElement[]>([]);

  // Arrow controls
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  // GSAP animation for carousel
  const [isTablet, setIsTablet] = useState(false);

useEffect(() => {
  const checkTablet = () => setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
  checkTablet();
  window.addEventListener("resize", checkTablet);
  return () => window.removeEventListener("resize", checkTablet);
}, []);


  useEffect(() => {
  figures.current.forEach((figure, i) => {
    const tl = gsap.timeline({ defaults: { duration: 0.6, ease: "power3.inOut" } });

    if (i === currentIndex) {
      tl.to(figure, {
        rotateY: isTablet ? 0 : 0,
        rotateX: isTablet ? 0 : 0,
        scale: 1,
        xPercent: isTablet ? 0 : 0,
        yPercent: isTablet ? 0 : 0,
        zIndex: 100,
        filter: "opacity(100%) blur(0px)",
        boxShadow: "0 0 20px rgba(0,0,0,1)",
      });
    } else if (i === (currentIndex + 1) % projects.length) {
      // Right (desktop) / Below (tablet)
      tl.to(figure, {
        rotateY: isTablet ? 0 : -45,
        rotateX: isTablet ? -45 : 0,
        scale: 0.6,
        xPercent: isTablet ? 0 : 80,
        yPercent: isTablet ? 80 : 0,
        zIndex: -1,
        filter: "opacity(80%) blur(3px)",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      });
    } else if (i === (currentIndex - 1 + projects.length) % projects.length) {
      // Left (desktop) / Above (tablet)
      tl.to(figure, {
        rotateY: isTablet ? 0 : 45,
        rotateX: isTablet ? 45 : 0,
        scale: 0.6,
        xPercent: isTablet ? 0 : -80,
        yPercent: isTablet ? -80 : 0,
        zIndex: -1,
        filter: "opacity(80%) blur(3px)",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      });
    } else {
      // Hidden
      tl.to(figure, {
        rotateY: 0,
        rotateX: 0,
        scale: 0.6,
        xPercent: isTablet ? 0 : 200,
        yPercent: isTablet ? 200 : 0,
        zIndex: 0,
        filter: "opacity(0%) blur(5px)",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
      });
    }
  });
}, [currentIndex, isTablet]);


  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="medium-carousel-w relative w-[90vw] md:h-96 max-w-[700px] h-[60vh] lg:w-[700px] lg:h-[500px] perspective-[1500px]">
        {projects.map((project, i) => (
          <div
            key={project.id}
            ref={(el) => {
              if (el) figures.current[i] = el;
            }}
            className="absolute w-full h-full flex items-center justify-center text-4xl font-bold bg-white rounded-xl drop-shadow-lg"
          >
            {project.title}
          </div>
        ))}
      </div>

      {/* Controls */}
  

      <AnimatedWrapper yPercent={500}>

      <div className="flex gap-10 justify-center items-center ">
        <button onClick={prevSlide}>
          <Image
            src="/arrow-right.png"
            alt="prev"
            width={45}
            height={45}
            className="transform scale-x-[-1]"
          />
        </button>

        <div className="text-2xl">
          {projects[currentIndex].id}/{projects.length}
        </div>

        <button onClick={nextSlide}>
          <Image src="/arrow-right.png" alt="next" width={45} height={45} />
        </button>
      </div>
      </AnimatedWrapper>
    </div>
  );
};

export default Carousel;
