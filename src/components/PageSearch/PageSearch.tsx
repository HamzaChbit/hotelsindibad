'use client'
import React, { useState } from 'react'
import Search from '../Search/Search'

const PageSearch = () => {


    const [roomTypeFilter,setRoomTypeFilter] = useState('')
    const [searchQuery,setSearchQuery] = useState('')
  return (
    <>
    
    <Search    roomTypeFilter={roomTypeFilter} 
        setRoomTypeFilter={setRoomTypeFilter}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
    
    />
    </>
  )
}

export default PageSearch