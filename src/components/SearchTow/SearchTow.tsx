'use client';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FC } from 'react'
type Props = {
    roomTypeFilter: string;
    searchQuery: string;
    setRoomTypeFilter: (value: string) => void;
    setSearchQuery: (value: string) => void;
  };
const SearchTow:FC<Props> = ({
    roomTypeFilter,
    searchQuery,
    setRoomTypeFilter,
    setSearchQuery,
}) => {
    const router = useRouter();

const handleRoomTypeChange = (e:ChangeEvent<HTMLSelectElement>) => {
    setRoomTypeFilter(e.target.value)
}


const handleSearchQueryChange = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
}

const handleFilterClick = () => {
    router.push(`/rooms?roomType=${roomTypeFilter}&searchQuery=${searchQuery}`);
  };


  return (
    <section  className=' mt-20 rounded-lg mb-5 w-[80%]  ' >
        <div className='flex gap-4 flex-wrap justify-between items-center   md:px-10 px-2  py-8 rounded-lg border-2 border-tertiary-dark ' >
            <div className='w-full md:1/3 lg:w-auto mb-4 md:mb-0' >
            <label  htmlFor="roomTypeSelect" className='block text-xl font-medium mb-2 text-dark'>
            Room Type :
          </label>
          <div className='relative'>
            <select
               id="roomTypeSelect" 
               value={roomTypeFilter}
           onChange={handleRoomTypeChange}
              className='w-full px-8 py-4  capitalize rounded leading-tight dark:bg-black border-2 border-tertiary-dark focus:outline-none '
            >
         <option value='All'>All</option>
         
         <option value='standard double room'>Standard Double Room</option>
         <option value='double room with garden view'>Double Room with Garden View</option>  
          <option value='standard family room'>Standard Family Room</option> 
            </select>
          </div>
            </div>
            <div className='w-full md:1/3 lg:w-auto mb-4 md:mb-0'>
          <label className='block text-xl font-medium mb-2  text-black'>
            Search :
          </label>
          <input
            type='search'
            id='search'
            placeholder='Search...'
            className='w-full px-8 py-4 rounded leading-tight dark:bg-black  placeholder:text-black dark:placeholder:text-black   border-2 border-tertiary-dark focus:outline-none'
             value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>
        <button
          className='px-6 md:px-[50px] lg:px-[72px] py-2 mb-4 md:mb-0 md:py-5 bg-tertiary-dark rounded-lg md:rounded-2xl shadow-sm shadow-tertiary-dark text-white font-bold text-base md:text-xl hover:scale-110 duration-300 transition-all;'
          type='button'
         onClick={handleFilterClick}
        >
          Search
        </button>

        </div>




    </section>
  )
}

export default SearchTow