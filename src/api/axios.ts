import axios, { AxiosInstance } from "axios";
import { showToast } from "../helper/toast";
import { BASE_URL } from "./constants";
import { getI18n } from "react-i18next";

export let Api: AxiosInstance;

export const createAxiosInstance = (token?: string) => {
  const { language } = getI18n();
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      accept: "application/json",
      "Accept-Language": language,
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
  console.log("🚀 ~ createAxiosInstance ~ token:", token)
  

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error: any) => {
      // Handle error globally
      // console.error("state:", error.response.status);
      // console.error("An error occurred:", error.response.data);

      if (error?.message == "Network Error") {
        showToast({ type: "error", text: error?.message });
        return Promise.reject({
          response: { data: { message: error?.message } },
        });
      }

      // Perform custom error handling
      if (error.response.status === 401)
        // Unauthorized access error
        // You can redirect to the login page or display a message to the user
        showToast({ type: "error", text: error.response.data.message });
      else if (error.response.status === 404)
        // Not found error
        // You can redirect to an error page or display a message to the user
        showToast({ type: "error", text: error.response.data.message });
      else if (error.response.status === 400)
        showToast({ type: "error", text: error.response.data.message });
      // Other error
      // You can display a generic error message to the user or log the error
      else showToast({ type: "error", text: "something went wrong" });

      return Promise.reject(error);
    }
  );

  Api = axiosInstance;
};
