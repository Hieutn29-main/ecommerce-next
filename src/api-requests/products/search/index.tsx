import instance, { serverInstance } from "@/service/axios";

export const toSearchProducts = async (params?: Record<string, any>) => {
  return instance.get("/products/search", {
    params,
  });
};
export const serverToSearchProducts = async (params?: Record<string, any>) => {
  return serverInstance.get("/products/search", {
    params,
  });
};
