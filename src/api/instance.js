import axios from "axios";
import { asyncLocalStorage } from "./utils/asyncLocalStorage";

const axiosInstance = (contentType) => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API,
    timeout: 5000,
  });

  instance.interceptors.request.use(async (config) => {
    config.headers["Content-Type"] = contentType;
    config.headers["Access-Control-Allow-Origin"] = "*";

    const access_token = await asyncLocalStorage.getItem("access_token");
    const token_type = await asyncLocalStorage.getItem("token_type");

    if (access_token && token_type) {
      config.headers.Authorization = `${token_type} ${access_token}`;
    }

    return config;
  });

  return instance;
};

export const instance = axiosInstance("application/json");

export const instanceFormData = axiosInstance("multipart/form-data");

export const instanceApplication = axiosInstance("application/x-www-form-urlencoded");

