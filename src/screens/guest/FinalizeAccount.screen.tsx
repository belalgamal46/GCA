import { useState } from "react";
import { Text } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Screen } from "../../components/genericScreens/Screen";
import { XStack, YStack } from "../../components/genericScreens/Stack";
import { FloatingTextInput } from "../../components/genericScreens/TextInput";
import { CircleBtn } from "../../components/genericScreens/buttons/CircleBtn";
import { useAppDispatch } from "../../redux/hooks/hooks";
import { setUser } from "../../redux/authSlice/auth";
import { finalizeAccount } from "../../api/finalizeAccService.api";
import { PRIMARY, TEXT_COLOR_1, TEXT_COLOR_3 } from "../../theme/colors";
import { BoldText } from "../../components/genericScreens/text/BoldText";
import { RegularText } from "../../components/genericScreens/text/RegularText";
import { MediumText } from "../../components/genericScreens/text/MediumText";
import { showToast } from "../../helper/toast";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// -----------------------------------------------------

export const FinalizeAccountScreen = () => {
  const [isLoading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{
    nameError: string;
    jobTitleError: string;
    nationalNumError: any;
  }>({
    nameError: "",
    jobTitleError: "",
    nationalNumError: "",
  });

  const [userData, setUserData] = useState<{
    name: string;
    jobTitle: string;
    nationalNum: any;
  }>({
    name: "",
    jobTitle: "",
    nationalNum: "",
  });

  // -----------------------------------------------------

  const dispatch = useAppDispatch();

  const { name, jobTitle, nationalNum } = userData;

  // -----------------------------------------------------

  const handlePress = async () => {
    const nameError = name.trim() === "" ? "Please enter your name" : "";
    const jobTitleError =
      jobTitle.trim() === "" ? "Please enter your job title" : "";
    const nationalNumError = () => {
      const regex = /^[0-9]+$/;
      nationalNum.trim() === "" ? "national_id_error_field_input" : "";
      nationalNum.length !== 14 ? "national_id_error_field_length" : "";
      regex.test(nationalNum) ? "" : "national_id_error_field_invalid";
      return true;
    };

    setErrors({
      nameError,
      jobTitleError,
      nationalNumError: nationalNumError(),
    });

    if (nameError === "" && jobTitleError === "" && nationalNumError()) {
      setLoading(true);
      const response = await finalizeAccount({
        job_title: jobTitle,
        name,
        national_num: nationalNum,
      });
      if (response instanceof Error) {
        console.error(response);
        return;
      }
      dispatch(setUser({ isAuth: true, ...response }));
      // Show toast message
      showToast({ type: "success", text: `Welcome to GCA ${name}` });
      setLoading(false);
    }
  };

  // -----------------------------------------------------

  const handleOnTextChange = (value: string, type: string) =>
    setUserData((prev) => ({ ...prev, [type]: value }));

  // -----------------------------------------------------
  const { nameError, jobTitleError, nationalNumError } = errors;

  return (
    <Screen
      isLoading={isLoading}
      scrollable={false}
      style={{ backgroundColor: TEXT_COLOR_3 }}
    >
      <KeyboardAwareScrollView
        scrollEnabled={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <YStack gap={32} height={hp(100)} px={24} paddingTop={32}>
          <XStack justifyContent="center">
            <BoldText
              text="Finalize your account"
              color={TEXT_COLOR_1}
              style={{ textAlign: "center" }}
            />
          </XStack>
          <YStack gap={16}>
            <FloatingTextInput
              onTextChange={(value) => handleOnTextChange(value, "name")}
              label="Full name"
              errorText={nameError}
            />
            <FloatingTextInput
              onTextChange={(value) => handleOnTextChange(value, "jobTitle")}
              label="Job title"
              errorText={jobTitleError}
            />
            <FloatingTextInput
              onTextChange={(value) => handleOnTextChange(value, "nationalNum")}
              label="national_num"
              errorText={nationalNumError}
              keyboardType="number-pad"
            />
            <Text>
              <RegularText text="By continuing, you agree to the " />
              <MediumText text="Terms & Conditions " color={PRIMARY} />
              <RegularText text="and " />
              <MediumText text="Privacy Policy" color={PRIMARY} />
            </Text>
          </YStack>
          <XStack justifyContent="center">
            <CircleBtn onPress={handlePress} />
          </XStack>
        </YStack>
      </KeyboardAwareScrollView>
    </Screen>
  );
};
