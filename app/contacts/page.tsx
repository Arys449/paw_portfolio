import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AnimatedWrapper, { SplitTextAnimationWrapper, TextAnimationWrapper } from '../components/Animations'

const Contacts = () => {

  const contacsCards = [
        {
          id:1,
          imgSrc:"/email-icon.png",
          title:"Email",
          cardText:'Yea, I use \n iCloud mail))',
          cardUrl:"",
        },
         {
          id:2,
          imgSrc:"/telegram-icon.png",
          title:"Telegram",
          cardText:'The main social media I use for communication.',
          cardUrl:"",
        },
         {
          id:3,
          imgSrc:"/messenger-icon.png",
          title:"Cell phone",
          cardText:'Feel free to direct message me.',
          cardUrl:"",
        },
  ]



  return (
     <div className='mt-24'>
      <TextAnimationWrapper>
      <h1 className=' w-screen h-24 flex justify-center items-center text-6xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'>Contact me</h1>

      </TextAnimationWrapper>
      <SplitTextAnimationWrapper>

      <p className='w-screen mt-6 h-20 inline-block justify-center items-center text-2xl text-center'>Those are 3 main tools I use for communication,<br/> I am trying my best to reply within a day, so <br/>  feel free to text me)</p>
      </SplitTextAnimationWrapper>

      <div className=' flex  justify-center items-center mx-[30px] mt-25 mb-10 gap-10 lg:mt-50'>
        <AnimatedWrapper>
        {contacsCards.map((card,index) => (

        <div key={card.id} className='w-[300px] h-[300px] bg-[#fff1e6] rounded-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] '>
         <div className='p-4'>
        <Image src={card.imgSrc} alt='' width={36} height={36} />
                </div>
                <div className='flex justify-center'>
                            <div className='flex flex-col gap-6 items-center justify-center h-[164px]'>
                                    <h2 className='text-2xl font-bold '>{card.title}</h2>
                                    <p className='text-[20px] text-center  whitespace-pre-line '>{card.cardText}</p>

                                    <Link href={card.cardUrl} className='px-8 py-2 bg-white rounded-2xl drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]'><span className='text-[20px]'>Contact</span></Link>
                            </div>

                </div>
                <div className='p-4 transform scale-x-[-1] scale-y-[-1]'>
        <Image src={card.imgSrc} alt='' width={36} height={36} />
                </div>
        </div> 
        ))}
        </AnimatedWrapper>
        
       
      </div>
      
    </div>
  )
}

export default Contacts
