/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './searchStyle.css';
import { IoMdSearch } from "react-icons/io";

function SearchComponent({className}) {
  return (
    <div className={className}>
        <input type="text" placeholder="Search something" />
        <div className='search-btn'>
          <IoMdSearch />
          Search
        </div>
    </div>
  )
}

export default SearchComponent