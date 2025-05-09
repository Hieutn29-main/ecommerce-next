"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { cookies } from "next/headers";
import { serverToLogin } from "@/api-requests/login";
import { message } from "antd";
import type { FormProps } from "antd";
import { Form, Input } from "antd";
import {
  ButtonWrapper,
  LoginForm,
  LoginWrapper,
  TitleLogin,
} from "@/app/login/styled";
import { Login_I } from "@/types";
import { LOGIN_FAILED, LOGIN_SUCCESS } from "@/message";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import Loader from "@/components/loaders";
import CardComponent from "@/components/card";
import useNotificationApp from "@/hooks/useNotification";

const page = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const { contextHolder, openNotificationWithIcon } = useNotificationApp();
  const mutation = useMutation({
    mutationFn: serverToLogin,
    mutationKey: ["login"],
  });
  const onFinish: FormProps<Login_I>["onFinish"] = async (values) => {
    if (mutation.isPending) return;
    try {
      const result = await mutation.mutateAsync({
        ...values,
        expiresInMins: 30,
      });

      if (result) {
        openNotificationWithIcon({
          type: "success",
          message: "Login",
          description: LOGIN_SUCCESS,
        });
        setTimeout(() => {
          router.push("/");
        }, 500);
      }
    } catch (error) {
      console.error(error);
      openNotificationWithIcon({
        type: "error",
        message: "Login",
        description: LOGIN_FAILED,
      });
    }
  };

  const onFinishFailed: FormProps<Login_I>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    setIsMounted(true);
  });
  if (!isMounted) return null;
  return (
    <LoginWrapper>
      <Loader isPending={mutation.isPending} />
      {contextHolder}
      <LoginForm
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <TitleLogin>Login</TitleLogin>
        <Form.Item<Login_I>
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<Login_I>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label={null}>
          <ButtonWrapper>
            <button className="uiverse" type="submit">
              <div className="wrapper">
                <span>Submit</span>
                <div className="circle circle-12" />
                <div className="circle circle-11" />
                <div className="circle circle-10" />
                <div className="circle circle-9" />
                <div className="circle circle-8" />
                <div className="circle circle-7" />
                <div className="circle circle-6" />
                <div className="circle circle-5" />
                <div className="circle circle-4" />
                <div className="circle circle-3" />
                <div className="circle circle-2" />
                <div className="circle circle-1" />
              </div>
            </button>
          </ButtonWrapper>
        </Form.Item>
      </LoginForm>
    </LoginWrapper>
  );
};

export default page;
