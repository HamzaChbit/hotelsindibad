"use client"
import React, { useEffect, useState } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';


export const Gallery  = () => {
        const Sliders = [
            {
                url: '/images/1.jpg',
                title: 'Lobster',
              },
              {
                url: '/images/2.jpg',
                title: 'Lobster',
              },
              {
                url: '/images/4.jpg',
                title: 'Lobster',
              },
              {
                url: '/images/6.jpg',
                title: 'Lobster',
              },
        ] 


            const [Caret,setCaret] = useState(0);
            const prevSliders= () =>{
             
               const Index = Caret === 0 ;
               const CheckIndex = Index ? Sliders.length - 1 : Caret - 1
               setCaret(CheckIndex)
            }
           const NextSliders= () =>{
                const Index = Caret === Sliders.length - 1  ;
                const CheckIndex = Index ? 0: Caret + 1;
                setCaret(CheckIndex)
            }



            useEffect(() => {
              const interval = setInterval(() => {
                NextSliders();
              }, 3000); // Change image every 3 seconds
          
              return () => clearInterval(interval); // Cleanup interval on component unmount
            }, [Caret]);



  return (
    <div className='max-w-[1400px] h-[700px] w-full m-auto py-16 px-4 relative '  id='Image'data-aos="fade-up"
    data-aos-duration="3000" >
        <div  className='w-full h-full rounded-2xl bg-center bg-cover duration-500'  style={{backgroundImage : `url(${Sliders[Caret].url})`}} >
            
        </div>
        <div  className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 hover:bg-black/20 text-white cursor-pointer '>
        <FaCaretLeft size={32} onClick={NextSliders}  /> </div>
        <div  className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 hover:bg-black/20 text-white cursor-pointer '   >
        <FaCaretRight   onClick={prevSliders}  size={32} />
        </div>
      
       
    </div>
  )
}