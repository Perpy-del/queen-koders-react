/* eslint-disable react/prop-types */
import './heroStyles.css';
import SearchComponent from '../Search/SearchComponent';
import heroImp from "../../../src/assets/hero.webp";

const HeroSection = ({setQuery}) => {
  return (
    <div className="hero-section">
      <div className='left-side'>
        <h1>
          The Special Tech Dictionary suitable for developers, product managers
          and stakeholders
        </h1>
        <h3>Looking for a definition?</h3>
        <SearchComponent className={'hero-search'} setQuery={setQuery} />
      </div>
      <div className='right-side'>
        <img src={heroImp} width='480px' />
      </div>
    </div>
  );
};

export default HeroSection;
