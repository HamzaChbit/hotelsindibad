import { Room } from "@/models/room";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type Props = {
    room: Room;
  };
  const RoomCard: FC<Props> = props => {
    const {
      room: { coverImage, name, price, type, description, slug, isBooked },
    } = props;
  

    return (
      
  <div className='rounded-xl h-full mb-10 mx-auto md:mx-0 overflow-hidden text-black border-2 border-tertiary-dark p-2 flex w-full md:1/3 lg:w-auto flex-col md:flex-row'  >
        <div className='h-60 cursor-pointer overflow-hidden '>
               <Link href={`/rooms/${slug.current}`} >  
                <Image
            src={coverImage}
            alt={name}
            width={250}
            height={250}
            className='img scale-animation rounded-sm'
          />
        </Link>
        </div>
     
       
  
        <div className='md:p-4 p-1 bg-white   '>
          <div className=' text-xl flex font-semibold md:flex-row justify-between flex-col '>
            <p>{name}</p>
           <p className="text-yellow-500 ">$ {price}</p>
      
          </div>
  
          <p className='pt-2 text-xs'>{type} Room</p>
  
          <p className='pt-3 pb-6'>{description.slice(1, 100)}...</p>
  
          <Link
            href={`/rooms/${slug.current}`}
            className='bg-tertiary-dark inline-block text-center w-full py-4 rounded-xl text-white text-xl font-bold hover:-translate-y-2 hover:shadow-lg transition-all duration-500'
          >
            {isBooked ? 'BOOKED' : 'BOOK NOW'}
          </Link>
        </div>
      </div>

    
    );
  };
  
export default RoomCard