'use client';
import React, { useEffect } from 'react'
import { FC } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from "react-scroll-to-top";



type Props = {
  heading1: React.ReactNode;
  section2: React.ReactNode;
};

const ClientComponent: FC<Props> = props => {
  const { heading1 } = props;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className='flex px-4 items-center gap-12 container mx-auto text-white h-[60vh]'>
      <div className='py-10 w-full h-full flex justify-center items-center flex-col text-center '  data-aos="fade-down">
        {heading1}

      </div>

      <ScrollToTop smooth className='flex justify-center items-center 'color='blue'/>
    </section>
  );
};

export default ClientComponent;