import React, { useState } from "react";
import HelfpulCounter from "../HelpfulCounter/HelpfulCounter";
import { formatDate } from "../../../utils/utils";
import { Review } from "../../../slices/reviews";
import { Star } from "../../../App.styles";
import {
  ReviewContainer,
  ReviewInfo,
  ReviewBody,
  YourReview,
} from "./UserReview.style";

interface UserReviewProps extends Review {
  posted?: boolean;
  delayTime: number;
}

const UserReview = ({
  name,
  email,
  date,
  rating,
  comment,
  helpful,
  posted,
  delayTime,
}: UserReviewProps) => {
  const [yourReview] = useState(posted);

  return (
    <ReviewContainer delayTime={delayTime}>
      <div className="review-header">
        <ReviewInfo>
          <strong>{name}</strong>{" "}
          <span className="email">
            - <em>{email}</em>
          </span>
          <span className="date">Posted: {formatDate(date)}</span>
        </ReviewInfo>

        <div className="review-rating">
          {[...Array(5)].map((star, i) => {
            return (
              <Star
                key={`star${i}`}
                color={rating > i ? "#ffc107" : "#e4e5e9"}
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                cursor="default"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
              </Star>
            );
          })}
        </div>
      </div>
      <ReviewBody>
        <p>{comment}</p>
        <HelfpulCounter helpful={helpful} />
      </ReviewBody>
      {yourReview && <YourReview>Your review</YourReview>}
    </ReviewContainer>
  );
};

export default UserReview;
