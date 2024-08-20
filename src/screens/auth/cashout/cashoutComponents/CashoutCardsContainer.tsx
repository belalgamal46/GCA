import { YStack } from "../../../../components/genericScreens/Stack";
import { RegularText } from "../../../../components/genericScreens/text/RegularText";
import { PRIMARY3, TEXT_COLOR_2, WHITE } from "../../../../theme/colors";

export function CashoutCardsContainer({
  title = "",
  children,
}: {
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <YStack
      bgColor={WHITE}
      borderRadius={8}
      gap={16}
      style={{ borderWidth: 1, borderColor: PRIMARY3 }}
      padding={16}
      width={"100%"}
    >
      <RegularText color={TEXT_COLOR_2} text={title} />
      {children}
    </YStack>
  );
}
