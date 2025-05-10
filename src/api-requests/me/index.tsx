import instance, { serverInstance } from "@/service/axios";

export const toGetMe = async () => {
  return instance.get("/auth/me");
};
export const serverToGetMe = async () => {
  return serverInstance.get("/me");
};
