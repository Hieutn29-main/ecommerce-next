import instance, { serverInstance } from "@/service/axios";

export const toGetAllCategories = async () => {
  return instance.get("/products/categories");
};
export const serverToGetAllCategories = async () => {
  return serverInstance.get("/products/categories");
};
