import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Screen } from "../../components/genericScreens/Screen";
import { FloatingTextInput } from "../../components/genericScreens/TextInput";
import { YStack } from "../../components/genericScreens/Stack";
import { CircleBtn } from "../../components/genericScreens/buttons/CircleBtn";
import { BoldText } from "../../components/genericScreens/text/BoldText";
import { WHITE } from "../../theme/colors";
import { generateOTP } from "../../api/authService.api";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { isRegistered } from "../../redux/authSlice/auth";

export const SignupScreen = () => {
  const { navigate } = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorText, setErrorText] = useState("");
  const dispatch = useAppDispatch();

  const handleOnTextChange = (text: string) => setPhoneNumber(text);

  const handleOnPress = async () => {
    const phone = phoneNumber.replace(/\s+/g, "");

    const { response, data, error } = await generateOTP(phone);

    if (response === "rejected") {
      setErrorText(error);
      return;
    }
    dispatch(isRegistered(data.registered));
    navigate("OtpScreen" as never, { phone: phoneNumber } as never);

    setErrorText("");
  };

  const isCheckText = phoneNumber.length < 11;

  return (
    <Screen scrollable={false} style={{ backgroundColor: WHITE }}>
      <YStack
        alignItems="center"
        gap={32}
        height={hp(100)}
        px={24}
        paddingTop={32}
        isWrappedInsideBtn={false}
      >
        <BoldText text="Continue with mobile" />
        <FloatingTextInput
          keyboardType="number-pad"
          label="Mobile number"
          onTextChange={handleOnTextChange}
          errorText={errorText}
        />
        <CircleBtn onPress={handleOnPress} disabled={isCheckText} />
      </YStack>
    </Screen>
  );
};
