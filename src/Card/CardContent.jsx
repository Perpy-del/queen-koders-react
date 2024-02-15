/* eslint-disable no-unused-vars */
import React from 'react'
import { dictionaryData } from '../data';
import CardComponent from './CardComponent';
import './cardStyles.css';

const CardContent = () => {
  return (
    <div>
      {dictionaryData.map(item => {
        return (
          <CardComponent
            key={item.id}
            header={item.abbr}
            content={item.meaning}
          />
        );
      })}
    </div>
  )
}

export default CardContent