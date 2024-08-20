import { XStack, YStack } from "../../../../components/genericScreens/Stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PRIMARY, TEXT_COLOR_5 } from "../../../../theme/colors";
import { BoldText } from "../../../../components/genericScreens/text/BoldText";
import { MediumText } from "../../../../components/genericScreens/text/MediumText";
import { GlobalStyles } from "../../../../theme/globalStyles";

type PointsToCashProps = {
  points?: number;
  money?: number;
};

export function PointsToCashCard({
  points = 550,
  money = 50,
}: PointsToCashProps) {
  return (
    <XStack alignItems="center" gap={12}>
      <XStack gap={5} style={{ ...GlobalStyles.setFlexDirectionToNormal }}>
        <MaterialCommunityIcons name="star-circle" size={26} color={PRIMARY} />
        <BoldText size={20} text={`${points}`} />
      </XStack>
      <YStack justifyContent="center" alignItems="center">
        {/* <MediumText
          style={{
            textAlign: "center",
            backgroundColor: TEXT_COLOR_5,
            width: 32,
            height: 32,
            borderRadius: 100,
          }}
          color={"rgb(158, 158, 158)"}
          size={20}
          text="="
        /> */}
      </YStack>
      {/* <XStack gap={5}>
        <BoldText size={20} text={`${money}`} />
        <BoldText size={20} text="EGP" />
      </XStack> */}
    </XStack>
  );
}
