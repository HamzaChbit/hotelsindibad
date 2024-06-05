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
import { AnimatePresence, motion,useScroll } from "framer-motion";
import { IoMenuSharp } from 'react-icons/io5';


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

const {scrollYProgress}=useScroll()
  const { user } = useUser();
  const userId = user?.id;
  
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };
  const toggleMenu = () => {
    setShowMenu((prevOpen) => !prevOpen);
  };
  return (

<>

<motion.div  style={{scaleX: scrollYProgress ,position:"fixed",top:0,right:0,height:10,left:0,background:"#016de4",zIndex:10 ,transformOrigin:"0%"}}>
</motion.div>









    <header className='py-5 px-4  text-xl  w-full  fixed top-0 bg-black bg-opacity-20  z-30 mb-5 '>
      
      <div className='container mx-auto flex flex-wrap md:flex-nowrap items-center justify-between '>

      <div  className='flex items-center w-full  justify-between md:justify-normal  ' >
      <Link href="/" className='md:font-black font-semibold text-tertiary-dark ' title='hotel'>
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
   <div     className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-white cursor-pointer overflow-hidden group'  >
   <div
          className="cursor-pointer  text-md text-black block md:hidden hover:text-blue-600"
          onClick={toggleMenu} 
        >
      <IoMenuSharp size={30} />
        </div>

            </div>

</div>
    </div>
<div className='hidden md:block '>
    <div  className='flex items-center justify-around w-full md:w-1/3  mt-4 text-white font-semibold  ' >
   

  
        <Link href={`/`} className='hover:-translate-y-2 duration-500 transition-all px-2 hover:text-tertiary-dark' title='Home'>{t("home")}</Link>
     
     
          <Link  href={`/${locale}/rooms`}  className='hover:-translate-y-2 duration-500 transition-all px-2 hover:text-tertiary-dark'  title="Rooms">{t("rooms")}</Link>
    
    
          <Link href={`/${locale}/contact`} className='hover:-translate-y-2 duration-500 transition-all px-2 hover:text-tertiary-dark'  title="Contact">Contact</Link>
      
  
      <LocalSwitcher />
 
            
       
    
  
        </div>
</div>
      
<AnimatePresence>
        {showMenu && (
          <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed left-0 top-0 w-full h-screen origin-top bg-white text-black p-10  "
        >
            
        <div className='flex flex-col items-center w-full '>
          <MdOutlineClose
            size={35}
            className='text-3xl text-black hover:text-blue-600 absolute top-2 right-4 cursor-pointer hover:text-body duration-300 hover:transition-shadow'
            onClick={toggleMenu}
          />
            <li className='flex items-center text-white' >
      {userId ? (
              <Link href={`/${locale}/users/${userId}`   }   onClick={() => setShowMenu(false)}  title="Visit Profile" >
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
              onClick={() => setShowMenu(false)}
              aria-label='Sign Up'>
                <FaUserCircle className='cursor-pointer ' color='black' />
              </Link>
            )}
      </li>
          <div className='flex flex-col items-center justify-center py-5'>
         
          
            <div className='font-medium text-2xl text-black flex flex-col gap-y-5 cursor-pointer justify-between items-center '>
             
            <ul  className='flex flex-col items-center justify-between w-full  mt-4 text-black font-semibold  gap-y-5 h-full' >
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
<div className='cursor-pointer text-black'>
   <LocalSwitcher />
</div>


  

       


            </div>
          
        
          </div>
       
            </div>
          </motion.div>


        )}
     </AnimatePresence>




   

       







       
    
      </div>
      
      

         <ScrollToTop smooth className='flex justify-center items-center 'color='blue'/>
    </header>
    </>
  )
}

export default Header