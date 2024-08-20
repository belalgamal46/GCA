import { TouchableOpacity } from "react-native";
import { XStack } from "./Stack";
import { ButtonProps } from "../../types/buttonProps";
import { BoldText } from "./text/BoldText";
import { MediumText } from "./text/MediumText";
import { RegularText } from "./text/RegularText";
import { SemiBoldText } from "./text/SemiBoldText";

const textComponentMap = {
  bold: BoldText,
  medium: MediumText,
  regular: RegularText,
  "semi-bold": SemiBoldText,
};

export function PrimaryButton({
  text = "",
  children = false,
  onPress,
  rightIcon,
  leftIcon,
  style = {},
  disabled = false,
  bgColor,
  textStyle,
  justifyContent,
  alignItems,
  alignSelf,
  gap,
  padding,
  borderRadius,
  theme = "semi-bold",
}: ButtonProps) {
  const TextButton = textComponentMap[theme];

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        {
          backgroundColor: bgColor,
          justifyContent: justifyContent,
          alignItems: alignItems,
          alignSelf: alignSelf,
          padding: padding,
          borderRadius: borderRadius,
        },
        style,
      ]}
      onPress={onPress}
    >
      {children ? (
        children
      ) : (
        <XStack
          isWrappedInsideBtn={true}
          gap={gap}
          justifyContent={
            (leftIcon || rightIcon) && text ? "flex-start" : "center"
          }
          alignItems="center"
        >
          {leftIcon && leftIcon}
          <TextButton style={textStyle} text={text} />
          {rightIcon && rightIcon}
        </XStack>
      )}
    </TouchableOpacity>
  );
}
