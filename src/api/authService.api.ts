import axios, { AxiosError } from "axios";
import { BASE_URL } from "./constants";
import { Api } from "./axios";

export const generateOTP = async (phone: string) => {
  try {
    const requestBody: object = {
      phone,
    };
    const response = await Api.post(`${BASE_URL}/auth/otp`, requestBody);
    return { response: "fullfilled", data: response.data };
  } catch (error: any) {
    return { response: "rejected", error: error.response.data.message };
  }
};

export const login = async (phone: string, otp: string) => {
  try {
    const requestBody: object = {
      phone,
      otp,
    };

    const headers: object = {
      accept: "application/json",
    };

    const response = await Api.post(
      `${BASE_URL}/auth/login`,
      requestBody,
      headers
    );

    return { response: "fullfilled", data: response.data };
  } catch (error: any) {
    return { response: "rejected", data: error.response.data.message };
  }
};

export const getUser = async (token: any) => {
  try {
    const config = {
      headers: {
        authorization: token,
        accept: "application/json",
      },
    };

    const response = await axios.get(`${BASE_URL}/auth/info`, config);
    return response.data;
  } catch (error) {
    return error;
  }
};
