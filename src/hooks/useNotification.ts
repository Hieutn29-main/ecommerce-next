"use client";
import { NotificationComponent_I } from "@/types";
import { notification } from "antd";

const useNotificationApp = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = ({
    type,
    message,
    description,
  }: NotificationComponent_I) => {
    api[type]({
      message: message || "",
      description: description || "",
    });
  };
  return {
    contextHolder,
    openNotificationWithIcon,
  };
};

export default useNotificationApp;
