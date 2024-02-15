/* eslint-disable no-unused-vars */
import React from 'react';
import { dictionaryData } from '../../data';
import CardComponent from './CardComponent';
import './cardStyles.css';

const CardContent = () => {
  return (
    <div className='card-container'>
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
  );
};

export default CardContent;
