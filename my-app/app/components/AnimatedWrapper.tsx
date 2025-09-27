"use client";
import gsap from "gsap";
import React, { useEffect, useRef, ReactElement } from "react";

type AnimatedWrapperProps = {
  children: ReactElement[]; // React elements (cards)
  stagger?: number;
  duration?: number;
};

const AnimatedWrapper = ({ children, stagger = 0.2, duration = 0.7 }: AnimatedWrapperProps) => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.set(itemsRef.current, { yPercent: 100, opacity: 0 });
    gsap.to(itemsRef.current, {
      yPercent: 0,
      opacity: 1,
      duration,
      ease: "power3.out",
      stagger,
    });
  }, [stagger, duration]);

  return (
  <div className="flex flex-wrap justify-center gap-8">
    {React.Children.map(children, (child, i) => (
      <div ref={(el) => { itemsRef.current[i] = el; }} >
        {child}
      </div>
    ))}
  </div>
);
};

export default AnimatedWrapper;
