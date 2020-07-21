import React, { useState, ChangeEvent } from "react";
import { Star } from "../../App.styles";

type RatingStarsProps = {
  handleInputChange(e: ChangeEvent<HTMLInputElement>): void;
};

const RatingStars = (props: RatingStarsProps) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue: number = i + 1;

        return (
          <label key={`star${ratingValue}`}>
            <input
              type="radio"
              name="rating"
              tabIndex={2 + ratingValue}
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              onChange={(e) => props.handleInputChange(e)}
            />
            <Star
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
              isScaled={false}
              cursor="pointer"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
            </Star>
          </label>
        );
      })}
    </div>
  );
};

export default RatingStars;
