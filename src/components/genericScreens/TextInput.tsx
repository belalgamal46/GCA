import { useState, useRef } from "react";
import {
  Animated,
  Easing,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
  View,
} from "react-native";
import {
  PRIMARY,
  PRIMARY_OPACITY,
  TEXT_COLOR_2,
  TEXT_COLOR_3,
} from "../../theme/colors";
import { useTranslation } from "react-i18next";
import { MediumText } from "./text/MediumText";
import { XStack } from "./Stack";
import { MaterialIcons } from "@expo/vector-icons";
import { F_20_SB } from "../../theme/sizez";
import { GlobalStyles } from "../../theme/globalStyles";

type FloatingTextInputProps = {
  label: string;
  borderActiveColor?: string;
  borderInActiveColor?: string;
  keyboardType?: KeyboardTypeOptions;
  titleSize?: number;
  onTextChange?: (text: string) => void;
  error?: boolean;
  errorText?: string;
};

export const FloatingTextInput = ({
  label,
  titleSize = 15,
  borderActiveColor = PRIMARY,
  borderInActiveColor = PRIMARY_OPACITY,
  keyboardType = "default",
  onTextChange = () => {},
  errorText = "",
}: FloatingTextInputProps) => {
  const [text, setText] = useState("");
  const animatedValue = useRef(new Animated.Value(0));
  const { t } = useTranslation();

  const returnAnimatedTitleStyles = {
    transform: [
      {
        translateY: animatedValue?.current?.interpolate({
          inputRange: [0, 1],
          outputRange: [21, 9],
          extrapolate: "clamp",
        }),
      },
    ],
    fontSize: titleSize,
    color: TEXT_COLOR_2,
  };

  const viewStyles = {
    borderColor: animatedValue?.current?.interpolate({
      inputRange: [0, 1],
      outputRange: [borderInActiveColor, borderActiveColor],
    }),
    borderWidth: 2,
  };

  const onFocus = () => {
    Animated.timing(animatedValue?.current, {
      toValue: 1,
      duration: 300,
      easing: Easing.bezier(0.4, 0.0, 0.2, 1),
      useNativeDriver: false,
    }).start();
  };

  const onBlur = () => {
    if (!text) {
      Animated.timing(animatedValue?.current, {
        toValue: 0,
        duration: 300,
        easing: Easing.bezier(0.4, 0.0, 0.2, 1),
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View style={{ width: "100%" }}>
      <Animated.View style={[styles.subContainer, viewStyles]}>
        <Animated.Text
          style={[
            returnAnimatedTitleStyles,
            {
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 16,
              ...GlobalStyles.setFlexDirectionToRtl,
            },
          ]}
        >
          {t(label)}
        </Animated.Text>
        <TextInput
          onChangeText={(text) => {
            setText(text);
            onTextChange(text);
          }}
          value={text}
          onBlur={onBlur}
          onFocus={onFocus}
          keyboardType={keyboardType}
          style={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            ...GlobalStyles.setTextAlignDirection,
          }}
        />
      </Animated.View>
      {errorText && (
        <XStack gap={4} marginTop={10}>
          <MaterialIcons name="error" size={F_20_SB} color={PRIMARY} />
          <MediumText text={errorText} color={PRIMARY} />
        </XStack>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  subContainer: {
    width: "100%",
    borderRadius: 8,
    backgroundColor: TEXT_COLOR_3,
    color: PRIMARY,
  },
});
