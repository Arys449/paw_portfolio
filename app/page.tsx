import Image from "next/image";
import AnimatedWrapper, { SplitTextAnimationWrapper } from "./components/Animations";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen">
        <div className="flex justify-between items-center w-[460px] ">
            <div className="flex flex-col gap-4 text-3xl">
            <SplitTextAnimationWrapper>

            <p className="font-bold">hi! I'm Dmytro </p>
            <p>a web developer</p>

            </SplitTextAnimationWrapper>
            </div>
            <AnimatedWrapper yPercent={300}>
            <div>
              <Image className="drop-shadow-[0_8px_4px_rgba(0,0,0,0.25)]" src="/paw-image.png" alt="" width={90} height={90}/>
            </div>
            </AnimatedWrapper>
        </div>
    </div>
  );
}
                                                                                        