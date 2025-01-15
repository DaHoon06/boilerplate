import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const headers = {
  "Content-Type": "application/json",
};

const createAxiosInstance = (
  basePath: string,
  targetServer: string,
): AxiosInstance => {
  const instance: AxiosInstance = axios.create({
    baseURL: `${targetServer}${basePath}`,
    headers,
    timeout: 100000,
    withCredentials: true,
  });

  instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    // if (typeof window !== "undefined") {
    //   const { getCookie } = useCookies();
    //   const token = getCookie<string>("token");
    //   if (token) {
    //     config.headers["Authorization"] = `Bearer ${token}`;
    //   }
    // }
    return config;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      const { response } = error;
      console.log(response);
      return Promise.reject(error);
    },
  );

  return instance;
};

export const axiosInstance = createAxiosInstance('/api', 'http://localhost:3033');
export const routerAxiosInstance = createAxiosInstance('/api', 'http://localhost:3035');

