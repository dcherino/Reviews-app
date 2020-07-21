import React, { useState } from "react";
import { HelpfulButton } from "./HelpfulCounter.styles";

type HelpfulProps = {
  helpful: number;
};

const HelfpulCounter = ({helpful}: HelpfulProps) => {
  const [counter, setCounter] = useState(helpful);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setCounter(counter + 1);
    setIsDisabled(true);
  };
  return (
    <HelpfulButton disabled={isDisabled} onClick={handleClick}>
      Helpful ({counter})
    </HelpfulButton>
  );
};

export default HelfpulCounter;
