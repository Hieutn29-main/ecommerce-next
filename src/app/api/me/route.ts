import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/variable";
import instance from "@/service/axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const acctoken = cookies().get(ACCESS_TOKEN);
  const refresh_token = cookies().get(REFRESH_TOKEN);
  try {
    const res = await instance.get("/auth/me", {
      headers: {
        Authorization: `Bearer ${acctoken?.value}`,
      },
    });

    if (!res?.data) {
      return NextResponse.json(
        { message: "No data returned from products API" },
        { status: 500 }
      );
    }
    return NextResponse.json(res?.data);
  } catch (error: any) {
    console.error("Error during POST request:", error);
    if (error.response) {
      if (error.response.status === 401) {
        try {
          const res = await instance.post("/auth/refresh", {
            refreshToken: refresh_token,
            expiresInMins: 30,
          });
          if (res) {
            cookies().set(ACCESS_TOKEN, res.data.accessToken, {
              httpOnly: true,
              path: "/",
              maxAge: 60 * 60 * 24 * 7,
            });
            cookies().set(REFRESH_TOKEN, res.data.refreshToken);
          }
        } catch (error) {
          cookies().delete(ACCESS_TOKEN);
          cookies().delete(REFRESH_TOKEN);
        }
      }
      return NextResponse.json(
        {
          message: "Error from external API",
          error: error.response?.data || error.message,
        },
        { status: error.response?.status || 500 }
      );
    } else if (error.request) {
      return NextResponse.json(
        {
          message: "No response received from external API",
          error: error.message,
        },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { message: "An unexpected error occurred", error: error.message },
        { status: 500 }
      );
    }
  }
}
