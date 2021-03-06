import React, {
  useEffect,
  ChangeEvent,
  MouseEvent,
  useRef,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { reviewsSelector } from "../../slices/reviews";
import Pagination from "./Pagination/Pagination";
import UserReview from "./UserReview/UserReview";
import { sortReviewsByDate } from "../../utils/utils";
import usePagination from "../../hooks/pagination";
import { ReviewsListContainer } from "./ReviewsList.styles";

export const ReviewsList = () => {
  const [shouldScroll, setShouldScroll] = useState(false);
  const { reviews, loading, hasErrors, postedNew } = useSelector(
    reviewsSelector
  );
  const sortedArray = sortReviewsByDate(reviews);

  // Pagination Hook
  const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(
    sortedArray,
    20
  );

  // Smooth scroll functionality
  const listRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (listRef.current) {
      listRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    // Scroll up when navigate through the pagination
    if (shouldScroll && listRef.current) {
      scrollToBottom();
    }
  }, [currentPage, shouldScroll]);

  useEffect(() => {
    if (shouldScroll) jump(0);
  }, [reviews, shouldScroll, jump]);

  const renderReviews = () => {
    if (loading) return <p>Loading reviews...</p>;
    if (hasErrors) return <p>Cannot display reviews...</p>;
    const currentPageData = currentData();

    return currentPageData.map((review, index) => (
      <UserReview
        {...review}
        key={review.name + index}
        posted={postedNew && currentPage === 1 && index === 0}
        delayTime={index === 0 ? 0 : index / 10}
      />
    ));
  };

  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setShouldScroll(true);
    jump(parseInt(e.currentTarget.value));
  };

  const handleOnClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShouldScroll(true);

    if (e.currentTarget.innerText === "Next") {
      next();
    }
    if (e.currentTarget.innerText === "Prev") {
      prev();
    }
  };

  return (
    <ReviewsListContainer ref={listRef}>
      <h3>Reviews</h3>
      <h4>{reviews.length} customer reviews</h4>
      <div className="wrap-review">{renderReviews()}</div>

      {!loading && (
        <Pagination
          handleOnClick={handleOnClick}
          handleOnChange={handleOnChange}
          currentPage={currentPage}
          maxPage={maxPage}
        />
      )}
    </ReviewsListContainer>
  );
};

export default ReviewsList;
