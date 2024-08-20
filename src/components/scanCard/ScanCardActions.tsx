import { ArrowCircleUpRight } from "../../icons";
import { PRIMARY, PRIMARY_5, WHITE } from "../../theme/colors";
import { ActionBtn } from "../genericScreens/buttons/ActionBtn";
import { XStack } from "../genericScreens/Stack";
import { MaterialIcons } from "@expo/vector-icons";

type ScanActionsProps = {
  cashOutAction: () => void;
  scanNewKitAction: () => void;
};

export function ScanCardActions({
  cashOutAction,
  scanNewKitAction,
}: ScanActionsProps) {
  const cashOutBtnIcon = (
    <ArrowCircleUpRight width={26} height={26} fill={PRIMARY} />
  );

  const scanBtnIcon = (
    <MaterialIcons name="add-circle-outline" size={24} color={WHITE} />
  );

  return (
    <XStack justifyContent="center" alignItems="center" gap={12}>
      <ActionBtn
        onPress={cashOutAction}
        text="CashOut"
        leftIcon={cashOutBtnIcon}
        alignItems="center"
        bgColor={PRIMARY_5}
        theme="bold"
      />
      <ActionBtn
        justifyContent="center"
        style={{ flex: 1 }}
        onPress={scanNewKitAction}
        text="Scan New Kit"
        leftIcon={scanBtnIcon}
        alignItems="center"
        theme="bold"
      />
    </XStack>
  );
}
