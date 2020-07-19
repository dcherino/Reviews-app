import styled from "styled-components";

type ScaleStarProps = {
  isScaled?: boolean;
  cursor?: string;
};

// General
export const Triangle = styled.div`
  width: 60vw;
  height: 60vw;
  position: absolute;
  top: 0;
  left: -30vw;
  z-index: 0;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, #d5f6f8),
    color-stop(100%, #7adae0)
  );
  transform: rotate(-45deg);
`;

export const TriangleSmall = styled(Triangle)`
  transform: rotate(45deg);
  width: 40vw;
  height: 40vw;
  top: 10vh;
  left: unset;
  right: -20vw;
`;

// Product
export const Product = styled.div``;

export const AppContainer = styled.div`
  height: 100%;
  background-color: #e2e7e7;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: "";
    width: 60vw;
    height: 60vw;
    position: absolute;
    top: 0;
    left: -30vw;
    z-index: 0;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, #d5f6f8),
      color-stop(100%, #7adae0)
    );
    transform: rotate(-45deg);
  }

  &::after {
    content: "";
    width: 40vw;
    height: 40vw;
    top: 10vh;
    left: unset;
    right: -20vw;
    position: absolute;
    z-index: 0;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, #d5f6f8),
      color-stop(100%, #7adae0)
    );
    transform: rotate(45deg);
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 84px 2fr 84px;
  grid-template-rows: 78px 2fr;
  gap: 0px 0px;
  grid-template-areas: "Left Header Header" "Left Body Right";
  max-width: 80%;
  margin: 5vh auto;
  min-height: 100vh;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(191, 209, 232, 0.6);
  position: relative;
  z-index: 2;

  & h1 {
    font-weight: bold;
    font-size: 20;
    color: #323357;
    text-align: center;
  }
`;

export const RatingContainer = styled.div<ScaleStarProps>`
  margin-top: 20px;
  margin-bottom: 5px;
  background-color: #fff;
  border-radius: 40px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 10px 15px;
`;

export const Star = styled.svg<ScaleStarProps>`
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  transition: all 0.4s;
  transform: scale(${(props) => (props.isScaled ? 1.5 : 1)});
  flex-shrink: 0;
  user-select: none;
  cursor: ${(props) => (props.cursor ? props.cursor : "default")};
`;
