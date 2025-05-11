import { REFRESH_TOKEN } from "@/constants/variable";
import instance from "@/service/axios";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = await cookies();
  // const refreshToken = cookieStore.get(REFRESH_TOKEN)?.value;
  const refreshToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3NDY5NDMxNzAsImV4cCI6MTc0OTUzNTE3MH0.FBlL76Ch2EWtb230S1x5wvPkAX1tVfkMPWBKEuy351A";
  if (!refreshToken) {
    return Response.json(
      {
        message: "Không tìm thấy refreshToken",
      },
      {
        status: 401,
      }
    );
  }
  try {
    const res = await instance.post("/auth/refresh", {
      refreshToken: refreshToken,
      expiresInMins: 30,
    });
    cookieStore.set("accessToken", res?.data.accessToken, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      expires: 60 * 60 * 24 * 7,
    });
    cookieStore.set("refreshToken", res?.data.refreshToken, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      expires: 60 * 60 * 24 * 7,
    });
    return Response.json(res?.data);
  } catch (error: any) {
    console.log(error);
    return Response.json(
      {
        message: error.message ?? "Có lỗi xảy ra",
      },
      {
        status: 401,
      }
    );
  }
}
