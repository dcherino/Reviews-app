import { combineReducers } from "redux";
import reviewReducer from "./reviewsReducer";

const rootReducer = combineReducers({
  reviews: reviewReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
