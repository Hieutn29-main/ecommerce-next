import { ReactNode } from "react";

export interface Login_I {
  username: string;
  password: string;
  expiresInMins?: number;
}
export interface Loader_I {
  isPending: boolean;
}

export type NotificationType = "success" | "info" | "warning" | "error";

export interface NotificationComponent_I {
  type: NotificationType;
  message: string;
  description: string;
}

export interface CardSection5_I {
  title: string;
  icon: ReactNode;
  color?: string;
}
