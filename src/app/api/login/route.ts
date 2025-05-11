import { toLogin } from "@/api-requests/login";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/variable";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const cookiesStore = await cookies();
  try {
    const res = await toLogin(body);
    const accessToken = res?.data?.accessToken;
    const refreshToken = res?.data?.refreshToken;
    cookiesStore.set(ACCESS_TOKEN, accessToken, {
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    cookiesStore.set(REFRESH_TOKEN, refreshToken);
    return NextResponse.json(res?.data);
  } catch (error: any) {
    if (error) {
      return Response.json(error.payload, {
        status: error.status,
      });
    } else {
      return Response.json(
        {
          message: "Có lỗi xảy ra",
        },
        {
          status: 500,
        }
      );
    }
  }
}
