import { XStack } from "../../../components/genericScreens/Stack";
import { PRIMARY, TEXT_COLOR_2 } from "../../../theme/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { BoldText } from "../../../components/genericScreens/text/BoldText";
import { BasicStyleBg } from "./basicStyleBg";
import { RegularText } from "../../../components/genericScreens/text/RegularText";
import { F_14_M } from "../../../theme/sizez";
import { GlobalStyles } from "../../../theme/globalStyles";

export interface EarnedPointsProps {
  starNum: string;
}

export const EarnedPointsCard = ({ starNum }: EarnedPointsProps) => {
  return (
    <BasicStyleBg>
      <XStack justifyContent="space-between" alignItems="center" padding={16}>
        <RegularText text="Earned_points" color={TEXT_COLOR_2} size={F_14_M} />
        <XStack
          alignItems="center"
          gap={4}
          style={{ ...GlobalStyles.setFlexDirectionToNormal }}
        >
          <MaterialIcons name="stars" size={18} color={PRIMARY} />
          <BoldText text={starNum} size={18} />
        </XStack>
      </XStack>
    </BasicStyleBg>
  );
};
