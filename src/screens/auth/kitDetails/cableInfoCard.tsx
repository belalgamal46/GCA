import React from "react";
import { XStack, YStack } from "../../../components/genericScreens/Stack";
import { TEXT_COLOR_1, TEXT_COLOR_2 } from "../../../theme/colors";
import { SemiBoldText } from "../../../components/genericScreens/text/SemiBoldText";
import { MaterialIcons } from "@expo/vector-icons";
import { BasicStyleBg } from "./basicStyleBg";
import { RegularText } from "../../../components/genericScreens/text/RegularText";
import { F_14_M } from "../../../theme/sizez";
import { GlobalStyles } from "../../../theme/globalStyles";
import i18next from "../../../languages/i18n";

export interface CableInfoCardProps {
  cableType: string;
  installationDate: string;
}

export const CableInfoCard = ({
  cableType = "Cable type",
  installationDate = "20 Mar 2023",
}: CableInfoCardProps) => {
  return (
    <BasicStyleBg>
      <YStack padding={24}>
        <XStack justifyContent="space-between">
          <RegularText
            text="cable_type"
            color={TEXT_COLOR_2}
            size={F_14_M}
            // style={{ width: "20%"}}
          />
          <SemiBoldText
            text={cableType}
            color={TEXT_COLOR_1}
            size={F_14_M}
          />
        </XStack>
        <XStack justifyContent="space-between">
          <RegularText
            text="installation_date"
            color={TEXT_COLOR_2}
            size={F_14_M}
          />
          <XStack
            alignItems="center"
            gap={4}
            style={{ ...GlobalStyles.setFlexDirectionToNormal }}
          >
            <MaterialIcons name="date-range" size={F_14_M} color="black" />
            <SemiBoldText
              text={installationDate}
              color={TEXT_COLOR_1}
              size={F_14_M}
            />
          </XStack>
        </XStack>
      </YStack>
    </BasicStyleBg>
  );
};
