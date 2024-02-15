/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { dictionaryData } from '../../data';
import CardComponent from './CardComponent';
import './cardStyles.css';

const CardContent = ({ query, setQuery }) => {
  const filteredContent = dictionaryData.filter(data =>
    data.text.toLowerCase().includes(query?.toLowerCase())
  );
  console.log(filteredContent);

  return (
    <>
      {filteredContent.length === 0 ? (
        <div className="card-container">
          {dictionaryData.map((item, index) => {
            return (
              <CardComponent
                key={index}
                header={item.text}
                content={item.meaning}
                author={item.author}
              />
            );
          })}
        </div>
      ) : (
        <>
        <button className='back-btn' onClick={() => setQuery(null)}>Back Home</button>
        <div className="card-container">
          {filteredContent.map((item, index) => {
            return (
              <CardComponent
                key={index}
                header={item.text}
                content={item.meaning}
                author={item.author}
              />
            );
          })}
        </div>
        </>
      )}
    </>
  );
};

export default CardContent;
