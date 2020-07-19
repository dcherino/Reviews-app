import { ReviewActions, Review } from "../actions/reviewActions";
import { mockData } from "../../mock-data";

const initialState = mockData;

const reviewsReducer = (
  state: Array<Review> = initialState,
  action: ReviewActions
) => {
  switch (action.type) {
    case "ADD_REVIEW":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default reviewsReducer;
