import React, {
  useState,
  FormEvent,
  ChangeEvent,
  MouseEvent,
  Dispatch,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReviews, Review, reviewsSelector } from "../../slices/reviews";
import RatingStars from "./RatingStars";
import {
  FormContainer,
  InputText,
  Label,
  TextArea,
  Button,
} from "./ReviewForm.styles";

const ReviewForm = () => {
  const intialValue: Review = {
    id: 0,
    name: "",
    email: "",
    date: "",
    rating: 0,
    helpful: 0,
    comment: "",
  };
  const [isSent, setIsSent] = useState(false);
  const [review, setReview] = useState(intialValue);
  const { reviews } = useSelector(reviewsSelector);
  const reviewDispatch = useDispatch<Dispatch<any>>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    reviewDispatch(updateReviews(review));
    setIsSent(true);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSent(false);
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const target = e.target;
    const name = target.name;
    const id = reviews.length + 1;
    const value = name === "rating" ? parseInt(target.value) : target.value;
    const date = new Date(Date.now()).toUTCString();

    setReview({
      ...review,
      id,
      date,
      [name]: value,
    });
  };

  return (
    <FormContainer>
      <h2>Write a review</h2>
      {isSent && (
        <div title="Thank you">
          <h3>Thank you!</h3>
          <p>Your review has been submited successfuly.</p>
          <Button onClick={handleClick}>Write a new review</Button>
        </div>
      )}
      {!isSent && (
        <form onSubmit={handleSubmit} data-testid="review-form">
          <div className="inputs-wrap">
            <div>
              <Label htmlFor="name">Name:</Label>
              <InputText
                type="text"
                name="name"
                id="name"
                placeholder="Firstname Lastname"
                tabIndex={1}
                onChange={handleInputChange}
                required
                data-testid="name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email:</Label>
              <InputText
                type="email"
                name="email"
                placeholder="youremail@gmail.com"
                id="email"
                tabIndex={2}
                onChange={handleInputChange}
                required
                data-testid="email"
              />
            </div>
          </div>
          <Label htmlFor="rating">Rating:</Label>
          <RatingStars handleInputChange={handleInputChange} />

          <Label htmlFor="comment">Comment:</Label>
          <TextArea
            name="comment"
            id="comment"
            placeholder="Write here your comment"
            tabIndex={8}
            onChange={handleInputChange}
            required
            data-testid="comment"
          />

          <Button
            type="submit"
            title="Add review"
            tabIndex={9}
            data-testid="submit"
          >
            Add review
          </Button>
        </form>
      )}
    </FormContainer>
  );
};

export default ReviewForm;
