import Image from 'next/image'
import React from 'react'

const Contacts = () => {
  return (
     <div>
      <h1 className=' w-screen h-24  mt-16 flex justify-center items-center text-6xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>Contact me</h1>

      <p className='w-screen mt-6 h-20 flex justify-center items-center text-2xl text-center'>Those are 3 main tools I use for communication,<br/> I am trying my best to reply within a day, so <br/>  feel free to text me)</p>

      <div className=' flex flex-col items-center mx-8 mt-50 gap-10 lg:flex-row lg:justify-center lg:gap-8'>
     <div className='w-[300px] h-[300px] bg-[#FFF0F0] rounded-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] '>
         <div className='p-4'>
        <Image src="/email-icon.png" alt='' width={36} height={36} />
                </div>
                <div className='flex justify-center'>
                            <div className='flex flex-col gap-6 items-center justify-center h-[164px]'>
                                    <h2 className='text-2xl font-bold '>Email</h2>
                                    <p className='text-[20px] text-center '>Yea, I use<br/> iCloud mail))</p>

                                    <div className='px-8 py-2 bg-white rounded-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'><span className='text-[20px]'>Contact</span></div>
                            </div>

                </div>
                <div className='p-4 transform scale-x-[-1] scale-y-[-1]'>
        <Image src="/email-icon.png" alt='' width={36} height={36} />
                </div>


        </div> 

         <div className='w-[300px] h-[300px] bg-[#FFF0F0] rounded-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] '>
         <div className='p-4'>
        <Image src="/telegram-icon.png" alt='' width={36} height={36} />
                </div>
                <div className='flex justify-center'>
                            <div className='flex flex-col gap-6 items-center justify-center h-[164px]'>
                                    <h2 className='text-2xl font-bold '>Telegram</h2>
                                    <p className='text-[20px] text-center '>The main social media I use for communication.</p>

                                    <div className='px-8 py-2 bg-white rounded-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'><span className='text-[20px]'>Contact</span></div>
                            </div>

                </div>
                <div className='p-4 transform scale-x-[-1] scale-y-[-1]'>
        <Image src="/telegram-icon.png" alt='' width={36} height={36} />
                </div>


        </div> 

         <div className='w-[300px] h-[300px] bg-[#FFF0F0] rounded-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] '>
         <div className='p-4'>
        <Image src="/messenger-icon.png" alt='' width={36} height={36} />
                </div>
                <div className='flex justify-center'>
                            <div className='flex flex-col gap-6 items-center justify-center h-[164px]'>
                                    <h2 className='text-2xl font-bold '>Cell phone</h2>
                                    <p className='text-[20px] text-center '>I don’t take calls from unknown phone numbers, but feel free to direct message me.</p>

                                    <div className='px-8 py-2 bg-white rounded-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'><span className='text-[20px]'>Contact</span></div>
                            </div>

                </div>
                <div className='p-4 transform scale-x-[-1] scale-y-[-1]'>
        <Image src="/messenger-icon.png" alt='' width={36} height={36} />
                </div>


        </div> 
       
      </div>
      
    </div>
  )
}

export default Contacts
