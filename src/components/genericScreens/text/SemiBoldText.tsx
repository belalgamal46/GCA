import { MainText } from "./MainText";
import { TextProps } from "../../../types/textProps";
import { F_20_SB } from "../../../theme/sizez";

export function SemiBoldText({ ...props }: TextProps) {
  const size = props.size ? props.size : F_20_SB;

  return <MainText fontFamily="Inter_600SemiBold" size={size} {...props} />;
}
