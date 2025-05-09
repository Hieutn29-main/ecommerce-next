import { toGetAllProducts } from "@/api-requests/products";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(
    { message: "An 2213123unexpected error occurred" },
    { status: 500 }
  );
}
