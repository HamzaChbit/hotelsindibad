'use client';
import React, { useEffect } from 'react'
import { FC } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useTranslations } from 'next-intl';





const ClientComponent = () => {
  const t = useTranslations('IndexPage');
  useEffect(() => {
    AOS.init();
  }, []);
  return (

    <section className='flex px-4  items-center gap-12 container mx-auto text-white h-[60vh] opacity-0'>
      <div className='py-10 w-full h-full flex justify-center items-center flex-col text-center   '  data-aos="fade-down">
       <div className=''>
 
    <h1 className='font-heading mb-6'>{t('title')}</h1>
    
    <div className='flex items-center justify-center'>
      <div className='w-12 h-0.5 bg-white mt-4' >

      </div>
      <h2 className='font-bold md:font-normal md:text-xl text-md  mb-6 mx-1'>{t('description')} </h2>
      <div className='w-12 h-0.5 bg-white mt-4' >

</div>
      
     
    </div>
   
  </div>

      </div>

 
    </section>
  );
};

export default ClientComponent;