export type Review = {
  name: string;
  email: string;
  date: string;
  rating: number;
  helpful: number;
  comment?: string;
}

export type AddReviewAction = {
  readonly type: "ADD_REVIEW";
  payload: Review;
}

export type ReviewActions = AddReviewAction;
