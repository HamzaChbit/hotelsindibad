"use client"
import Link from 'next/link';
import {  BsTelephoneOutbound } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';



const Footer = () => {
  return (
    <footer className='mt-16 '>
      <div className='container mx-auto px-4'>
        <Link href='/' className='font-black text-tertiary-dark'>
          Hotelzz
        </Link>

        <h4 className='font-semibold text-[40px] py-6'>Contact</h4>

        <div className='flex flex-wrap gap-16 items-center justify-between'>
          <div className='flex-1'>
            <p> Place Lahcen Oubrahim, Tamri, Talborjt, Talborjt, 80000 Agadir, Morocco </p>
            {/* <div className='flex items-center py-4'>
              <BsFillSendFill />
              <p className='ml-2'>codewithlari</p>
            </div> */}
            <div className='flex items-center'>
              <BsTelephoneOutbound />
              <p className='ml-2'>0528823477</p>
            </div>
       
          </div>

          <div className='flex-1 md:text-right'>
        
            <Link href="/rooms" className='pb-4 hover:text-black'>Get in Touch</Link>
            <p className='pb-4'>Our Privacy Commitment</p>
     
          </div>

          <div className='flex-1 md:text-right'>
          <p className='pb-4'>Terms of service</p>
            <p>Customer Assistance</p>
          </div>
        </div>
      </div>

      {/* <div className='bg-black h-6 md:h-[50px] mt-16 w-full bottom-0 left-0' />  */}

      <div className="mt-1 border-t bg-black border-gray-100 pt-2  ">
      <div className="flex justify-center  items-center gap-14 ">
        <p className="text-xs text-gray-500">All rights reserved @2024  </p>

        <Link href="https://www.linkedin.com/in/hamza-1dz4/" target="_blank"className="flex  justify-start   text-gray-100 ">
         <FaLinkedin size={20} className='text-sky-800 border-0'  />
          
       


        </Link>
      </div>      </div>
    </footer>
         
  );
};

export default Footer;