import { ActivityIndicator } from "react-native";
import { YStack } from "./Stack";

// =====================================================

export function LoadingScreen({
  size = "large",
}: {
  size?: number | "large" | "small";
}) {
  return (
    <YStack justifyContent="center" style={{ flex: 1 }}>
      <ActivityIndicator size={size} />
    </YStack>
  );
}
