import { StyleProp, ViewStyle, ViewProps, ColorValue } from "react-native";

// ----------------------------------------------------------------

export type StackProps = ViewStyle & {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
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
  gap?: number;
  px?: string | number;
  py?: string | number;
  bgColor?: ColorValue;
  width?: string | number;
  height?: string | number;
  paddingTop?: string | number;
  paddingBottom?: string | number;
  paddingRight?: string | number;
  paddingLeft?: string | number;
  padding?: string | number;
  margin?: string | number;
  marginTop?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  marginRight?: string | number;
  borderRadius?: number;
  isWrappedInsideBtn?: boolean;
};
