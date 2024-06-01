'use client';



import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link'
import { FaUserCircle } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import LocalSwitcher from '../LocalSwitcher/local-switcher';
import ScrollToTop from 'react-scroll-to-top';
import { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md'



const Header = ({
  params: {locale}
}: Readonly<{

params: {locale: string};
}>) => {

  const [showMenu,setShowMenu] =useState(false)
  const t = useTranslations('Navigation');
 
  function handelClick   ( ) {
  
    setShowMenu(false)

}


  const { user } = useUser();
  const userId = user?.id;
  

  return (





    <header className='py-5 px-4  text-xl  w-full  fixed top-0 bg-black bg-opacity-20  z-30 mb-5 '>
      
      <div className='container mx-auto flex flex-wrap md:flex-nowrap items-center justify-between '>

      <div  className='flex items-center w-full  justify-between md:justify-normal  ' >
      <Link href="/" className='font-black text-tertiary-dark ' >
        hOTEL
      </Link>
      <ul className='flex items-center ml-5' >
      <li className='flex items-center' >
      {userId ? (
              <Link href={`/${locale}/users/${userId}`   }    title="Visit Profile" >
                {user.imageUrl ? (
                  <div className='w-10 h-10 rounded-full overflow-hidden'>
                    <Image
                        src={user.imageUrl}
                      alt={user?.username || "user"}
                      width={30}
                      height={30}
                      className='scale-animation img'
                    />
                  </div>
                ) : (
                  <FaUserCircle className='cursor-pointer' />
                )}
              </Link>
            ) : (
              <Link href={`/${locale}/sign-up`}
              
              aria-label='Sign Up'>
                <FaUserCircle className='cursor-pointer ' color='white' />
              </Link>
            )}
      </li>
    
      </ul>
      <div  className='block md:hidden'>
   <div     className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-white cursor-pointer overflow-hidden group' onClick={()=>setShowMenu(true)} >
                <span  className='w-full h-[2px] bg-black inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300 ' ></span>
                <span  className='w-full h-[2px] bg-black inline-flex transform translate-x-3   group-hover:translate-x-0 transition-all ease-in-out duration-300 ' ></span>
                <span  className='w-full h-[2px] bg-black inline-flex transform   translate-x-1  group-hover:translate-x-3 transition-all ease-in-out duration-300 ' ></span>

            </div>

</div>
    </div>
<div className='hidden md:block'>
    <ul  className='flex items-center justify-around w-full md:w-1/3  mt-4 text-white font-semibold  ' >
        <li className='hover:-translate-y-2 duration-500 transition-all hover:text-tertiary-dark   px-2'>
        <Link href={`/`} title='Home'>{t("home")}</Link>
          </li>
          <li className='hover:-translate-y-2 duration-500 transition-all px-2 hover:text-tertiary-dark'>
          <Link  href={`/${locale}/rooms`}    title="Rooms">{t("rooms")}</Link>
        </li>
        <li className='hover:-translate-y-2 duration-500 transition-all px-2 hover:text-tertiary-dark'>
          <Link href={`/${locale}/contact`}   title="Contact">Contact</Link>
        </li>

  
        </ul>
</div>
      

        {showMenu && (
          <div className='fixed inset-0 z-50  bg-gray-800 opacity-95 '>
             <div className='w-full h-full flex items-center justify-center'> 
             <div className='w-full py-5 mx-5 bg-black rounded-lg shadow-lg h-dull'>
        <div className='flex flex-col items-center w-full '>
          <MdOutlineClose
            size={35}
            className='text-3xl text-white absolute top-2 right-4 cursor-pointer hover:text-body duration-300'
            onClick={() => setShowMenu(false)}
          />
          <div className='flex flex-col items-center justify-center py-5'>
         
          
            <div className='font-medium text-2xl text-black flex flex-col gap-y-5 cursor-pointer justify-between items-center '>
             
            <ul  className='flex flex-col items-center justify-between w-full  mt-4 text-white font-semibold  gap-y-5 h-full' >
        <li className='hover:-translate-y-2 duration-500 transition-all hover:text-tertiary-dark   px-2'>
        <Link href={`/`}   onClick={() => setShowMenu(false)} title='Home'>{t("home")}</Link>
          </li>
          <li className='hover:-translate-y-2 duration-500 transition-all px-2 hover:text-tertiary-dark'>
          <Link  href={`/${locale}/rooms`} onClick={() => setShowMenu(false)}   title="Rooms">{t("rooms")}</Link>
        </li>
        <li className='hover:-translate-y-2 duration-500 transition-all px-2 hover:text-tertiary-dark'>
          <Link href={`/${locale}/contact`} onClick={() => setShowMenu(false)}  title="Contact">Contact</Link>
        </li>
  
        </ul>
<div className='cursor-pointer'>
   <LocalSwitcher />
</div>


  

       


            </div>
          
        
          </div>
        </div>
      </div>
            </div>
          </div>


        )}
        <div className='hidden md:block'>
    <LocalSwitcher />
        </div>
    

       







       
    
      </div>
      
      

         <ScrollToTop smooth className='flex justify-center items-center 'color='blue'/>
    </header>
  )
}

export default Header