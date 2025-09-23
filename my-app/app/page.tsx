import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen">
        <div className="flex justify-between items-center w-[460px] ">
            <div className="flex flex-col gap-4 text-3xl">
            <p className="font-bold">hi! I'm Dmytro </p>
            <p>a web developer</p>
            </div>
            <div>
              <Image className="drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]" src="/paw-image.png" alt="" width={100} height={100}/>
            </div>
        </div>
    </div>
  );
}
                                                                                        