import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/variable";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  cookies().delete(ACCESS_TOKEN);
  cookies().delete(REFRESH_TOKEN);
  return NextResponse.json({ message: "logout thanh cong" }, { status: 200 });
}
