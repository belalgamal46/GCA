import { Api } from "./axios";

type FinalizeAccountProps = {
  name: string;
  job_title: string;
  national_num: string;
};

export const finalizeAccount = async ({
  name = "",
  job_title = "",
  national_num = "",
}: FinalizeAccountProps) => {
  try {
    const requestBody: object = {
      name,
      job_title,
      national_num,
    };

    const response = await Api.post(`/auth/fill-data`, requestBody);

    return response.data;
  } catch (error) {
    return error;
  }
};
