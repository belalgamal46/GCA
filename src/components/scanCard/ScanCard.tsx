import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useAppSelector } from "../../redux/hooks/hooks";
import { PRIMARY, TEXT_COLOR_4, TEXT_COLOR_5 } from "../../theme/colors";
import { ScannedCard } from "../ScannedCard";
import { XStack, YStack } from "../genericScreens/Stack";
import { ActionBtn } from "../genericScreens/buttons/ActionBtn";
import { MediumText } from "../genericScreens/text/MediumText";
import { RegularText } from "../genericScreens/text/RegularText";
import { ScanCardActions } from "./ScanCardActions";
import { ScanCardInfo } from "./ScanCardInfo";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { GlobalStyles } from "../../theme/globalStyles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ScanCardProps = {
  points?: number;
  money?: string | number;
  data?: any;
  onClickScan: () => Promise<void>;
};

type RootStackParamList = {
  Cashout: { scan: any };
  // other routes can be added here
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// render normal text if data is an empty array[]
const renderText = () => {
  return (
    <YStack padding={20} marginTop={12}>
      <RegularText color="gray" text="no_scans" />
    </YStack>
  );
};

export function ScanCard({
  points = 0,
  money = "0.00",
  onClickScan,
  data = [],
}: ScanCardProps) {
  // render list of cables
  const latestScan = useAppSelector(({ scan }) => scan.scans[0]);
  const userPoints = useAppSelector(({ auth }) => auth.points);
  
  const navigation = useNavigation<NavigationProp>();
  return (
    <YStack
      width={wp(90)}
      paddingTop={24}
      marginTop={hp(2)}
      bgColor="white"
      borderRadius={12}
    >
      <YStack
        style={{ borderBottomWidth: 1, borderBottomColor: TEXT_COLOR_4 }}
        gap={24}
        px={16}
        paddingBottom={32}
      >
        <ScanCardInfo money={money} points={userPoints} />
        <ScanCardActions
          cashOutAction={() => {
            navigation.navigate("Cashout", { scan: latestScan });
          }}
          scanNewKitAction={onClickScan}
        />
      </YStack>
      <YStack marginTop={24}>
        <XStack px={16} justifyContent="space-between" alignItems="center">
          <MediumText size={20} text="Recent installation" />
          {latestScan && (
            <ActionBtn
              bgColor={TEXT_COLOR_5}
              text="View All"
              rightIcon={
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={14}
                  color={PRIMARY}
                  style={{ ...GlobalStyles.setRotateY180Deg }}
                />
              }
              textColor={PRIMARY}
              onPress={() => navigation.navigate("ViewAllScans" as never)}
            />
          )}
        </XStack>
        {latestScan ? (
          <YStack marginTop={14}>
            <ScannedCard
              isSingleCable={data.length === 1}
              cableName={latestScan.cable?.name}
              date={
                latestScan?.created_at
                  ? `${
                      new Date(latestScan?.created_at)
                        .toISOString()
                        .split("T")[0]
                    }`
                  : ""
              }
              starNum={10}
              location={latestScan?.address as string}
              longitude={latestScan.lon}
              latitude={latestScan.lat}
            />
          </YStack>
        ) : (
          renderText()
        )}
      </YStack>
    </YStack>
  );
}
