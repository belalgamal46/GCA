import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from "redux-persist";
import authReducer from "./authSlice/auth";
import scanReducer from "./scanSlice/scan";
import localizationReducer from "./localizationSlice/localization";

// ----------------------------------------------------------------

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  scan: scanReducer,
  localization: localizationReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// ----------------------------------------------------------------

export type AppDispatch = typeof store.dispatch;
export type RootSate = ReturnType<typeof store.getState>;
