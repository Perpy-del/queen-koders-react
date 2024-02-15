/* eslint-disable no-unused-vars */
import React from 'react';
import './heroStyles.css';
import SearchComponent from '../Search/SearchComponent';
// import heroImg as img from '../../../src/assets/herp.webp'

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className='left-side'>
        <h1>
          The Special Tech Dictionary suitable for developers, product managers
          and stakeholders
        </h1>
        <h3>Looking for a definition?</h3>
        <SearchComponent className={'hero-search'} />
      </div>
      <div className='right-side'>
        <img src="../../../src/assets/hero.webp" width='480px' />
      </div>
    </div>
  );
};

export default HeroSection;
