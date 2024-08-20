import { Screen } from "../../components/genericScreens/Screen";
import { YStack } from "../../components/genericScreens/Stack";
import { ActionBtn } from "../../components/genericScreens/buttons/ActionBtn";
import { WHITE } from "../../theme/colors";
import { BoldText } from "../../components/genericScreens/text/BoldText";
import { useNavigation } from "@react-navigation/native";
import { changeLang } from "../../redux/localizationSlice/localization";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";

export const LocalizationScreen = () => {
  const { navigate } = useNavigation<any>();
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector((state) => state.auth.isAuth);

  const handleOnPress = (lang: string) => {
    dispatch(changeLang(lang));
    isAuth ? navigate("Home") : navigate("signup");
  };

  return (
    <Screen scrollable={false} style={{ backgroundColor: WHITE }}>
      <YStack px={24} height="100%" justifyContent="center" gap={24}>
        <BoldText
          text="localization_screen_title"
          style={{ textAlign: "center" }}
        />
        <ActionBtn text="arabic" onPress={() => handleOnPress("ar")} />
        <ActionBtn text="english" onPress={() => handleOnPress("en")} />
      </YStack>
    </Screen>
  );
};
