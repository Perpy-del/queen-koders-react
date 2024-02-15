import React from 'react';
import SearchComponent from '../Search/SearchComponent';
import './headerStyles.css';

const HeaderComponent = () => {
  return (
    <div className="header">
      <h1>
        qkoder<span className="pedia">pedia</span>
      </h1>
      <SearchComponent className={'search'} />
    </div>
  );
};

export default HeaderComponent;
