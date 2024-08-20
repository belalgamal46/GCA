import { Text } from "react-native";
import { TextProps } from "../../../types/textProps";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
  Inter_600SemiBold,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import { useTranslation } from "react-i18next";
import { GlobalStyles } from "../../../theme/globalStyles";

export function MainText({
  text = "text",
  size = 15,
  color = "black",
  style = {},
  fontFamily = "Inter_400Regular",
  numberOfLines,
}: TextProps) {
  let [fontsLoaded, error] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    Inter_500Medium,
    Inter_600SemiBold,
  });

  const { t } = useTranslation();

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        {
          fontSize: size,
          color,
          fontFamily,
          ...GlobalStyles.setTextAlignDirection,
        },
        style,
      ]}
    >
      {t(text)}
    </Text>
  );
}
