import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Building = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#0f0000"
    viewBox="0 0 256 256"
    {...props}
  >
    <Path
      d="M136 32v184H40V85.35a8 8 0 0 1 3.56-6.66l80-53.33A8 8 0 0 1 136 32Z"
      opacity={0.2}
    />
    <Path d="M240 208h-16V96a16 16 0 0 0-16-16h-64V32a16 16 0 0 0-24.88-13.32L39.12 72A16 16 0 0 0 32 85.34V208H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16ZM208 96v112h-64V96ZM48 85.34 128 32v176H48ZM112 112v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0Zm-32 0v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0Zm0 56v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Zm32 0v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0Z" />
  </Svg>
);
export default Building;
