import { ButtonProps } from "./buttonProps";
import { ColorValue } from "react-native";

// =================================================================

export interface ActionBtnProps extends ButtonProps {
  width?: any;
  textColor?: ColorValue | string;
}
