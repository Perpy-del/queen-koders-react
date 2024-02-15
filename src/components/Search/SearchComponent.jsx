/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import './searchStyle.css';
import { IoMdSearch } from 'react-icons/io';

function SearchComponent({ className, setQuery }) {
  const [search, setSearch] = React.useState(null)
  const handleInputQuery = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    setQuery(search)
    setSearch("");
  }

  return (
    <form className={className} onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search something"
        value={search}
        onChange={handleInputQuery}
      />
      <button type='submit' className="search-btn">
        <IoMdSearch />
        Search
      </button>
    </form>
  );
}

export default SearchComponent;
