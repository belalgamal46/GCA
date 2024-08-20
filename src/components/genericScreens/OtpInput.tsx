import { View, StyleSheet, TextInput, Pressable } from "react-native";
import { OtpInputProps } from "../../types/otpInputProps";
import { TEXT_COLOR_2, TEXT_COLOR_1, PRIMARY } from "../../theme/colors";
import { MainText } from "./text/MainText";
import { useEffect, useRef, useState } from "react";
import { F_16_R } from "../../theme/sizez";
import { useNavigation } from "@react-navigation/native";
import { MediumText } from "./text/MediumText";
import { XStack, YStack } from "./Stack";
import { MaterialIcons } from "@expo/vector-icons";
import { GlobalStyles } from "../../theme/globalStyles";

export default function OtpInput({
  code = "",
  setCode,
  maxLength = 0,
  ScreenName = "",
  errorMessage = "",
  checkError = false,
}: OtpInputProps) {
  const { navigate } = useNavigation();

  const toCodeDigitInput = (_value: any, index: number) => {
    const emptyInputChar = " ";
    const digit = code[index] || emptyInputChar;

    const isCurrentDigit = index === code.length;
    const isLastDigit = index === maxLength - 1;
    const isCodeFull = code.length === maxLength;
    const isDigitFocused = isCurrentDigit || (isLastDigit && isCodeFull);
    const StyledOtpInput =
      inputContainerIsFocused && isDigitFocused
        ? styles.OtpInputFocused
        : styles.OtpInput;

    return (
      <View key={index} style={StyledOtpInput}>
        <MainText style={styles.OtpInputText} text={digit} />
      </View>
    );
  };

  const textInputRef = useRef<TextInput>(null);
  const [inputContainerIsFocused, setInputContainerIsFocused] = useState(false);
  const handleOnBlur = () => {
    setInputContainerIsFocused(false);
  };
  const handleOnPress = () => {
    setInputContainerIsFocused(true);
    if (textInputRef.current) {
      textInputRef?.current?.focus();
    }
  };

  const codeDigitsArray = new Array(maxLength).fill(0);

  useEffect(() => {
    const navigateToScreen = async () => {
      if (code.length === maxLength) {
        const navigationScreenName = await ScreenName();
        navigationScreenName ? navigate(navigationScreenName as never) : "";
      }
    };

    navigateToScreen();
  }, [code]);

  return (
    <YStack style={styles.otpInputSection} gap={10}>
      <Pressable style={styles.OtpInputContainer} onPress={handleOnPress}>
        {codeDigitsArray.map(toCodeDigitInput)}
      </Pressable>
      <TextInput
        style={styles.hiddenTextInput}
        value={code}
        onChangeText={(text) => {
          setCode?.(text);
        }}
        maxLength={maxLength}
        keyboardType="number-pad"
        returnKeyType="done"
        textContentType="oneTimeCode"
        ref={textInputRef}
        onBlur={handleOnBlur}
      />
      {checkError && (
        <XStack
          alignSelf={GlobalStyles.setAlignSelfDirection.alignSelf}
          gap={4}
        >
          <MaterialIcons name="error" size={20} color={PRIMARY} />
          <MediumText text={errorMessage} color={PRIMARY} />
        </XStack>
      )}
    </YStack>
  );
}

const styles = StyleSheet.create({
  hiddenTextInput: {
    position: "absolute",
    width: 1,
    height: 1,
    opacity: 0,
  },

  otpInputSection: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  // Pressable
  OtpInputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
  },

  // View
  OtpInput: {
    borderColor: TEXT_COLOR_2,
    minWidth: "15%",
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },

  // Text
  OtpInputText: {
    fontSize: F_16_R,
    fontWeight: "400",
    textAlign: "center",
    color: TEXT_COLOR_1,
  },

  // Otp Input
  OtpInputFocused: {
    borderColor: PRIMARY,
    minWidth: "15%",
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
