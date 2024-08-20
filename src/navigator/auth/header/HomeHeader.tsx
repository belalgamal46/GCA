import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { XStack, YStack } from "../../../components/genericScreens/Stack";
import { WHITE } from "../../../theme/colors";

export function HomeHeader() {
  return (
    <SafeAreaView edges={["right", "left", "top"]}>
      <YStack
        style={{
          borderTopRightRadius: 24,
          borderTopLeftRadius: 24,
          paddingTop: 40,
          paddingRight: 16,
          paddingBottom: 8,
          paddingLeft: 16,
        }}
        bgColor={WHITE}
      >
        <XStack
          width={wp(90)}
          alignItems="center"
          justifyContent="space-between"
        >
          <YStack width={wp(24)} height={hp(5)}>
            <Image
              resizeMode="cover"
              style={{ width: "100%", height: "100%" }}
              source={require("../../../../assets/icon.png")}
            />
          </YStack>
          <YStack bgColor="gray" width={40} borderRadius={60} height={40} />
        </XStack>
      </YStack>
    </SafeAreaView>
  );
}
