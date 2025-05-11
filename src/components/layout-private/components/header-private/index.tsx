"use client";
import { serverToLogout } from "@/api-requests/logout";
import { serverToGetMe } from "@/api-requests/me";
import { HeaderPrivateWrapper } from "@/components/layout-private/components/header-private/styled";
import Loader from "@/components/loaders";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/variable";
import useMounted from "@/hooks/useMounted";
import useNotificationApp from "@/hooks/useNotification";
import { useQuery } from "@tanstack/react-query";
import { Avatar, Button, Popover } from "antd";
import { AxiosError } from "axios";
import { cookies } from "next/headers";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const HeaderPrivate = () => {
  const { isMounted } = useMounted();
  const router = useRouter();
  const { contextHolder, openNotificationWithIcon } = useNotificationApp();
  const { data, isLoading, error } = useQuery({
    queryKey: ["me"],
    queryFn: serverToGetMe,
  });
  const handleLogout = async () => {
    await serverToLogout();
    router.push("/login");
  };
  if (error as any) {
    const axiosError = error as AxiosError;

    if (
      axiosError?.response?.status === 401 ||
      axiosError?.response?.status === 500
    ) {
      openNotificationWithIcon({
        type: "error",
        message: "get me",
        description: axiosError?.response?.statusText || "",
      });
      setTimeout(() => {
        handleLogout();
      }, 1000);
    }
  }

  const content = (
    <div
      style={{
        width: 400,
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
        }}
      >
        Profile
      </h2>
      <p
        style={{
          fontWeight: 400,
          fontSize: "18px",
        }}
      >
        <span
          style={{
            fontWeight: 600,
            fontSize: "18px",
          }}
        >
          Name:
        </span>
        &nbsp; {data?.data?.firstName + " " + data?.data?.lastName}
      </p>
      <p
        style={{
          fontWeight: 400,
          fontSize: "18px",
        }}
      >
        <span
          style={{
            fontWeight: 600,
            fontSize: "18px",
          }}
        >
          Birthday:
        </span>
        &nbsp; {data?.data?.birthDate}
      </p>
      <p
        style={{
          fontWeight: 400,
          fontSize: "18px",
        }}
      >
        <span
          style={{
            fontWeight: 600,
            fontSize: "18px",
          }}
        >
          Address:
        </span>
        &nbsp;{" "}
        {data?.data?.address?.address +
          ", " +
          data?.data?.address?.city +
          ", " +
          data?.data?.address?.country}
      </p>
      <p
        style={{
          fontWeight: 400,
          fontSize: "18px",
        }}
      >
        <span
          style={{
            fontWeight: 600,
            fontSize: "18px",
          }}
        >
          Phone number:
        </span>
        &nbsp; {data?.data?.phone}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <Button
          style={{
            width: "100%",
          }}
          type="primary"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </div>
  );
  if (!isMounted) return null;
  return (
    <HeaderPrivateWrapper>
      <Loader isPending={isLoading} />
      {contextHolder}
      <div className="container">
        <p className="title">dummy json demo</p>
        <Popover content={content} title={null}>
          <div className="profile">
            <Avatar
              size={50}
              src={data?.data?.image}
              style={{
                background: "white",
              }}
            />
            <p>{data?.data?.username}</p>
          </div>
        </Popover>
      </div>
    </HeaderPrivateWrapper>
  );
};

export default HeaderPrivate;
