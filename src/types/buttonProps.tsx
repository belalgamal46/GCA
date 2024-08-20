import { StyleProp, ViewStyle, TextStyle, ColorValue } from "react-native";

// =================================================================

export type ButtonProps = {
  text?: any;
  children?: React.ReactNode;
  onPress?: () => void;
  leftIcon?: any;
  rightIcon?: any;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  bgColor?: ColorValue;
  padding?: number;
  borderRadius?: number;
  textStyle?: StyleProp<TextStyle>;
  gap?: number;
  justifyContent?:
    | "center"
    | "flex-end"
    | "flex-start"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "baseline" | "center" | "flex-end" | "flex-start" | "stretch";
  alignSelf?:
    | "auto"
    | "baseline"
    | "center"
    | "flex-end"
    | "flex-start"
    | "stretch";
  theme?: "bold" | "medium" | "regular" | "semi-bold";
};
