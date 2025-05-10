import { toSearchProducts } from "@/api-requests/products/search";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const paramsObj: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      paramsObj[key] = value;
    });

    const res = await toSearchProducts(paramsObj);
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
