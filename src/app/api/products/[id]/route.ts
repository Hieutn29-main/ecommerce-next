import { toGetAllProducts, toGetProductsDetail } from "@/api-requests/products";
import {
  toGetAllCategories,
  toGetProductsByCategories,
} from "@/api-requests/products/categories";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const res = await toGetProductsDetail(id);
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
