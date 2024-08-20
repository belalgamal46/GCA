import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PRIMARY } from "../../theme/colors";
import { XStack } from "../genericScreens/Stack";
import { BoldText } from "../genericScreens/text/BoldText";
import { MainText } from "../genericScreens/text/MainText";

type ScanCardInfoProps = {
  points?: number | null;
  money?: number | string;
};

export function ScanCardInfo({ points, money }: ScanCardInfoProps) {
  return (
    <XStack gap={8} alignItems="center">
      <MaterialCommunityIcons name="star-circle" size={26} color={PRIMARY} />
      <BoldText text={`${points}`} />
      {/* <MainText color="gray" text="=" />
      <XStack gap={4}>
        <MainText size={16} color="gray" text={`${money}`} />
        <MainText color="gray" text="egp" />
      </XStack> */}
    </XStack>
  );
}
