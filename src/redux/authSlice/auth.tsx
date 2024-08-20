import { createSlice } from "@reduxjs/toolkit";
import { createAxiosInstance } from "../../api/axios";

type AuthState = {
  isAuth: boolean;
  id: number;
  phone: string | null;
  name: string | null;
  email: string | null;
  years_of_experience: string | null;
  jobTitle: string | null;
  profileImage: string | null;
  dateOfBirth: string | null;
  isScanned: boolean;
  isTimeout: boolean;
  isRegister: boolean;
  accessToken?: string;
  refreshToken: string;
  points: number | null;
};

const initialState: AuthState = {
  isAuth: false,
  id: 0,
  name: null,
  email: null,
  years_of_experience: null,
  phone: null,
  jobTitle: null,
  dateOfBirth: null,
  profileImage: null,
  points: 0,
  isScanned: false,
  isTimeout: false,
  isRegister: false,
  accessToken: "",
  refreshToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state) => {
      state.isAuth = true;
    },
    signOut: (state) => {
      state.isAuth = false;
    },
    scanned: (state) => {
      state.isScanned = !state.isScanned;
    },
    timeOut: (state, action) => {
      state.isTimeout = action.payload;
    },
    isRegistered: (state, action) => {
      state.isRegister = action.payload;
    },
    setUser: (state, action: { payload: AuthState }) => {
      createAxiosInstance(action.payload.accessToken);
      return {
        ...state,
        ...action.payload,
      };
    },
    resetAuthUser: () => initialState,
    updatePoints: (state, action) => {
      state.points = action.payload;
    }
  },
});

export const {
  signIn,
  signOut,
  scanned,
  timeOut,
  isRegistered,
  setUser,
  resetAuthUser,
  updatePoints
} = authSlice.actions;

export default authSlice.reducer;
