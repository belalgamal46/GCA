import { ScrollView, StyleProp, ViewStyle } from "react-native";
import { LoadingScreen } from "./Loading.screen";
import { YStack } from "./Stack";

// ----------------------------------------------------------------

type ScreenProps = {
  children: React.ReactNode;
  scrollable?: boolean;
  style?: StyleProp<ViewStyle>;
  isLoading?: boolean;
};

// ----------------------------------------------------------------

export function Screen({
  children,
  scrollable = true,
  style,
  isLoading,
}: ScreenProps) {
  if (isLoading) return <LoadingScreen />;

  return scrollable ? (
    <ScrollView>
      <YStack alignItems="center" style={style}>
        {children}
      </YStack>
    </ScrollView>
  ) : (
    <YStack style={[style, { flex: 1 }]}>{children}</YStack>
  );
}
