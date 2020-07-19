export interface Review {
  name: string;
  date: string;
  rating: number;
  comment?: string;
}

export interface AddReviewAction {
  readonly type: "ADD_REVIEW";
  payload: Review;
}

export type ReviewActions = AddReviewAction;
