import styled from "styled-components";

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 14px;
`;

export const ProgressText = styled.div`
  width: 50px;
  font-size: 14;
  color: #2c5b84;
`;

export const ProgressPercentText = styled.div`
  width: 40px;
  font-size: 14;
  color: #2c5b84;
`;

export const ProgressMiddle = styled.div`
  height: 15px;
  flex: 1;
  margin: 0 10px;
`;

export const ProgressWrap = styled.div`
  background-color: #f0f3f4;
  border-radius: 18px;
  padding: 2px;
`;

export const ProgressBar = styled.div`
  flex: 1;
  height: 10px;
  box-shadow: 0 0 4px #ffcc48;
  background-color: #ffcc48;
  border-radius: 18px;
  min-width: 5px;
  transition: all 1s 1s;
`;
