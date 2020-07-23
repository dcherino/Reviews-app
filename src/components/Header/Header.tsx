import React from "react";
import { HeaderDiv } from "./Header.styles";

export const Header = () => {
  return (
    <HeaderDiv>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        xmlSpace="preserve"
      >
        <circle
          cx="24.7"
          cy="25.2"
          r="22.7"
          strokeWidth="2"
          stroke="#083B5E"
          fill="none"
        />
        <g id="Layer_2">
          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="20.33"
            y1="43.8021"
            x2="36.3563"
            y2="3.5379"
          >
            <stop offset="0" stopColor="#083B5E" />
            <stop offset="0.2548" stopColor="#0F88CC" />
            <stop offset="0.8174" stopColor="#00D1FD" />
            <stop offset="1" stopColor="#8FECF9" />
          </linearGradient>
          <path
            fill="url(#SVGID_1_)"
            d="M33,3.6c0,0,7-2,8.2,0c2.2,4-33.3,17.2-25.5,35.7c1.8,5.9,13,7.8,12.7,7.7c-16-17.2,23.1-32.7,16.6-43.4
		C41.4,0,33,3.6,33,3.6z"
          />
        </g>
      </svg>

    </HeaderDiv>
  );
};

export default Header;
