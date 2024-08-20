import { useIsFocused, useNavigation } from '@react-navigation/native';
import { BarCodeEvent, BarCodeScanner } from 'expo-barcode-scanner';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { timeOut } from '../../redux/authSlice/auth';
import { useAppDispatch } from '../../redux/hooks/hooks';
import { requestForegroundPermissionsAsync } from 'expo-location';
import { showToast } from '../../helper/toast';
import { useTranslation } from 'react-i18next';

export const QrcodeScanScreen = () => {
  const dispatch = useAppDispatch();
  const { navigate } = useNavigation<any>();
  const isFocused = useIsFocused();
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      const locationPermission = await requestForegroundPermissionsAsync();
      if (!locationPermission.granted) {
        showToast({
          position: 'top',
          text: t('no_location') as string,
          type: 'error',
        });
        return navigate('Home' as never);
      }

      const scanPermission = await BarCodeScanner.requestPermissionsAsync();
      if (!scanPermission.granted) {
        showToast({
          position: 'top',
          text: t('no_camera') as string,
          type: 'error',
        });
        return navigate('Home' as never);
      }
    })();
  }, []);

  const handleQrcodeScanned = ({ data }: BarCodeEvent) => {
    dispatch(timeOut(true));
    navigate('Home', { qrcodeData: data });
  };

  return (
    <View style={styles.container}>
      {isFocused ? (
        <BarCodeScanner
          style={StyleSheet.absoluteFill}
          onBarCodeScanned={handleQrcodeScanned}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
