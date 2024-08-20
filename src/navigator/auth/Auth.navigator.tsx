import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CashoutScreen } from "../../screens/auth/cashout/Cashout.screen";
import { TabNavigator } from "./tab/Tab.navigator";
import { KitDetails } from "../../screens/auth/kitDetails/KitDetails.screen";
import { PageWithTextHeader } from "./header/pagesWithTextHeader";
import ViewAllScans from "../../screens/auth/viewAllScans/ViewAllScans.screen";
import { useAppSelector } from "../../redux/hooks/hooks";
import { CertificateScreen } from "../../screens/auth/certificates/Certificates.screen";
import { LocalizationScreen } from "../../screens/guest/LocalizationScreen";
import { ProductsScreen } from "../../screens/auth/products/Products.screen";
import { ApprovalsScreen } from "../../screens/auth/approvals/Approvals.screen";
import { AboutCompanyScreen } from "../../screens/auth/aboutCompany/AboutCompany.screen";

// =================================================================

const Stack = createNativeStackNavigator();

// =================================================================

export function AuthNavigator() {
  const scans = useAppSelector(({ scan }) => scan.scans);

  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        options={{ headerShown: false }}
        name="home"
        component={TabNavigator}
      />

      <Stack.Screen
        component={ViewAllScans}
        name="ViewAllScans"
        options={{
          headerTitle: `All Installations(${scans.length})`,
        }}
      />

      <Stack.Screen
        options={{
          headerShown: true,
          title: "Cashout",
          headerTitleAlign: "center",
          header: PageWithTextHeader,
        }}
        component={CashoutScreen}
        name="Cashout"
      />

      <Stack.Screen
        name="KitDetails"
        component={KitDetails}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          header: PageWithTextHeader,
          title: "Kit Details",
        }}
      />

      <Stack.Screen
        name="certificates"
        component={CertificateScreen}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          header: PageWithTextHeader,
          title: "certificates_screen_title",
        }}
      />

      <Stack.Screen
        name="products"
        component={ProductsScreen}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          header: PageWithTextHeader,
          title: "products_screen_title",
        }}
      />

      <Stack.Screen
        name="approvals"
        component={ApprovalsScreen}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          header: PageWithTextHeader,
          title: "approvals_screen_title",
        }}
      />

      <Stack.Screen
        name="aboutCompany"
        component={AboutCompanyScreen}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          header: PageWithTextHeader,
          title: "about_company_screen_title",
        }}
      />

      <Stack.Screen
        name="chooseLanguage"
        component={LocalizationScreen}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          header: PageWithTextHeader,
          title: "Choose Language",
        }}
      />
    </Stack.Navigator>
  );
}
