import { Screen } from "../../../components/genericScreens/Screen";
import { YStack } from "../../../components/genericScreens/Stack";
import { ScannedCard } from "../../../components/ScannedCard";
import { useAppSelector } from "../../../redux/hooks/hooks";
import { EmptyScanScreen } from "./EmptyScan.screen";
import { FlatList } from "react-native";

export default function ViewAllScans() {
  const scans = useAppSelector(({ scan }) => scan.scans);

  if (!scans.length) return <EmptyScanScreen />;

  const renderScannedCard = ({ item }: any) => (
    <ScannedCard
      date={
        item?.created_at
          ? `${new Date(item?.created_at).toISOString().split("T")[0]}`
          : ""
      }
      cableName={item.cable?.name}
      isOnViewAllScansScreen
      location={item?.address as string}
      starNum={10}
      latitude={item.lon}
      longitude={item.lat}
    />
  );

  return (
    <Screen scrollable={false}>
      <YStack>
        <FlatList
          contentContainerStyle={{
            marginTop: 30,
          }}
          renderItem={renderScannedCard}
          data={scans}
        />
      </YStack>
    </Screen>
  );
}
