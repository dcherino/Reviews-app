import { combineReducers } from "redux";
import reviewsReducer from "./reviews";

export type RootState = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
  reviews: reviewsReducer,
});

export default rootReducer;
