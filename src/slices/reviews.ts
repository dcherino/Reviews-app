import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  reviews: [],
};

// A slice for reviews with our three reducers
const reviewsSlice = createSlice({
  name: "reviews",
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
      const reviews: string[] = state.reviews;
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
export const reviewsSelector = (state: any) => state.reviews;

// The reducer
export default reviewsSlice.reducer;

// Asynchronous thunk action
export function fetchReviews() {
  return async (dispatch: any) => {
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

export function updateReviews(review: any) {
  return (dispatch: any) => dispatch(addReview(review));
}