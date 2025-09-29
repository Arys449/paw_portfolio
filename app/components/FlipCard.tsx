"use client";
import React, { useRef, useState } from "react";
import { gsap } from "gsap";

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

const FlipCard = ({ frontContent, backContent }: FlipCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    if (!cardRef.current) return;
    const rotation = flipped ? 0 : 180;
    gsap.to(cardRef.current, {
      duration: 0.6,
      rotationY: rotation,
      ease: "power2.inOut",
    });
    setFlipped(!flipped);
  };

  return (
    <div
      ref={cardRef}
      onClick={handleFlip}
      className="w-[300px] h-[392px] relative cursor-pointer perspective-1000"
      style={{ transformStyle: "preserve-3d" }} 
    >
      {/* Front Side */}
      <div className="absolute w-full h-full backface-hidden rotate-y-0">
        {frontContent}
      </div>

      {/* Back Side */}
      <div className="absolute w-full h-full backface-hidden rotate-y-180">
        {backContent}
      </div>
    </div>
  );
};

export default FlipCard;
