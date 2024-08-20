import { MainText } from "./MainText";
import { TextProps } from "../../../types/textProps";
import { F_24_B } from "../../../theme/sizez";

export function BoldText({ ...props }: TextProps) {
  const size = props.size ? props.size : F_24_B;

  return <MainText fontFamily="Inter_700Bold" size={size} {...props} />;
}
