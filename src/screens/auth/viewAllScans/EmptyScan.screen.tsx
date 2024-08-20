import { Screen } from "../../../components/genericScreens/Screen";
import { YStack } from "../../../components/genericScreens/Stack";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BoldText } from "../../../components/genericScreens/text/BoldText";
import { WHITE } from "../../../theme/colors";

export function EmptyScanScreen() {
  return (
    <Screen scrollable={false}>
      <YStack
        justifyContent="center"
        alignItems="center"
        bgColor={WHITE}
        width={wp(100)}
        height={hp(100)}
      >
        <BoldText color="black" text="no kits scanned" />
      </YStack>
    </Screen>
  );
}
