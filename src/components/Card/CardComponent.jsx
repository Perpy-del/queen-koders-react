/* eslint-disable react/prop-types */
import './cardStyles.css';

const CardComponent = ({ header, content, author }) => {
  return (
    <div className='card-content'>
      <h1>{header}</h1>
      <p className='card-meaning'>{content}</p>
      <p className='card-author'>{author}</p>
      <button>Read more</button>
    </div>
  )
}

export default CardComponent