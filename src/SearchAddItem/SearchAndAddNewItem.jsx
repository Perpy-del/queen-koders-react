/* eslint-disable no-unused-vars */
import React from 'react'
import './SearchAdd.css';

function SearchAndAddNewItem() {
  return (
    <div>
      <div>
        <input type="text" placeholder="Search something" />
        <button>Search</button>
      </div>
      <button>Add New Words</button>
    </div>
  )
}

export default SearchAndAddNewItem