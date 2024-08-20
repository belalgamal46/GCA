import { MaterialIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { Screen } from '../../../components/genericScreens/Screen';
import { YStack } from '../../../components/genericScreens/Stack';
import { SettingsCard } from './settingsComponents/SettingsCard';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks/hooks';
import { resetAuthUser } from '../../../redux/authSlice/auth';
import { clearScanState } from '../../../redux/scanSlice/scan';
import {
  Certificate,
  Play,
  SealCheck,
  Building,
  Info,
  ShieldCheckered,
  ArrowSquareOut,
  Cube,
  Language,
  Browser
} from '../../../icons';
import { GlobalStyles } from '../../../theme/globalStyles';
import { Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function SettingScreen() {
  const dispatch = useAppDispatch();
  const { name } = useAppSelector((state) => state.auth);
  const { navigate } = useNavigation<any>();
  // ---------------------------------

  const handleLogout = () => {
    dispatch(clearScanState());
    dispatch(resetAuthUser());
  };

  const onClickWebsite = async () => {
    const url = 'https://gca-acc.com/';
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log(`Don't know how to open URL: ${url}`);
    }
  };

  // ---------------------------------

  return (
    <Screen scrollable={true}>
      <YStack
        alignSelf="center"
        marginTop={16}
        marginBottom={16}
        width={wp(90)}
        gap={16}
      >
        <SettingsCard isLastCard={false} userName={`${name}`} />
        <YStack
          style={{ overflow: 'hidden' }}
          bgColor="white"
          borderRadius={12}
        >
          <SettingsCard
            icon={<Cube width={24} height={24} />}
            text="Products"
            onPress={() => navigate('products')}
          />
          <SettingsCard
            icon={<Play width={24} height={24} />}
            text="Tutorial"
          />
          <SettingsCard
            onPress={() => navigate('certificates')}
            icon={<Certificate width={24} height={24} />}
            text="ISO certificates"
          />
          <SettingsCard
            icon={<SealCheck width={24} height={24} />}
            text="Approvals"
            onPress={() => navigate('approvals')}
          />
          <SettingsCard
            onPress={() => navigate('aboutCompany')}
            text="About company"
            icon={<Building width={24} height={24} />}
          />
          <SettingsCard
            onPress={onClickWebsite}
            text="settings_screen_website"
            isLastCard={false}
            icon={<Browser width={24} height={24} />}
            rightIcon={
              <ArrowSquareOut
                width={24}
                height={24}
                style={{ ...GlobalStyles.setRotateY180Deg }}
              />
            }
          />
        </YStack>
        <YStack style={{ overflow: 'hidden' }} borderRadius={12}>
          <SettingsCard
            icon={<Info width={24} height={24} />}
            text="Terms and Conditions"
          />
          <SettingsCard
            icon={<ShieldCheckered width={24} height={24} />}
            text="Privacy & Policy"
          />
          <SettingsCard
            icon={<Language width={24} height={24} />}
            text="change_language_text"
            onPress={() => navigate('chooseLanguage')}
          />
        </YStack>
        <SettingsCard
          onPress={handleLogout}
          icon={
            <MaterialIcons
              name="logout"
              size={24}
              color="black"
              style={{ ...GlobalStyles.setRotateY180Deg }}
            />
          }
          isLastCard={false}
          text="Logout"
        />
      </YStack>
    </Screen>
  );
}

// rightIcon={
//   <ArrowSquareOut
//     width={24}
//     height={24}
//     style={{ ...GlobalStyles.setRotateY180Deg }}
//   />
// }
