import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import {
  ACCENT,
  PRIMARY,
  PRIMARY_5,
  TEXT_COLOR_3,
} from "../../../theme/colors";
import { ActionBtnProps } from "../../../types/actionBtnProps";
import { PrimaryButton } from "../PrimaryButton";

export const ActionBtn = ({
  onPress,
  text = "Action",
  leftIcon,
  rightIcon,
  width = 0,
  alignItems = "flex-start",
  justifyContent = "center",
  bgColor,
  style,
  theme,
  textColor,
}: ActionBtnProps) => {
  const isColorStyle = bgColor === PRIMARY_5 ? ACCENT : TEXT_COLOR_3;
  const startIcon = leftIcon;
  const endIcon = rightIcon;
  const isWidthStyle = width !== 0 ? { width: wp(width) } : {};

  return (
    <PrimaryButton
      theme={theme}
      onPress={onPress}
      text={text}
      leftIcon={leftIcon ? startIcon : ""}
      rightIcon={rightIcon ? endIcon : ""}
      bgColor={bgColor ? bgColor : PRIMARY}
      style={[
        {
          paddingHorizontal: leftIcon || rightIcon ? 16 : 24,
          paddingVertical: leftIcon || rightIcon ? 12 : 14,
          columnGap: 8,
          borderRadius: 8,
        },
        style,
        isWidthStyle,
      ]}
      gap={8}
      textStyle={{
        color: textColor ? textColor : isColorStyle,
        fontSize: 14,
        fontWeight: "bold",
      }}
      alignItems={alignItems}
      justifyContent={justifyContent}
    />
  );
};
