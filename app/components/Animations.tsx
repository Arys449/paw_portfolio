"use client";
import gsap from "gsap";
import React, { useRef, ReactElement, ReactNode } from "react";
import { useGSAP } from '@gsap/react';
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

type AnimatedWrapperProps = {
  children: ReactElement[]; // React elements (cards)
  stagger?: number;
  duration?: number;
};

const AnimatedWrapper = ({ children, stagger = 0.2, duration = 0.7 }: AnimatedWrapperProps) => {
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

   useGSAP(() => {
    gsap.from(itemsRef.current, {
      yPercent: 100,
      opacity: 0,
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

type AnimatedTextWrapperProps = {
  children: ReactNode;
  stagger?: number;
  duration?:number;
};

export const TextAnimationWrapper = ({children, stagger = 0.15,duration = 0.7} : AnimatedTextWrapperProps) => {
  const textRef = useRef<(HTMLDivElement | null)[]>([])
  

  useGSAP(() => {
    gsap.from(textRef.current, {
      y: -60,
      opacity: 0,
      rotation: () => gsap.utils.random(-40, 40) ,
      duration,
      stagger,
      ease: "back",
    });
  }, [stagger, duration]);


  return (
    <>
    {React.Children.map(children, (child,i) => (
      <div ref={(el) => { textRef.current[i] = el; }} style={{ display: "inline-block" }} >
        {child}
      </div>
    ))}
    </>
  )
}

type SplitTextAnimationWrapperProps = {
  children:ReactNode;
  duration?:number;
  stagger?:number;
}

export const SplitTextAnimationWrapper = ({children, stagger = 0.01, duration = 0.8} :  SplitTextAnimationWrapperProps) => {
    const textRef = useRef<(HTMLDivElement | null)[]>([])

    useGSAP(() => {

    let split = SplitText.create(textRef.current, {type: "words"})
     
    gsap.from(split.words, {
    y:300,
    opacity:0,
    duration, 
    ease: "power3",
    stagger,
  })
  }, [duration]);
  


    return (
      <>
     {React.Children.map(children, (child, i) => (
  <div key={i} ref={(el) => { textRef.current[i] = el; }}>
    {child}
  </div>
))}
      </>
    )

}

type ScaleAnimationProps = {
  children: ReactNode;
  scale?:number;
  style?:string;
}

export const ScaleAnimationWrapper = ({children, scale = 1.1, style =""} : ScaleAnimationProps) => {
    const linkRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    linkRef.current.forEach(icon => {
      if (icon) gsap.set(icon, { scale : 1});
    });
  }, []);

  const handleMouseEnter = (index: number) => {
    const icon = linkRef.current[index];
    if (icon) gsap.to(icon, { scale, duration: 0.3, ease: "power2.out" });
  }

  const handleMouseLeave = (index: number) => {
    const icon = linkRef.current[index];
    if (icon) gsap.to(icon, { scale: 1, duration: 0.3, ease: "power2.out" });
  }

  return (
    <div className={style}>
    {React.Children.map(children, (child, i) => (
      <div 
        ref={(el) => { linkRef.current[i] = el; }}
        onMouseEnter={() => handleMouseEnter(i)}
        onMouseLeave={() => handleMouseLeave(i)}>
        {child}
      </div>
    ))}
  </div>
  )
}


export default AnimatedWrapper;

