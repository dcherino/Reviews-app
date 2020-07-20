type SortedReviews = Array<any>;

export const formatDate = (UTCString: string): String => {
  const date = new Date(UTCString);
  const d = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year:  date.getFullYear(),
    hour: date.getHours(),
    minutes: `${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`
  };

  return `${d.day}/${d.month}/${d.year} - ${d.hour}:${d.minutes}`;
};

export const calculateMeanOfRatings = (reviews: Array<any>) => {
  const reducer = reviews.reduce((acc, current) => current.rating + acc, 0);
  const mean = (reducer / reviews.length).toFixed(1);
  return mean;
};

export const sortReviewsByDate = (arr: Array<any>): SortedReviews => {
  return arr.slice().sort((a: any, b: any) => {
    return +new Date(b.date) - +new Date(a.date);
  });
};