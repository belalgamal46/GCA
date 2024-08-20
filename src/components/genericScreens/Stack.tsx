import { View, Keyboard } from "react-native";
import { StackProps } from "../../types/stackProps";
import { GlobalStyles } from "../../theme/globalStyles";

// =================================================================

/**
 * XStack for horizontal align
 * @author AhmedMohsen
 */

// =================================================================

const shouldSetResponse = () => true;
const onRelease = () => Keyboard.dismiss();

export function XStack({
  children,
  style,
  justifyContent,
  alignItems,
  alignSelf,
  gap,
  px,
  py,
  bgColor,
  width,
  height,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  padding,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  borderRadius,
  isWrappedInsideBtn = true,
}: StackProps) {
  return (
    <View
      onResponderRelease={isWrappedInsideBtn ? undefined : onRelease}
      onStartShouldSetResponder={
        isWrappedInsideBtn ? undefined : shouldSetResponse
      }
      style={[
        {
          ...GlobalStyles.setFlexDirectionToRtl,
          justifyContent: justifyContent,
          alignItems: alignItems,
          alignSelf: alignSelf,
          gap,
          paddingVertical: py,
          paddingHorizontal: px,
          paddingBottom,
          paddingLeft,
          paddingRight,
          paddingTop,
          padding,
          margin,
          marginBottom,
          marginTop,
          marginLeft,
          marginRight,
          backgroundColor: bgColor,
          width: width,
          height: height,
          borderRadius,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

// =================================================================

export function YStack({
  children,
  style,
  justifyContent,
  alignItems,
  alignSelf,
  gap,
  py,
  px,
  bgColor,
  width,
  height,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingTop,
  padding,
  margin,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
  borderRadius,
  isWrappedInsideBtn = true,
}: StackProps) {
  return (
    <View
      onResponderRelease={isWrappedInsideBtn ? undefined : onRelease}
      onStartShouldSetResponder={
        isWrappedInsideBtn ? undefined : shouldSetResponse
      }
      style={[
        {
          flexDirection: "column",
          justifyContent: justifyContent,
          alignItems: alignItems,
          alignSelf: alignSelf,
          gap,
          paddingVertical: py,
          paddingHorizontal: px,
          paddingBottom,
          paddingLeft,
          paddingRight,
          padding,
          paddingTop,
          backgroundColor: bgColor,
          width: width,
          height: height,
          margin,
          marginBottom,
          marginTop,
          marginLeft,
          marginRight,
          borderRadius,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
