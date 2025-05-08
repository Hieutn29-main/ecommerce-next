import { toLogin } from "@/api-requests/login";
import { ACCESS_TOKEN } from "@/constants/variable";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        { message: "No request body provided" },
        { status: 400 }
      );
    }

    const res = await toLogin(body);

    if (!res?.data) {
      return NextResponse.json(
        { message: "No data returned from login API" },
        { status: 500 }
      );
    }

    const accessToken = res?.data?.accessToken;
    if (accessToken) {
      const response = NextResponse.json(res?.data);

      response.cookies.set(ACCESS_TOKEN, accessToken, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });

      return response;
    } else {
      return NextResponse.json(
        { message: "No access token received from login API" },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("Error during POST request:", error);

    if (error.response) {
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
