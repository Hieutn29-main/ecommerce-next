"use client";
import instance from "@/service/axios";
import React from "react";
import { Button, message } from "antd";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { serverToLogout } from "@/api-requests/logout";
const ButtonC = () => {
  const router = useRouter();
  const getTodos = async () => {
    try {
      const res = await instance.get("/products");
      return res.data;
    } catch (error) {
      throw new Error("Có lỗi xảy ra khi lấy dữ liệu");
    }
  };

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
    enabled: false,
  });

  const handleClick = async () => {
    try {
      await refetch();
      console.log(data);
      message.success("Dữ liệu đã được lấy thành công!");
    } catch (error) {
      message.error("Có lỗi xảy ra khi lấy dữ liệu");
    }
  };

  if (isLoading) {
    return <div>Đang tải...</div>;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }

  const handleLogout = async () => {
    await serverToLogout();
    router.push("/login");
  };

  return (
    <div>
      <Button onClick={handleClick}>aloo</Button>
      <Button onClick={handleLogout}>logout</Button>

      <div>
        {data?.products?.map((pro: any) => (
          <p>{pro.title}</p>
        ))}
      </div>
    </div>
  );
};

export default ButtonC;
