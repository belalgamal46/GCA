import { useState } from "react";
import { YStack } from "../../../components/genericScreens/Stack";
import { CashoutCardsContainer } from "./cashoutComponents/CashoutCardsContainer";
import { PointsToCashCard } from "./cashoutComponents/PointsToCashCard";
import { MediumText } from "../../../components/genericScreens/text/MediumText";
import {
  PRIMARY3,
  TEXT_COLOR_2,
  TEXT_COLOR_5,
  WHITE,
} from "../../../theme/colors";
import { TextInput } from "react-native";
import { ActionBtn } from "../../../components/genericScreens/buttons/ActionBtn";
import { GlobalStyles } from "../../../theme/globalStyles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Screen } from "../../../components/genericScreens/Screen";

export function CashoutScreen({ route }: any) {
  const [isKeyboard, setIsKeyboard] = useState(false);
  const {params} = route;
  return (
    <Screen scrollable={false}>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={{ flexGrow: 1 }}
        onKeyboardDidShow={() => setIsKeyboard(true)}
        onKeyboardDidHide={() => setIsKeyboard(false)}
        scrollEnabled={isKeyboard}
      >
        <YStack
          paddingTop={16}
          px={16}
          gap={16}
          paddingBottom={isKeyboard ? 175 : 0}
        >
          <CashoutCardsContainer title="Points to cash">
            <PointsToCashCard points={params?.scan?.points} />
          </CashoutCardsContainer>
          <CashoutCardsContainer title="Cashout method">
            <MediumText
              size={16}
              color={TEXT_COLOR_2}
              text={"cashout_screen_method_text"}
            />
          </CashoutCardsContainer>
          <CashoutCardsContainer title="Mobile Wallet number">
            <TextInput
              style={{
                backgroundColor: TEXT_COLOR_5,
                padding: 16,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: PRIMARY3,
                ...GlobalStyles.setFlexDirectionToRtl,
              }}
              placeholder="01xxxxxxxxxxxx"
            />
          </CashoutCardsContainer>
        </YStack>

        <YStack style={{ flex: 1, justifyContent: "flex-end" }}>
          <YStack bgColor={WHITE} px={16} paddingBottom={48} paddingTop={16}>
            <ActionBtn
              justifyContent="center"
              alignItems="center"
              onPress={() => {}}
              text="Submit a request"
            />
          </YStack>
        </YStack>
      </KeyboardAwareScrollView>
    </Screen>
  );
}
