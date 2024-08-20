import { View, ViewStyle } from "react-native";
import React from "react";
import { BACKGROUND_1 } from "../../../theme/colors";
import { PRIMARY3 } from "../../../theme/colors";

export interface BasicStyleBgProps {
  children: React.ReactNode;
  styles?: ViewStyle;
}

export const BasicStyleBg = ({ children, styles }: BasicStyleBgProps) => {
  return (
    <View
      style={{
        backgroundColor: BACKGROUND_1,
        borderColor: PRIMARY3,
        borderRadius: 8,
        borderWidth: 1,
        ...styles,
      }}
    >
      {children}
    </View>
  );
};
