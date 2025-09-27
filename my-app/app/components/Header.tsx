"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

const Header = () => {
  const headerItem = [
    { id:1, imagePath:"/home-icon.png", title:"Home", linkPath:"/" },
    { id:2, imagePath:"/about-icon.png", title:"About", linkPath:"/about" },
    { id:3, imagePath:"/works-icon.png", title:"Works", linkPath:"/works" },
    { id:4, imagePath:"/contact-icon.png", title:"Contacts", linkPath:"/contacts" },
    { id:5, imagePath:"/comments-icon.png", title:"Comms", linkPath:"#"},
  ];

  const linkRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    linkRef.current.forEach(icon => {
      if (icon) gsap.set(icon, { scale: 1 });
    });
  }, []);

  const handleMouseEnter = (index: number) => {
    const icon = linkRef.current[index];
    if (icon) gsap.to(icon, { scale: 1.1, duration: 0.3, ease: "power2.out" });
  }

  const handleMouseLeave = (index: number) => {
    const icon = linkRef.current[index];
    if (icon) gsap.to(icon, { scale: 1, duration: 0.3, ease: "power2.out" });
  }

  return (
    <header className='h-[100px]'>
      <div className='flex justify-between p-4'>
        <Image src="/sun.png" alt='sun' width={50} height={50} className="flex-none self-start"/>
        <div className='w-96 flex justify-between'>
          {headerItem.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {linkRef.current[index] = el}}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className='flex flex-col items-center cursor-pointer'
            >
              <Link href={item.linkPath}>
                <Image src={item.imagePath} alt={item.title} width={60} height={60}/>
              </Link>
              <span className='text-base'>{item.title}</span>
            </div>
          ))}
        </div>
        <Image src="/user.png" alt='user' width={50} height={50} className="flex-none self-start"/>
      </div>
    </header>
  )
}

export default Header
