import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton } from "../../../components/genericScreens/PrimaryButton";
import { XStack, YStack } from "../../../components/genericScreens/Stack";
import { TEXT_COLOR_1, TEXT_COLOR_3 } from "../../../theme/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { SemiBoldText } from "../../../components/genericScreens/text/SemiBoldText";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { GlobalStyles } from "../../../theme/globalStyles";
import { useAppSelector } from "../../../redux/hooks/hooks";

export const PageWithTextHeader = ({ options }: NativeStackHeaderProps) => {
  const { canGoBack, goBack } = useNavigation();
  const currentLanguage = useAppSelector(
    (state) => state.localization.currentLanguage
  );

  if (currentLanguage === "ar") {
    return (
      <SafeAreaView
        style={{
          backgroundColor: TEXT_COLOR_3,
        }}
      >
        <XStack
          bgColor="#fff"
          paddingRight={16}
          paddingLeft={28}
          paddingTop={28}
          paddingBottom={18}
          alignItems="center"
          justifyContent="center"
          width={wp(100)}
        >
          <XStack style={{ flex: 1, justifyContent: "center" }}>
            <SemiBoldText
              text={options?.title}
              size={22}
              color={TEXT_COLOR_1}
            />
          </XStack>
          <XStack justifyContent="flex-start">
            {canGoBack() && (
              <PrimaryButton onPress={goBack} alignSelf="flex-start">
                <MaterialIcons
                  name="arrow-back"
                  size={28}
                  color={TEXT_COLOR_1}
                  onPress={goBack}
                />
              </PrimaryButton>
            )}
          </XStack>
        </XStack>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView
        style={{
          backgroundColor: TEXT_COLOR_3,
        }}
      >
        <XStack
          bgColor="#fff"
          paddingRight={28}
          paddingLeft={16}
          paddingTop={28}
          paddingBottom={18}
          alignItems="center"
          justifyContent="center"
          width={wp(100)}
        >
          <XStack justifyContent="flex-start">
            {canGoBack() && (
              <PrimaryButton onPress={goBack} alignSelf="flex-start">
                <MaterialIcons
                  name="arrow-back"
                  size={28}
                  color={TEXT_COLOR_1}
                  onPress={goBack}
                />
              </PrimaryButton>
            )}
          </XStack>
          <XStack style={{ flex: 1, justifyContent: "center" }}>
            <SemiBoldText
              text={options?.title}
              size={22}
              color={TEXT_COLOR_1}
            />
          </XStack>
        </XStack>
      </SafeAreaView>
    );
  }
};
