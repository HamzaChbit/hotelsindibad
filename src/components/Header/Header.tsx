'use client';



import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link'
import { FaUserCircle } from 'react-icons/fa';





const Header = () => {

  

 
 

  const { user } = useUser();
  const userId = user?.id;
  

  return (





    <header className='py-2 px-4  text-xl  w-full  fixed top-0 bg-black bg-opacity-20  z-30 mb-5 '>
      
      <div className='container mx-auto flex flex-wrap md:flex-nowrap items-center justify-between'>

      <div  className='flex items-center w-full md:2/3' >
      <Link href="/" className='font-black text-tertiary-dark ' >
        hOTEL
      </Link>
      <ul className='flex items-center ml-5' >
      <li className='flex items-center' >
      {userId ? (
              <Link href={`/users/${userId}`   }    title="Visit Profile" >
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
              <Link href='/sign-up 'aria-label='Sign Up'>
                <FaUserCircle className='cursor-pointer ' color='white' />
              </Link>
            )}
      </li>
    
      </ul>

    </div>

        <ul  className='flex items-center justify-between w-full md:w-1/3  mt-4 text-white font-semibold' >
        <li className='hover:-translate-y-2 duration-500 transition-all hover:text-tertiary-dark   px-2'>
        <Link href="/" title='Home'>Home</Link>
          </li>
          <li className='hover:-translate-y-2 duration-500 transition-all px-2 hover:text-tertiary-dark'>
          <Link href="/rooms"  title="Rooms">Rooms</Link>
        </li>
        <li className='hover:-translate-y-2 duration-500 transition-all px-2 hover:text-tertiary-dark'>
          <Link href="/contact"  title="Contact">Contact</Link>
        </li>
      
        </ul>

      </div>

    </header>
  )
}

export default Header