import { LoginType } from "@/features/login-form/types";
import { axiosInstance } from "@datasketch/core/lib";
import { AxiosResponse } from "axios";

export const loginApi = async ({ id, password }: LoginType) => {
  const url = "/auth/login";
  const body = {
    id,
    password,
  };
  const result: AxiosResponse<{ username: string; accessToken: string }> =
    await axiosInstance.post(url, body);
  return result.data;
};
