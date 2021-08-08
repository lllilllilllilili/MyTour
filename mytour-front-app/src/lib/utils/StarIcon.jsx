import React from 'react';
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

const StarIcon = (props) => {
  const {
      index,
      rating,
      onSaveRating
  } = props;
    
  if (index <= rating) {
    return (
      <AiFillStar 
        onClick={() => onSaveRating(index)}
        style={starStyle.star} />
    )
  } 
  return (
    <AiOutlineStar 
      onClick={() => onSaveRating(index)}
      style={starStyle.star} />
  )

}

const starStyle = {
  star: {
    fontSize: '1.8em'
  }
}

export default StarIcon;