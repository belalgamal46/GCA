import { StyleProp, ViewStyle } from 'react-native';

// =================================================================

export type CircleBtnProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
  iconName?: any;
  bgColor?: string;
  size?: number;
  iconColor?: string;
};
