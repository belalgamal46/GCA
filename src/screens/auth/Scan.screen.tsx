import React from "react";
import { MainText } from "../../components/genericScreens/text/MainText";
import { Screen } from "../../components/genericScreens/Screen";
import { YStack } from "../../components/genericScreens/Stack";

// =================================================================

export function ScanScreen() {
  return (
    <Screen>
      <YStack
        justifyContent="center"
        alignItems="center"
        alignSelf="center"
        gap={8}
        bgColor={"gray"}
        width={500}
        height={500}
      >
        <MainText text="Scan Screen" />
      </YStack>
    </Screen>
  );
}
