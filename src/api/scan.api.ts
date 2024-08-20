import { ScanResponse } from "../types/scan.type";
import { Api } from "./axios";
import { getI18n } from "react-i18next";

export interface ScanQrCodeArgs {
  lon: number;
  lat: number;
  qrcode_data: string;
}

export interface ScanResponseProps {
  response: string;
  data: object;
}

export const scanQrCodeApi = async (data: ScanQrCodeArgs) => {
  try {
    const { data: response } = await Api.post(`/scan-qrcode`, data);
    return response as ScanResponseProps | ScanResponse;
  } catch (err: any) {
    if (err.response.status === 400 && err?.response?.data?.message) {
      return { response: "rejected", data: err.response.data.message };
    }
    const { t } = getI18n();
    return { response: "rejected", data: t("something_wrong") };
  }
};

export const getUserScans = async () => {
  try {
    const { data } = await Api.get(`/scans`);
    return data;
  } catch (err: any) {
    const { t } = getI18n();
    return { response: "rejected", data: t("something_wrong") };
  }
};
