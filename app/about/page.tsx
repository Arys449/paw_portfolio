import React from "react";
import AnimatedWrapper, { ScaleAnimationWrapper, SplitTextAnimationWrapper, TextAnimationWrapper } from "../components/Animations";
import Image from "next/image";
import FlipCard from "../components/FlipCard";

const About = () => {
  const aboutCards = [
    { id: 1,
      title: "Education", 
      items: ["Education example", "Education example", "Education example"],
      titleBack:"Back"
     },
    { id: 2, 
      title: "Dev.Tools", 
      items: ["HTML/CSS", "TypeScript", "React", "Sanity", "Python", "JavaScript", "Next.Js", "Gsap", "Figma", "Bootstrap"],
      titleBack:"Back"
     },
    { id: 3, 
      title: "Languages", 
      items: ["English", "Ukrainian", "Russian"],
        titleBack:"Back"
     }
  ];

  return (
    <div className="w-full flex flex-col lg:mt-24">
      <TextAnimationWrapper>
      <h1 className="w-full h-24 flex justify-center items-center text-6xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
        About me
      </h1>
      </TextAnimationWrapper>

      <div>
      <SplitTextAnimationWrapper>

      <p className="w-full mt-6 h-20 inline-block justify-center items-center text-2xl text-center ">
        Those are 3 main tools I use for communication,<br /> I am trying my best to reply within a day, so <br /> feel free to text me)
      </p>
      </SplitTextAnimationWrapper>
      </div>

      <div className="flex justify-center items-center mt-8 mb-2 mx-[30px] lg:mt-40 gap-10 ">
        <AnimatedWrapper>
        {aboutCards.map((card,) => (
          <FlipCard key={card.id}
           frontContent={
               <div
            key={card.id}
            className="w-[300px] h-[392px] bg-[#fff1e6] rounded-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col"
          >
            <div className="flex justify-between">
        <h2 className="text-[16px] p-4 font-bold">{card.title}</h2>
            <ScaleAnimationWrapper>
            <Image src="/circular-arows.png" alt="" width={30} height={30} className=" flex-none self-start m-4"/>
            </ScaleAnimationWrapper>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <ScaleAnimationWrapper style={`grid gap-4 ${card.items.length >= 5 ? "grid-cols-2" : "grid-cols-1"}`}>
                {card.items.map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-center items-center bg-white ${card.items.length >= 5 ? "w-24" : "w-64"} h-10 rounded-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]`}
                  >
                    <span className="text-base font-bold">{item}</span>
                  </div>
                ))}
                </ScaleAnimationWrapper>
            </div>
            <div className="flex justify-between">
             <ScaleAnimationWrapper>
            <Image src="/circular-arows.png" alt="" width={30} height={30} className=" flex-none self-start m-4"/>
            </ScaleAnimationWrapper>
            <h2 className="text-base p-4 font-bold transform scale-x-[-1] scale-y-[-1]">{card.title}</h2>

            </div>

          </div>
           }
           backContent={
           <div
            key={card.id}
            className="w-[300px] h-[392px] bg-[#fff1e6] rounded-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] flex flex-col"
          >
            <div className="flex justify-between">
        <h2 className="text-[16px] p-4 font-bold">{card.titleBack}</h2>
            <ScaleAnimationWrapper>
            <Image src="/circular-arows.png" alt="" width={30} height={30} className=" flex-none self-start m-4"/>
            </ScaleAnimationWrapper>
            </div>

            <div className="flex-1 flex justify-center items-center">
                <ScaleAnimationWrapper style={`grid gap-4 ${card.items.length >= 5 ? "grid-cols-2" : "grid-cols-1"}`}>
                {card.items.map((item, i) => (
                  <div
                    key={i}
                    className={`flex justify-center items-center bg-white ${card.items.length >= 5 ? "w-24" : "w-64"} h-10 rounded-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]`}
                  >
                    <span className="text-base font-bold">{item}</span>
                  </div>
                ))}
                </ScaleAnimationWrapper>
            </div>
            <div className="flex justify-between">
             <ScaleAnimationWrapper>
            <Image src="/circular-arows.png" alt="" width={30} height={30} className=" flex-none self-start m-4"/>
            </ScaleAnimationWrapper>
            <h2 className="text-base p-4 font-bold transform scale-x-[-1] scale-y-[-1]">{card.titleBack}</h2>

            </div>

          </div>
           }/>
       
        ))}
        </AnimatedWrapper>
      </div>
      
    </div>
  );
};

export default About;
