import React, { useState, useEffect } from "react";
import {
  ProgressContainer,
  ProgressBar,
  ProgressMiddle,
  ProgressPercentText,
  ProgressText,
  ProgressWrap,
} from "./PercentageBar.styles";

type PercentageBarProps = {
  starText: string;
  percentage: number;
  count: number;
};

const PercentageBar = ({ starText, percentage, count }: PercentageBarProps) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(percentage);
  }, [percentage]);

  return (
    <ProgressContainer>
      <ProgressText>{starText}</ProgressText>
      <ProgressMiddle>
        <ProgressWrap>
          <ProgressBar style={{ width: `${value}%` }} />
        </ProgressWrap>
      </ProgressMiddle>
      <ProgressPercentText>({count})</ProgressPercentText>
    </ProgressContainer>
  );
};

export default PercentageBar;
