import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../../screens/auth/home/Home.screen";
import { QrcodeScanScreen } from "../../../screens/auth/QrcodeScan.screen";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { HomeHeader } from "../header/HomeHeader";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { SettingScreen } from "../../../screens/auth/settings/Setting.screen";

// =================================================================

/**
 * Here we are going to add bottom tabs depedning on how many screens we have!
 * Then we will pass it to the AuthNavigator Component to render it when user is Authorized.
 */

const Tab = createBottomTabNavigator();

// =================================================================

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          marginBottom: hp(6),
          borderRadius: 50,
          paddingBottom: 0,
          marginTop: 10,
          height: hp(7.5),
          width: wp(88),
          alignSelf: "center",
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 24,
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowColor: "rgba(0,0,0,0.5)",
        },
        tabBarInactiveTintColor: "#e53132",
        tabBarActiveTintColor: "#e53132",
      }}
    >
      <Tab.Screen
        options={{
          headerShown: true,
          header: HomeHeader,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name={focused ? "pluscircle" : "pluscircleo"}
              size={size}
              color={color}
            />
          ),
        }}
        name="ScanScreen"
        component={QrcodeScanScreen}
      />
      <Tab.Screen
        options={{
          headerTitleAlign: "center",
          headerShown: true,
          title: "More",
          tabBarIcon: ({ color, size, focused }) => (
            <AntDesign
              name={focused ? "appstore1" : "appstore-o"}
              size={size}
              color={color}
            />
          ),
        }}
        name="Setting"
        component={SettingScreen}
      />
    </Tab.Navigator>
  );
}
