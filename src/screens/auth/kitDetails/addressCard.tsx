import { XStack, YStack } from "../../../components/genericScreens/Stack";
import { BasicStyleBg } from "./basicStyleBg";
import { BACKGROUND_3, PRIMARY, TEXT_COLOR_2 } from "../../../theme/colors";
import { RegularText } from "../../../components/genericScreens/text/RegularText";
import { ActionBtn } from "../../../components/genericScreens/buttons/ActionBtn";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { F_16_R } from "../../../theme/sizez";
import { SemiBoldText } from "../../../components/genericScreens/text/SemiBoldText";
import { ArrowSquareOut } from "../../../icons";
import { GlobalStyles } from "../../../theme/globalStyles";

export interface AddressCardProps {
  location: string;
}

export const AddressCard = ({ location }: AddressCardProps) => {
  const btnIcon = (
    <ArrowSquareOut
      width={24}
      height={24}
      fill={PRIMARY}
      style={{ ...GlobalStyles.setRotateY180Deg }}
    />
  );

  return (
    <BasicStyleBg>
      <YStack padding={16}>
        <XStack justifyContent="space-between" alignItems="center">
          <RegularText text="Address" color={TEXT_COLOR_2} size={14} />
          <ActionBtn
            onPress={() => {}}
            text="view_map"
            textColor={PRIMARY}
            rightIcon={btnIcon}
            bgColor={BACKGROUND_3}
            style={{
              paddingHorizontal: 8,
              paddingVertical: 6,
            }}
          />
        </XStack>
        <XStack gap={10} alignItems="center">
          <Octicons name="location" size={F_16_R} color="black" />
          <SemiBoldText text={location} size={F_16_R} numberOfLines={1} />
        </XStack>
      </YStack>
    </BasicStyleBg>
  );
};
