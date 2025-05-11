import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/variable";
import instance, { serverInstance } from "@/service/axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const cookieStore = await cookies();
  const acctoken = cookieStore.get(ACCESS_TOKEN);
  const refreshtoken = cookieStore.get(REFRESH_TOKEN);
  try {
    const res = await instance.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${acctoken?.value}`,
      },
    });

    return NextResponse.json(res?.data);
  } catch (error: any) {
    try {
      const refreshRes = await instance.post("/auth/refresh", {
        refreshToken: refreshtoken?.value,
        expiresInMins: 30,
      });
      const newAccessToken = refreshRes.data?.accessToken;

      if (!newAccessToken) {
        throw new Error("Không nhận được accessToken mới");
      }

      const retryRes = await instance.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${newAccessToken}`,
        },
      });

      return NextResponse.json(retryRes?.data);
    } catch (error: any) {
      return Response.json(
        {
          message: error.response?.data?.message,
        },
        {
          status: error.response?.status,
        }
      );
    }
  }
}
