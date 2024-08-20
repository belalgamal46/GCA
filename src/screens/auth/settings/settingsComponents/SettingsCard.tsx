import { TouchableOpacity } from "react-native";
import { XStack, YStack } from "../../../../components/genericScreens/Stack";
import { MediumText } from "../../../../components/genericScreens/text/MediumText";
import { RegularText } from "../../../../components/genericScreens/text/RegularText";
import { TEXT_COLOR_5, WHITE } from "../../../../theme/colors";

// Import the necessary components from React Native
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

type SettingsCardProps = {
  icon?: any;
  userName?: string;
  text?: string;
  rightIcon?: any;
  isLastCard?: boolean;
  onPress?: () => void;
};

export function SettingsCard({
  icon = demoImage(),
  userName = "",
  text = "Personal Info",
  rightIcon = undefined,
  isLastCard = true,
  onPress,
}: SettingsCardProps) {
  // Create animated values for fade animation
  const fadeAnim = useRef(new Animated.Value(0)).current;

  // Define fade animation configuration
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <TouchableOpacity onPress={onPress}>
      {/* Apply fade animation to the SettingsCard */}
      <Animated.View style={{ opacity: fadeAnim }}>
        <YStack
          style={{
            borderBottomWidth: isLastCard ? 1 : 0,
            borderBottomColor: TEXT_COLOR_5,
          }}
          borderRadius={isLastCard ? 0 : 12}
          padding={16}
          bgColor={WHITE}
        >
          <XStack justifyContent="space-between" alignItems="center">
            <XStack gap={10} alignItems="center">
              {icon}
              <MediumText text={text} />
            </XStack>
            {userName && <RegularText text={userName} />}
            {rightIcon && rightIcon}
          </XStack>
        </YStack>
      </Animated.View>
    </TouchableOpacity>
  );
}

const demoImage = () => {
  return <YStack bgColor="gray" borderRadius={50} width={30} height={30} />;
};
