import React, { useState } from "react";
import { SvgIcon } from "./Icon.styles";

type IconProps = {
  cursor?: string;
  width: string;
  height: string;
  mouseOver?: boolean;
  children: React.ReactNode;
};

const Icon = ({ cursor="default", width, height, mouseOver, children }: IconProps) => {
  const [isActive, setIsActive] = useState(false);
  const color = (isActive || mouseOver) ? "#7adae0" : "#c2c7D2";

  return (
    <SvgIcon
      color={color}
      focusable="false"
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      width={width}
      height={height}
      cursor={cursor}
      onClick={() => setIsActive(true)}
      // onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {children}
    </SvgIcon>
  );
};

export default Icon;
