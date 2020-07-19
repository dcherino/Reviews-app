import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers/rootReducer";
import {
  formatDate,
  calculateMeanOfRatings,
  sortReviewsByDate,
} from "../../utils/utils";
import { Star } from "../../styles";
import HelfpulCounter from "../HelpfulCounter/HelpfulCounter";

export const CommentsList = () => {
  const { reviews } = useSelector((state: AppState) => state);
  const sortedArray = sortReviewsByDate(reviews);

  return (
    <React.Fragment>
      <div>{sortedArray.length} customer ratings</div>
      <span>{calculateMeanOfRatings(reviews)} out of 5</span>
      Sort by: Recent - Rating
      <h2>Reviews</h2>
      <div className="wrap-review">
        {sortedArray.map((review, index) => (
          <div className="review" key={review.name + index}>
            <div className="review-header">
              <div className="review-info">
                <strong>{review.name}</strong>
                <span>{formatDate(review.date)}</span>
              </div>

              <div className="review-rating">
                {[...Array(5)].map((star, i) => {
                  return (
                    <Star
                      key={`star${i}`}
                      color={review.rating > i ? "#ffc107" : "#e4e5e9"}
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
            <div className="review-body">
              <p>{review.comment}</p>
              <HelfpulCounter helpful={review.helpful} />
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export default CommentsList;
