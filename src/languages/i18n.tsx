import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import arabic from "./arabic.json";
import english from "./english.json";
import { Platform, NativeModules } from "react-native";
import * as Localization from "expo-localization";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Initialize language when app starts

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: 'ar',
  fallbackLng: "en",
  debug: false,
  resources: {
    en: english,
    ar: arabic,
  },
  react: {
    useSuspense: false,
  },
  simplifyPluralSuffix: false,
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  backend: {
    loadPath:
      Platform.OS === "ios"
        ? `${Localization.locale}/locales/{{lng}}/{{ns}}.json`
        : `assets/locales/{{lng}}/{{ns}}.json`,
    addPath:
      Platform.OS === "ios"
        ? `${Localization.locale}/locales/{{lng}}/{{ns}}.missing.json`
        : `assets/locales/{{lng}}/{{ns}}.missing.json`,
    init: {
      useLocalStorage: false,
      useAsyncStorage: true,
      storage: AsyncStorage,
    },
  },
});

export default i18next;
