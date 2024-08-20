import { MainText } from "./MainText";
import { TextProps } from "../../../types/textProps";
import { F_16_R } from "../../../theme/sizez";

export function RegularText({ ...props }: TextProps) {
  const size = props.size ? props.size : F_16_R;

  return <MainText fontFamily="Inter_400Regular" size={size} {...props} />;
}
