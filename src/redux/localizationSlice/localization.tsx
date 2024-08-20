import { createSlice } from "@reduxjs/toolkit";
import i18n from "../../languages/i18n";
import { changeDirection } from "../../theme/globalStyles";

export interface LocalizationState {
  currentLanguage: string;
  isLoading: boolean;
  isLoadingErrorMessage: string;
}

const initialState: LocalizationState = {
  currentLanguage: "ar",
  isLoading: false,
  isLoadingErrorMessage: "",
};

export const localizationSlice = createSlice({
  name: "localization",
  initialState,
  reducers: {
    changeLang: (
      state: LocalizationState,
      { payload }: { payload: string }
    ) => {
      const direction = payload === "ar" ? "rtl" : "ltr";
      changeDirection(direction);
      i18n.changeLanguage(payload);
      state.currentLanguage = payload;
    },
  },
});

export const { changeLang } = localizationSlice.actions;
export default localizationSlice.reducer;
