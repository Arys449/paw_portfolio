"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const About = () => {
  const aboutCards = [
    { id: 1, title: "Education", items: ["Education sample", "Education sample", "Education sample"] },
    { id: 2, title: "Dev.Tools", items: ["HTML/CSS", "TypeScript", "React", "Sanity", "Python", "JavaScript", "Next.Js", "Gsap", "Figma", "Bootstrap"] },
    { id: 3, title: "Languages", items: ["English", "Ukrainian", "Russian"] }
  ];

  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/about") {
      gsap.set(cardsRef.current, { yPercent: 100, opacity: 0 });
      gsap.to(cardsRef.current, {
        yPercent: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.2
      });
    }
  }, [pathname]);


  return (
    <div className="w-full flex flex-col mt-24">
      <h1 className="w-full h-24 flex justify-center items-center text-6xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        About me
      </h1>

      <p className="w-full mt-6 h-20 flex justify-center items-center text-2xl text-center">
        Those are 3 main tools I use for communication,<br /> I am trying my best to reply within a day, so <br /> feel free to text me)
      </p>

      <div className="flex flex-col items-center mx-8 mt-40 gap-10 lg:flex-row lg:justify-center lg:gap-8">
        {aboutCards.map((card, index) => (
          <div

            ref={(el) => { cardsRef.current[index] = el; }}
            key={card.id}
            className="w-[300px] h-[392px] bg-[#FFF0F0] rounded-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col"
          >
            <h2 className="text-[16px] p-4 font-bold">{card.title}</h2>

            <div className="flex-1 flex justify-center items-center">
              <div className={`grid gap-4 ${card.items.length >= 5 ? "grid-cols-2" : "grid-cols-1"}`}>
                {card.items.map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-center items-center bg-white ${card.items.length >= 5 ? "w-24" : "w-64"} h-10 rounded-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]`}
                  >
                    <span className="text-base font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-base p-4 font-bold transform scale-x-[-1] scale-y-[-1]">{card.title}</h2>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default About;
