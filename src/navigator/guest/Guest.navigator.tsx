import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OtpScreen } from "../../screens/guest/OTP.screen";
import { SignupScreen } from "../../screens/guest/Signup.screen";
import { TestScreen } from "../../screens/Test.screen";
import { FinalizeAccountScreen } from "../../screens/guest/FinalizeAccount.screen";
import { GuestHeader } from "./GuestHeader";
import { LocalizationScreen } from "../../screens/guest/LocalizationScreen";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Here we need to have the unauthorized screen
 *  1. Login Email | Password
 *  2. Register
 *  3. Change | Forget Password
 */

const Stack = createNativeStackNavigator();

export function GuestNavigator() {
  const [initialRouteName, setInitialRouteName] = useState<string>('chooseLanguage');

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const hasLaunchedBefore = await AsyncStorage.getItem('hasLaunchedBefore');
        if (hasLaunchedBefore) {
          setInitialRouteName('signup');
        } else {
          await AsyncStorage.setItem('hasLaunchedBefore', 'true');
          setInitialRouteName('chooseLanguage');
        }
      } catch (error) {
        console.error('Error checking first launch:', error);
      }
    };

    checkFirstLaunch();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{ header: GuestHeader, headerShown: true }}
      initialRouteName='signup'
    >
      <Stack.Screen name="signup" component={SignupScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="test" component={TestScreen} />
      <Stack.Screen name="finalizeAccount" component={FinalizeAccountScreen} />
    </Stack.Navigator>
  );
}
