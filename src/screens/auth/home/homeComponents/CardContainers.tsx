import { EvilIcons, Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { XStack, YStack } from "../../../../components/genericScreens/Stack";
import { BoldText } from "../../../../components/genericScreens/text/BoldText";
import { PRIMARY_5, ACCENT, WHITE } from "../../../../theme/colors";

export function CardContainers() {
  return (
    <XStack
      marginTop={hp(1)}
      bgColor={WHITE}
      width={wp(90)}
      borderRadius={12}
      gap={12}
      padding={12}
    >
      <Card
        icon={<Ionicons name="cube-outline" size={24} color={ACCENT} />}
        title="Products"
      />
      <Card
        icon={<EvilIcons name="play" size={30} color={ACCENT} />}
        title="Tutorials"
      />
    </XStack>
  );
}

function Card({ icon, title = "" }: { icon?: any; title?: string }) {
  return (
    <YStack
      height={hp(14)}
      borderRadius={12}
      style={{ flex: 1 }}
      justifyContent="center"
      alignItems="center"
      gap={10}
      bgColor={PRIMARY_5}
    >
      {icon}
      <BoldText size={14} color={ACCENT} text={title} />
    </YStack>
  );
}
