import { NavigationProvider } from "./navigation";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../redux/store";
import { I18nextProvider } from "react-i18next";
import i18n from "../languages/i18n";
import Toast from "react-native-toast-message";

// =================================================================

/**
 * Provider
 * |_ Theme Provder
 * |_ Redux Provider
 * |_ Navigation Provider
 */

// =================================================================

export function Provider({ children }: any) {
  return (
    <ReduxProvider store={store}>
      <I18nextProvider i18n={i18n}>
        <NavigationProvider>
          {children}
          <Toast />
        </NavigationProvider>
      </I18nextProvider>
    </ReduxProvider>
  );
}
