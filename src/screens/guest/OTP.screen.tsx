import { useState } from "react";
import { useTranslation } from "react-i18next";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { login } from "../../api/authService.api";
import OtpInput from "../../components/genericScreens/OtpInput";
import { Screen } from "../../components/genericScreens/Screen";
import { YStack } from "../../components/genericScreens/Stack";
import { BoldText } from "../../components/genericScreens/text/BoldText";
import { MainText } from "../../components/genericScreens/text/MainText";
import { RegularText } from "../../components/genericScreens/text/RegularText";
import { showToast } from "../../helper/toast";
import { setUser, signIn } from "../../redux/authSlice/auth";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { TEXT_COLOR_1, TEXT_COLOR_2, WHITE } from "../../theme/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export const OtpScreen = ({ route }: any) => {
  const { t } = useTranslation();
  const [code, setCode] = useState<string>("");
  const [checkError, setCheckError] = useState(false);
  const MAX_CODE_LENGTH = 6;
  const { isRegister } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const { phone } = route.params;

  const [errorMessage, setErrorMessage] = useState<string>();

  const handleNavigationScreen = async () => {
    const { response, data } = await login(phone, code);
    const { user } = data;
    if (response === "rejected") {
      setCheckError(true);
      setErrorMessage(data);
      return;
    }

    setCheckError(false);
    dispatch(setUser({ ...data, ...user }));

    if (user.name) {
      showToast({
        type: "success",
        text: `Welcome back to GCA ${user.name}`,
      });
    }

    if (!isRegister) return "finalizeAccount";
    dispatch(signIn());
  };

  return (
    <Screen
      scrollable={false}
      style={{ paddingTop: 32, backgroundColor: WHITE }}
    >
      <KeyboardAwareScrollView scrollEnabled={false}>
        <YStack alignItems="center" height={hp(100)} px={24} gap={32}>
          <YStack alignItems="center" gap={12}>
            <BoldText text="Verify mobile" color={TEXT_COLOR_1} />
            <RegularText
              text="Enter the 6 digit code sent to your mobile"
              color={TEXT_COLOR_1}
              style={{ paddingHorizontal: 25, textAlign: "center" }}
            />
          </YStack>
          <OtpInput
            code={code}
            setCode={setCode}
            maxLength={MAX_CODE_LENGTH}
            ScreenName={handleNavigationScreen}
            errorMessage={errorMessage}
            checkError={checkError}
          />

          {/* This next code will change when integrated with backend OTP */}

          <MainText text="Resend Code in (0:60)" color={TEXT_COLOR_2} />
        </YStack>
      </KeyboardAwareScrollView>
    </Screen>
  );
};
