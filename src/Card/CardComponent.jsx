/* eslint-disable react/prop-types */
import './cardStyles.css';

const CardComponent = ({ header, content }) => {
  return (
    <div>
      <h1>{header}</h1>
      <p>{content}</p>
    </div>
  )
}

export default CardComponent