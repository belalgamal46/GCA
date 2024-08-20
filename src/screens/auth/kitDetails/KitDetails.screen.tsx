import { StyleSheet, Text } from "react-native";
import React from "react";
import { Screen } from "../../../components/genericScreens/Screen";
import { YStack } from "../../../components/genericScreens/Stack";
import { CableInfoCard, CableInfoCardProps } from "./cableInfoCard";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { EarnedPointsCard } from "./earnedPointsCard";
import { AddressCard } from "./addressCard";
import { KitInfoCard } from "./kitInfoCard";

export interface KitDetailsProps extends CableInfoCardProps {}

export const KitDetails = ({ route }: any) => {
  const { params } = route;

  return (
    <Screen style={{ height: hp(100) }} scrollable={false}>
      <YStack gap={16} width={wp(100)} padding={16}>
        <CableInfoCard
          cableType={params.cableName}
          installationDate={params.date}
        />
        <EarnedPointsCard starNum={params.starNum} />
        <AddressCard location={params.location} />
        <KitInfoCard />
      </YStack>
    </Screen>
  );
};
