import React from "react";
import { BasicStyleBg } from "./basicStyleBg";
import { XStack, YStack } from "../../../components/genericScreens/Stack";
import { RegularText } from "../../../components/genericScreens/text/RegularText";
import { TEXT_COLOR_1, TEXT_COLOR_2 } from "../../../theme/colors";
import { F_14_M } from "../../../theme/sizez";
import { MediumText } from "../../../components/genericScreens/text/MediumText";

export const KitInfoCard = () => {
  return (
    <BasicStyleBg>
      <YStack gap={24} padding={24}>
        <XStack justifyContent="space-between">
          <RegularText text="kit_id" color={TEXT_COLOR_2} size={F_14_M} />
          <MediumText text="JS82ndsd912sD" color={TEXT_COLOR_1} />
        </XStack>
        <XStack justifyContent="space-between">
          <RegularText
            text="installation_number"
            color={TEXT_COLOR_2}
            size={F_14_M}
          />
          <MediumText text="876223" color={TEXT_COLOR_1} />
        </XStack>
      </YStack>
    </BasicStyleBg>
  );
};
