import { useTranslation } from "react-i18next";
import { PrimaryButton } from "./genericScreens/PrimaryButton";
import { YStack } from "./genericScreens/Stack";

// =================================================================

export function LanguageSwitcher() {
  const {
    i18n: { changeLanguage },
  } = useTranslation();

  // =================================================================

  return (
    <YStack>
      <PrimaryButton
        textStyle={{ color: "white" }}
        text="Arabic"
        onPress={() => changeLanguage("ar")}
      />

      <PrimaryButton
        textStyle={{ color: "white" }}
        text="English"
        onPress={() => changeLanguage("en")}
      />
    </YStack>
  );
}
