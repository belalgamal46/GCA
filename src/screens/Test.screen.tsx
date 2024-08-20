import { useTranslation } from "react-i18next";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { MainText } from "../components/genericScreens/text/MainText";
import { PrimaryButton } from "../components/genericScreens/PrimaryButton";
import { Screen } from "../components/genericScreens/Screen";
import { XStack, YStack } from "../components/genericScreens/Stack";
import { LanguageSwitcher } from "../components/LanguageSwitcer";
import { CircleBtn } from "../components/genericScreens/buttons/CircleBtn";
import { ActionBtn } from "../components/genericScreens/buttons/ActionBtn";
import { PRIMARY_5 } from "../theme/colors";
import { ScannedCard } from "../components/ScannedCard";
import { BottomSheet } from "../components/genericScreens/BottomSheet";
import { Ionicons } from "@expo/vector-icons";

export function TestScreen() {
  const { t } = useTranslation();

  return (
    <XStack width={wp(100)} height={hp(100)} bgColor={"red"} />

    // <BottomSheet
    //   bottomSheetIcon={
    //     <Ionicons name="play-sharp" size={50} color="rgb(229, 49, 50)" />
    //   }
    // />
    // <Screen scrollable={false}>
    //   <YStack
    //     justifyContent="center"
    //     alignItems="center"
    //     alignSelf="center"
    //     bgColor="blue"
    //     height={hp(100)}
    //     width={wp(100)}
    //   >
    //     <ScannedCard
    //       cableName="Cable type 1"
    //       starNum={450}
    //       location="Dokki"
    //       date="21 Mar 2023"
    //     />
    //     <LanguageSwitcher />
    //     <MainText text={t("helloWorld")} color="#fff" size={40} />
    //     <YStack gap={20}>
    //       <PrimaryButton
    //         style={{ borderRadius: 8, padding: 12 }}
    //         bgColor="blue"
    //         text={t("Submit")}
    //         onPress={() => {}}
    //       />
    //       <PrimaryButton
    //         style={{ borderRadius: 8, padding: 12 }}
    //         bgColor="blue"
    //         text={t("Logout")}
    //         onPress={() => {}}
    //       />
    //       <BottomSheet />
    //       <CircleBtn
    //         onPress={() => {
    //           "koko";
    //         }}
    //       />
    //       <XStack>
    //         <ActionBtn
    //           onPress={() => {
    //             "koko";
    //           }}
    //           text="Scan new Kit"
    //           leftIcon="add-circle-outline"
    //           alignItems="center"
    //         />
    //         <ActionBtn
    //           onPress={() => {
    //             "koko";
    //           }}
    //           text="Scan new Kit"
    //           leftIcon="add-circle-outline"
    //           alignItems="center"
    //           bgColor={PRIMARY_5}
    //         />
    //       </XStack>
    //     </YStack>
    //   </YStack>
    // </Screen>
  );
}
