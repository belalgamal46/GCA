import { TextStyle, StyleProp, TextProps as Props } from "react-native";

export interface TextProps extends Props {
  text: string | undefined;
  size?: number;
  color?: string;
  fontFamily?: string;
  style?: StyleProp<TextStyle>;
}
