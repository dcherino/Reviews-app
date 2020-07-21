import reducer, {
  initialState,
  loadingSelector,
  hasErrorsSelector,
  reviewListSelector,
  getReviews,
  getReviewsSuccess,
  getReviewsFailure,
  addReview,
} from "../../slices/reviews";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
}));

it("should return the initial state on first run", () => {
  // Arrange
  const nextState = initialState;
  // Act
  const result = reducer(undefined, { type: "" });
  // Assert
  expect(result).toEqual(nextState);
});

describe("should properly set loading and error state when fetching request", () => {
  it("should properly set loading to true", async () => {
    const nextState = reducer(initialState, getReviews());

    const rootState = { reviews: nextState };
    expect(loadingSelector(rootState)).toBeTruthy();
    expect(hasErrorsSelector(rootState)).toBeFalsy();
    expect(reviewListSelector(rootState)).toEqual([]);
  });

  it("should properly populate reviews in the state when fetching request", async () => {
    const data = [
      {
        id: 501,
        name: "Connor McCloud",
        email: "theimmortal@gmail.com",
        date: "2019-08-07T03:43:43Z",
        rating: 3,
        comment:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        helpful: 3,
      },
      {
        id: 502,
        name: "Pedro Espinoza",
        email: "thespanish@gmail.com",
        date: "2020-07-05T01:43:43Z",
        rating: 5,
        comment:
          "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        helpful: 3,
      },
    ];

    const nextState = reducer(initialState, getReviewsSuccess(data));

    const rootState = { reviews: nextState };
    expect(loadingSelector(rootState)).toBeFalsy();
    expect(hasErrorsSelector(rootState)).toBeFalsy();
    expect(reviewListSelector(rootState)).toEqual(data);
  });

  it("should thrown an Error message when failing fetching data", () => {
    const nextState = reducer(initialState, getReviewsFailure());

    const rootState = { reviews: nextState };
    expect(loadingSelector(rootState)).toBeFalsy();
    expect(hasErrorsSelector(rootState)).toBeTruthy();
    expect(reviewListSelector(rootState)).toEqual([]);
  });
});

it("It should add a new review to the store.", () => {
  const data = [
    {
      id: 501,
      name: "Connor McCloud",
      email: "theimmortal@gmail.com",
      date: "2019-08-07T03:43:43Z",
      rating: 3,
      comment:
        "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      helpful: 3,
    },
    {
      id: 502,
      name: "Pedro Espinoza",
      email: "thespanish@gmail.com",
      date: "2020-07-05T01:43:43Z",
      rating: 5,
      comment:
        "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      helpful: 3,
    },
  ];

  const newReview = {
    id: 502,
    name: "Pedro Espinoza",
    email: "thespanish@gmail.com",
    date: "2020-07-05T01:43:43Z",
    rating: 5,
    comment:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    helpful: 3,
  };

  const finalList = [...data, newReview]

  const firstState = reducer(initialState, getReviewsSuccess(data));

  const nextState = reducer(firstState, addReview(newReview));

  const rootState = { reviews: nextState };
  expect(loadingSelector(rootState)).toBeFalsy();
  expect(hasErrorsSelector(rootState)).toBeFalsy();
  expect(reviewListSelector(rootState)).toEqual(finalList);
});