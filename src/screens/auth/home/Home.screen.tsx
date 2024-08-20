import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Api } from "../../../api/axios";
import { getUserScans, scanQrCodeApi } from "../../../api/scan.api";
import { BottomSheet } from "../../../components/genericScreens/BottomSheet";
import { Screen } from "../../../components/genericScreens/Screen";
import { YStack } from "../../../components/genericScreens/Stack";
import { ScanCard } from "../../../components/scanCard/ScanCard";
import { useAppDispatch } from "../../../redux/hooks/hooks";
import { addScan, setScans } from "../../../redux/scanSlice/scan";
import { PRIMARY } from "../../../theme/colors";
import { ScanResponse } from "../../../types/scan.type";
import { CardContainers } from "./homeComponents/CardContainers";
import { updatePoints } from "../../../redux/authSlice/auth";

export interface HomeProps {
  route?: {
    params: {
      qrcodeData?: string;
    };
  };
}

const useFetchScans = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async () => {
      if (!Api) return;
      const result = await getUserScans();
      if (result?.response === "rejected") return;
      dispatch(setScans(result));
    })();
  }, []);
};

// testlink http://localhost:4000/api/download-qrcode?order_number=123&batch_number=321&serial=aaaaa3&quantity=50
const useScanQrCode = (
  qrcodeData: string,
  setShowAfterScanSheet: (v: boolean) => void
) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    // coming from qrcode scan page
    if (qrcodeData) {
      (async () => {
        let location = await Location.getCurrentPositionAsync({});
        const result = (await scanQrCodeApi({
          lat: location?.coords?.latitude as number,
          lon: location?.coords?.longitude as number,
          qrcode_data: qrcodeData,
        })) as ScanResponse;
        if (result.response && result.response === "rejected") return;
        dispatch(addScan(result as ScanResponse));
        setShowAfterScanSheet(true);
        dispatch(updatePoints(result.points));
      })();
    }
  }, [qrcodeData]);
};

const bottomSheetIcon = (
  <MaterialIcons name="play-arrow" size={70} color={PRIMARY} />
);

export function HomeScreen(props: any) {
  const data: any = [1];
  const { navigate } = useNavigation();
  const [showAfterScanSheet, setShowAfterScanSheet] = useState(false);
  useFetchScans();

  // coming from qrcode scan page
  const { qrcodeData } = props.route?.params || {};
  useScanQrCode(qrcodeData, setShowAfterScanSheet);

  const onClickScan = async () => navigate("ScanScreen" as never);

  return (
    <Screen>
      <YStack
        justifyContent="center"
        alignItems="center"
        alignSelf="center"
        gap={8}
      >
        <ScanCard data={data} onClickScan={onClickScan} />
        <CardContainers />
        <BottomSheet
          isVisible={showAfterScanSheet}
          setVisibility={setShowAfterScanSheet}
          bottomSheetIcon={bottomSheetIcon}
        />
      </YStack>
    </Screen>
  );
}
