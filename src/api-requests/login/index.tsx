import instance, { serverInstance } from "@/service/axios";
import { Login_I } from "@/types";

export const toLogin = async (body: Login_I) => {
  return instance.post("/auth/login", body);
};
export const serverToLogin = async (body: Login_I) => {
  return serverInstance.post("/login", body);
};
