import { createSlice } from "@reduxjs/toolkit";

export type Review = {
  id: number;
  name: string;
  email: string;
  date: string;
  rating: number;
  comment: string;
  helpful: number;
};

export type Initial = {
  loading: boolean;
  hasErrors: boolean;
  postedNew: boolean;
  reviews: Array<Review>;
};

export const initialState: Initial = {
  loading: false,
  hasErrors: false,
  postedNew: false,
  reviews: [],
};

// A slice for reviews with our three reducers
const reviewsSlice = createSlice({
  name: "reviewsState",
  initialState,
  reducers: {
    getReviews: (state) => {
      state.loading = true;
    },
    getReviewsSuccess: (state, { payload }) => {
      state.reviews = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getReviewsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
    addReview: (state, { payload }) => {
      state.postedNew = true;
      const reviews = state.reviews;
      reviews.push(payload);
    },
  },
});

// Three actions generated from the slice
export const {
  getReviews,
  getReviewsSuccess,
  getReviewsFailure,
  addReview,
} = reviewsSlice.actions;

// A selector
export const reviewsSelector = (state: { reviews: Initial }) => state.reviews;
export const loadingSelector = (state: { reviews: Initial }) => state.reviews.loading;
export const hasErrorsSelector = (state: { reviews: Initial }) => state.reviews.hasErrors;
export const reviewListSelector = (state: { reviews: Initial }) => state.reviews.reviews;
export const postedNewSelector = (state: { reviews: Initial }) => state.reviews.postedNew;

// The reducer
export default reviewsSlice.reducer;

// Asynchronous thunk action
export function fetchReviews() {
  return async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    dispatch(getReviews());

    try {
      const response = await fetch("./MOCK_DATA.json");
      const data = await response.json();

      dispatch(getReviewsSuccess(data));
    } catch (error) {
      dispatch(getReviewsFailure());
    }
  };
}

export function updateReviews(review: Review) {
  return (dispatch: (arg0: { payload: any; type: string }) => any) =>
    dispatch(addReview(review));
}
