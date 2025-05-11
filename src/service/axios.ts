import { NEXT_PUBLIC_API, NEXT_PUBLIC_URL } from "@/constants/variable";
import axios from "axios";

const instance = axios.create({
  baseURL: NEXT_PUBLIC_API,
});

export const serverInstance = axios.create({
  baseURL: NEXT_PUBLIC_URL + "/api",
  withCredentials: true,
});

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
