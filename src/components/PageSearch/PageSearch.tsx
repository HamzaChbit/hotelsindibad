'use client'
import React, { useState } from 'react'
import Search from '../Search/Search'

const PageSearch = () => {


    const [roomTypeFilter,setRoomTypeFilter] = useState('')
    const [searchQuery,setSearchQuery] = useState('')
  return (
    <div data-aos="fade-up"  data-aos-duration="2000">
    
    <Search    roomTypeFilter={roomTypeFilter} 
        setRoomTypeFilter={setRoomTypeFilter}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
    
    />
    </div>
  )
}

export default PageSearch