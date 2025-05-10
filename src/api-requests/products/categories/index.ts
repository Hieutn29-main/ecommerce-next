import instance, { serverInstance } from "@/service/axios";

export const toGetAllCategories = async () => {
  return instance.get("/products/categories");
};
export const serverToGetAllCategories = async () => {
  return serverInstance.get("/products/categories");
};

export const toGetProductsByCategories = async (
  category: string,
  params?: any
) => {
  return instance.get(`/products/category/${category}`, { params });
};
export const serverToGetProductsByCategories = async (
  category: string,
  params?: any
) => {
  return serverInstance.get(`/products/category/${category}`, { params });
};
