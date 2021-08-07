import React, { useState } from 'react';
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import StarIcon from './StarIcon';
const Star = () => {
  
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const onSaveRating = (index) => setRating(index);

  return (
    <div className="star_wrap">
      {
        [0, 1, 2, 3, 4].map((i)=> {
          return (
            <StarIcon 
              index={i}
              rating={rating}
              onSaveRating={onSaveRating}
            />
          )
        })
      }
    </div>
  )
}

export default Star;