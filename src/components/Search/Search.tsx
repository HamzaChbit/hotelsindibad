'use client';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FC } from 'react'
type Props = {
    roomTypeFilter: string;
    searchQuery: string;
    setRoomTypeFilter: (value: string) => void;
    setSearchQuery: (value: string) => void;
  };
const Search:FC<Props> = ({
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
    <section  className=' py-6 rounded-lg h-[60vh]  ' >
        <div className='container mx-auto flex gap-4 flex-wrap justify-between items-center  bg-black bg-opacity-20 px-10 py-8 rounded-lg' >
            <div className='w-full md:1/3 lg:w-auto mb-4 md:mb-0' >
            <label className='block text-sm font-medium mb-2 text-white'>
            Room Type :
          </label>
          <div className='relative'>
            <select
               value={roomTypeFilter}
           onChange={handleRoomTypeChange}
              className='w-full px-8 py-4  capitalize rounded leading-tight dark:bg-black focus:outline-none'
            >
              <option value='All'>All</option>
              <option value='Basic'>Basic</option>
              <option value='Luxury'>Luxury</option>
              <option value='Suite'>Suite</option>
            </select>
          </div>
            </div>
            <div className='w-full md:1/3 lg:w-auto mb-4 md:mb-0'>
          <label className='block text-sm font-medium mb-2  text-white'>
            Search :
          </label>
          <input
            type='search'
            id='search'
            placeholder='Search...'
            className='w-full px-8 py-4 rounded leading-tight dark:bg-black focus:outline-none placeholder:text-black dark:placeholder:text-white'
             value={searchQuery}
            onChange={handleSearchQueryChange}
          />
        </div>
        <button
          className='btn-primary'
          type='button'
         onClick={handleFilterClick}
        >
          Search
        </button>

        </div>




    </section>
  )
}

export default Search