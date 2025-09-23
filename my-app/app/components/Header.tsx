import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='h-[100px]'>
        <div className='flex justify-between p-4'>
            <Image src="/sun.png" alt='sun' width={50} height={50} className="flex-none self-start"/>
            <div className='w-96 flex justify-between'>
                <Link href="/" className='flex flex-col items-center'>
                      <Image src="/home-icon.png" alt='' width={60} height={60}/>
                      <span className='text-base '>Home</span>
                </Link>

                  <Link href="/about" className='flex flex-col items-center'>
                      <Image src="/about-icon.png" alt='' width={60} height={60} className='flex-none'/>
                      <span className='text-base'>About</span>
                </Link>

                  <Link href="/works" className='flex flex-col items-center'>
                      <Image src="/works-icon.png" alt='' width={60} height={60}/>
                      <span className='text-base '>Works</span>
                </Link>

                  <Link href="/contacat" className='flex flex-col items-center'>
                      <Image src="/contact-icon.png" alt='' width={60} height={60}/>
                      <span className='text-base '>Contact</span>
                </Link>

                  <Link href="comments" className='flex flex-col items-center'>
                      <Image src="/comments-icon.png" alt='' width={60} height={60}/>
                      <span className='text-base '>Comms</span>
                </Link>
            </div>
            <Image src="/user.png" alt='user' width={50} height={50} className="flex-none self-start"/>
        </div>
    </header>
  )
}

export default Header
