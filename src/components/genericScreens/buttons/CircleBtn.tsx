import { PrimaryButton } from "../PrimaryButton";
import { CircleBtnProps } from "../../../types/circleBtnProps";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";
import { PRIMARY, TEXT_COLOR_3 } from "../../../theme/colors";
import { StyleSheet } from "react-native";

export const CircleBtn = ({
  onPress,
  style,
  disabled,
  iconName = "arrow-forward",
  bgColor = PRIMARY,
  size = 24,
  iconColor = TEXT_COLOR_3,
}: CircleBtnProps) => {
  const isDisabledStyle = disabled ? styles.disabledBtn : {};

  return (
    <PrimaryButton
      onPress={onPress}
      bgColor={bgColor}
      alignItems="center"
      justifyContent="center"
      style={[isDisabledStyle, styles.btn, style]}
      disabled={disabled}
    >
      <MaterialIcon name={iconName} size={size} color={iconColor} />
    </PrimaryButton>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderRadius: 100,
    padding: 15,
  },

  disabledBtn: {
    opacity: 0.5,
  },
});
