import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-[100px] flex justify-center items-center'>
      <div className='flex gap-3'>
        <Link href="#">
            <Image src="/github-icon.png" alt='' width={50} height={50}/>
        </Link>

        <Link href="#">
            <Image src="/telegram-icon.png" alt='' width={50} height={50}/>
        </Link>
      </div>
    </footer>
  )
}

export default Footer
