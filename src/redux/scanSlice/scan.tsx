import { createSlice } from "@reduxjs/toolkit";
import { ScanResponse } from "../../types/scan.type";

export interface ScanState {
  scans: ScanResponse[];
}

const initialState: ScanState = {
  scans: [],
};

export const scanSlice = createSlice({
  name: "scan",
  initialState,
  reducers: {
    addScan: (state: ScanState, action: { payload: ScanResponse }) => {
      state.scans = [action.payload, ...state.scans];
    },
    setScans: (state: ScanState, action: { payload: ScanResponse[] }) => {
      state.scans = action.payload;
    },
    clearScanState: (state: ScanState) => {
      state.scans = [];
    },
  },
});

export const { addScan, clearScanState, setScans } = scanSlice.actions;

export default scanSlice.reducer;
