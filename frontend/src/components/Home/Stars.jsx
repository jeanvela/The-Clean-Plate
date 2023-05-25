import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Star = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="flex" >
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index} className="flex items-center">
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              className="opacity-0 absolute h-0 w-0"
            />
            <FaStar
              size={40}
              color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Star;
