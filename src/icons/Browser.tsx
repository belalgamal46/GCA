import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Browser = (props: SvgProps) => (
  <Svg width={24} height={24} fill="#000000" viewBox="0 0 256 256">
    <Path
      d="M224,56V96H32V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z"
      opacity="0.2"
    ></Path>
    <Path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Zm0,144H40V104H216v96Z"></Path>
  </Svg>
);

export default Browser;
