import instance, { serverInstance } from "@/service/axios";

export const toGetAllProducts = async (params?: Record<string, any>) => {
  return instance.get("/products", {
    params,
  });
};
export const serverToGetAllProducts = async (params?: Record<string, any>) => {
  return serverInstance.get("/products", {
    params,
  });
};

export const toGetProduct = async () => {
  return instance.get("/products", {
    params: {},
  });
};
