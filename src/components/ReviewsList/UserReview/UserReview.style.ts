import styled, { keyframes } from "styled-components";

const slideInAnimation = keyframes`
  from {
    transform: translateX(-100px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const ReviewContainer = styled.div`
  background: #fff;
  box-shadow: 0 5px 10px rgba(82, 132, 160, 0.3);
  padding: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  animation: ${slideInAnimation} 0.4s linear;

  & .review-header {
    position: relative;
  }
`;

export const ReviewInfo = styled.div`
  strong {
    display: block;
    font: 700 18px "Roboto";
    color: #000;
    margin: 0 0 10px;
  }

  span {
    display: block;
    font: 400 14px "Roboto";
    color: #555;
    margin: 0 0 20px;
  }
`;

export const ReviewBody = styled.div`
  color: #333;
  font: 400 16px "Roboto";

  p {
    margin-bottom: 20px;
  }
`;

export const YourReview = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: #7adae0;
  border-radius: 4px;
  color: #fff;
  font: 700 14px "Roboto";
  text-align: center;
  padding: 8px;
`;
