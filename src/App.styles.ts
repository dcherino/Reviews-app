import styled from "styled-components";

type ScaleStarProps = {
  isScaled?: boolean;
  cursor?: string;
};

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
    width: 60vw;
    height: 60vw;
    top: 10vh;
    left: unset;
    right: -30vw;
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
  }~
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 78px 1fr;
  gap: 0px 0px;
  grid-template-areas: "Header" "Body";
  max-width: 1440px;
  width: 95%;
  margin: 5vh auto;
  min-height: 90vh;
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: 0 5px 10px rgba(82, 132, 160, 0.3);
  position: relative;
  z-index: 2;

  @media (min-width: 1024px) {
    width: 85%;
  }

  & h1 {
    font: 400 2rem "Roboto";
    color: #323357;
    text-align: left;
  }
`;

export const Body = styled.main`
  grid-area: Body;
  background: #f0f3f4;
  padding: 0 8vw;

  @media (min-width: 1024px) {
    padding: 0 84px;
  }
`;

export const FormChartWrap = styled.div`
  margin-top: 20px;
  margin-bottom: 5px;
  display: flex;
  align-content: center;
  flex-direction: column;

  @media (min-width: 1024px) {
    justify-content: space-between;
    flex-direction: row-reverse;
  }
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
