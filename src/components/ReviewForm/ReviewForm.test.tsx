import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReviewForm from "./ReviewForm";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(() => ({ reviews: [] })),
  useDispatch: () => mockDispatch,
}));

afterEach(() => {
  jest.clearAllMocks();
});

// snapshot testing
test("it renders ReviewForm", () => {
  const { container } = render(<ReviewForm />);
  expect(container).toMatchSnapshot();
});

test("it should render an empty form by default, without the thank you screen", () => {
  const { getByTestId, queryByTestId } = render(<ReviewForm />);

  const reviewForm = getByTestId("review-form");
  expect(reviewForm).toHaveFormValues({
    name: "",
    email: "",
    comment: "",
  });

  expect(queryByTestId("thank-you-page")).not.toBeInTheDocument();
});

test("it should submit the data with name, email & comment and display thank you screen", () => {
  const { getByTestId } = render(<ReviewForm />);

  const reviewForm = getByTestId("review-form");
  const name = getByTestId("name");
  const email = getByTestId("email");
  const comment = getByTestId("comment");
  const submitButton = getByTestId("submit");

  userEvent.type(name, "Test Name");
  userEvent.type(email, "test@email.com");
  userEvent.type(comment, "Test Comment");

  expect(reviewForm).toHaveFormValues({
    name: "Test Name",
    email: "test@email.com",
    comment: "Test Comment",
  });

  // submitting the review is handled by the dispatcher
  expect(mockDispatch).toHaveBeenCalledTimes(0);
  fireEvent.click(submitButton);
  expect(mockDispatch).toHaveBeenCalledTimes(1);

  expect(getByTestId("thank-you-page")).toBeInTheDocument();
});
