import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { reviewsSelector } from "../../slices/reviews";
import PercentageBar from "./PercentageBar/PercentageBar";
import { calculateMeanOfRatings } from "../../utils/utils";
import { ChartContainer } from "./Chart.styles";

const Chart = () => {
  const { reviews, loading, hasErrors } = useSelector(reviewsSelector);
  const numberOfBars = 6; // 6 bars starting from 0 to 5

  const renderGraph = () => {
    if (loading) return <p>Loading...</p>;
    if (hasErrors) return <p>Cannot display graph...</p>;

    return (
      <div style={{ marginTop: "40px" }}>
        {[...Array(numberOfBars)]
          .map((star, index) => {
            const counter = reviews.filter((c: any) => c.rating === index)
              .length;
            const percentValue = (counter / reviews.length) * 100;
            const roundedPercent = Math.ceil(percentValue * 1e2) / 1e2;

            return (
              <PercentageBar
                key={`bar${index}`}
                starText={`${index} star`}
                percentage={roundedPercent}
                count={counter}
              />
            );
          })
          .reverse()}
      </div>
    );
  };

  useEffect(() => {
    renderGraph();
  }, [reviews]);

  return (
    <ChartContainer>
      <h2>Product Overall rating</h2>

      <div>
        {!loading && (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              style={{ margin: "0 6px 0 6px" }}
            >
              <path d="M13,16c-0.2,0-0.4-0.1-0.6-0.2L8,12.5l-4.4,3.3c-0.4,0.3-0.8,0.3-1.2,0c-0.4-0.3-0.5-0.7-0.3-1.1l1.9-5.2L0.4,6.8 C0.1,6.5-0.1,6.1,0.1,5.7C0.2,5.3,0.6,5,1,5h4.5l1.5-4.3C7.2,0.3,7.6,0,8,0s0.8,0.3,0.9,0.7L10.5,5H15c0.4,0,0.8,0.3,0.9,0.7 c0.1,0.4,0,0.9-0.3,1.1l-3.5,2.6l1.9,5.2c0.1,0.4,0,0.9-0.3,1.1C13.4,15.9,13.2,16,13,16z"></path>
            </svg>
            <h3 style={{ display: "inline" }}>
              {calculateMeanOfRatings(reviews)} out of 5
            </h3>
          </div>
        )}
        {renderGraph()}
      </div>
    </ChartContainer>
  );
};

export default Chart;
