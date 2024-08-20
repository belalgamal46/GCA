import {
  Entypo,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { PRIMARY, TEXT_COLOR_4, WHITE } from "../theme/colors";
import { F_20_SB } from "../theme/sizez";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { XStack, YStack } from "./genericScreens/Stack";
import { RegularText } from "./genericScreens/text/RegularText";
import { SemiBoldText } from "./genericScreens/text/SemiBoldText";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { GlobalStyles } from "../theme/globalStyles";
import i18next from "../languages/i18n";

type ScannedCardProps = {
  cableName?: string;
  starNum?: number;
  location?: string;
  date?: string;
  isSingleCable?: boolean;
  isOnViewAllScansScreen?: boolean;
  longitude: string;
  latitude: string;
};

export function ScannedCard({
  cableName = "cable name",
  starNum = 450,
  location = "",
  date = "date",
  isSingleCable = false,
  isOnViewAllScansScreen = false,
  longitude,
  latitude,
}: Readonly<ScannedCardProps>) {
  const { navigate } = useNavigation<any>();

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgba(219, 219, 219, 0.2)" : WHITE,
          borderRadius: 12,
          width: isOnViewAllScansScreen ? wp(100) : undefined,
        },
      ]}
      onPress={() => {
        navigate("KitDetails", {
          cableName,
          starNum,
          location,
          date,
          longitude,
          latitude,
        });
      }}
    >
      <YStack
        style={{
          borderBottomWidth: isSingleCable ? 0 : 1,
          borderBottomColor: TEXT_COLOR_4,
        }}
        paddingTop={16}
        px={24}
        paddingBottom={24}
        gap={23}
      >
        <XStack
          justifyContent="space-between"
          style={{ ...GlobalStyles.setFlexDirectionToNormal }}
        >
          <SemiBoldText text={cableName} numberOfLines={1} />
          <XStack
            gap={5}
            alignItems="center"
            style={{ ...GlobalStyles.setFlexDirectionToNormal }}
          >
            <MaterialCommunityIcons
              name="star-circle"
              size={21}
              color={PRIMARY}
            />
            <SemiBoldText text={`${starNum}`} />
          </XStack>
        </XStack>
        <XStack
          justifyContent="space-between"
          alignItems="center"
          style={{ ...GlobalStyles.setFlexDirectionToRtl }}
        >
          <XStack
            gap={3}
            alignItems="center"
            width="50%"
            style={{
              ...GlobalStyles.setFlexDirectionToRtl,
            }}
          >
            <MaterialIcons name="date-range" size={F_20_SB} color="grey" />
            <RegularText text={date} color="gray" />
          </XStack>
          <XStack
            alignItems="center"
            width="50%"
            style={{
              ...GlobalStyles.setFlexDirectionToRtl,
            }}
          >
            <Entypo name="location-pin" size={18} color="grey" />
            <RegularText text={location} color="grey" numberOfLines={1} />
          </XStack>
        </XStack>
      </YStack>
    </Pressable>
  );
}
