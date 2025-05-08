import { serverInstance } from "@/service/axios";

export const serverToLogout = async () => {
  return serverInstance.post("/logout");
};
