import { toLogin } from "@/api-requests/login";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/variable";
import instance from "@/service/axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const res = await instance.post("/products/add", body);
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
