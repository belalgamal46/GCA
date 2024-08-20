import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton } from "../../components/genericScreens/PrimaryButton";
import { XStack, YStack } from "../../components/genericScreens/Stack";
import { TEXT_COLOR_1, TEXT_COLOR_3 } from "../../theme/colors";
import { MaterialIcons } from "@expo/vector-icons";

export function GuestHeader() {
  const { canGoBack, goBack } = useNavigation();
  return (
    <SafeAreaView
      style={{
        paddingTop: 24,
        paddingBottom: 24,
        backgroundColor: TEXT_COLOR_3,
      }}
    >
      <YStack justifyContent="flex-start">
        <XStack bgColor={TEXT_COLOR_3} px={24} style={{ flexDirection: "row" }}>
          {canGoBack() && (
            <PrimaryButton onPress={goBack}>
              <MaterialIcons
                name="arrow-back"
                size={28}
                color={TEXT_COLOR_1}
                onPress={goBack}
              />
            </PrimaryButton>
          )}
        </XStack>
      </YStack>
    </SafeAreaView>
  );
}
