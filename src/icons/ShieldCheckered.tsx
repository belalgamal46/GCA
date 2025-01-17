import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ShieldCheckered = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#0f0000"
    viewBox="0 0 256 256"
    {...props}
  >
    <Path
      d="M215.39 128c-7 73.93-71.47 99.12-84.93 103.59a7.93 7.93 0 0 1-2.46.41V128h87.39ZM128 48H48a8 8 0 0 0-8 8v58.77q0 6.85.61 13.21H128Z"
      opacity={0.2}
    />
    <Path d="M208 40H48a16 16 0 0 0-16 16v58.77c0 89.62 75.82 119.34 91 124.38a15.44 15.44 0 0 0 10 0c15.2-5.05 91-34.77 91-124.39V56a16 16 0 0 0-16-16Zm0 74.79c0 1.77 0 3.5-.11 5.21H136V56h72ZM48 56h72v64H48.11c-.07-1.71-.11-3.44-.11-5.21Zm1.74 80H120v84.92c-19.68-8.36-61.27-32-70.26-84.92ZM136 220.91V136h70.26c-8.99 52.89-50.54 76.54-70.26 84.91Z" />
  </Svg>
);
export default ShieldCheckered;
