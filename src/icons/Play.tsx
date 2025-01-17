import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Play = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#0f0000"
    viewBox="0 0 256 256"
    {...props}
  >
    <Path
      d="M128 32a96 96 0 1 0 96 96 96 96 0 0 0-96-96Zm-16 128V96l48 32Z"
      opacity={0.2}
    />
    <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm36.44-94.66-48-32A8 8 0 0 0 104 96v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32ZM120 145.05V111l25.58 17Z" />
  </Svg>
);
export default Play;
