import { MainText } from "./MainText";
import { TextProps } from "../../../types/textProps";
import { F_14_M } from "../../../theme/sizez";

export function MediumText({ ...props }: TextProps) {
  const size = props.size ? props.size : F_14_M;

  return <MainText fontFamily="Inter_500Medium" size={size} {...props} />;
}
