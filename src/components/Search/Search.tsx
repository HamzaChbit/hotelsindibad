'use client';
import { useLocale, useTranslations } from 'next-intl';
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
  const local = useLocale()
    const router = useRouter();
    const t = useTranslations('Search');
const handleRoomTypeChange = (e:ChangeEvent<HTMLSelectElement>) => {
    setRoomTypeFilter(e.target.value)
}


const handleSearchQueryChange = (e:ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
}

const handleFilterClick = () => {
    router.push(`${local}/rooms?roomType=${roomTypeFilter}&searchQuery=${searchQuery}`);
  };


  return (
    <section  className=' py-6 rounded-lg h-[60vh]  ' >
        <div className='container mx-auto flex gap-4 flex-wrap justify-between items-center  bg-black bg-opacity-20 px-10 py-8 rounded-lg' >
            <div className='w-full md:1/3 lg:w-auto mb-4 md:mb-0' >
            <label  htmlFor="roomTypeSelect" className='block text-sm font-medium mb-2 text-white'>
          {t("type")}
          </label>
          <div className='relative'>
            <select
             id="roomTypeSelect" 
               value={roomTypeFilter}
           onChange={handleRoomTypeChange}
              className='w-full px-8 py-4  capitalize rounded leading-tight dark:bg-black focus:outline-none'
            >
              <option value='All'>{t("all")}</option>
         
              <option value='standard double room'>{t("twin")}</option>
        
        <option value='double room with garden view'>{t("single")}</option>        
        <option value='standard family room'>{t("family")}</option>    
                </select>
          </div>
            </div>
            <div className='w-full md:1/3 lg:w-auto mb-4 md:mb-0'>
          <label className='block text-sm font-medium mb-2  text-white'>
           {t('search')} :
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
          {t("search")}
        </button>

        </div>




    </section>
  )
}

export default Search