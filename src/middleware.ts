// /app/middleware.ts
import { ACCESS_TOKEN } from "@/constants/variable";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// Middleware kiểm tra token
export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get(ACCESS_TOKEN)?.value;
  const isLoginPage = request.nextUrl.pathname === "/login"; // Kiểm tra xem trang hiện tại có phải là /login hay không

  // Nếu không có token và không phải trang login, chuyển hướng về trang login
  if (!accessToken && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", request.url)); // Redirect về /login nếu không có token
  }
  if (accessToken && isLoginPage) {
    return NextResponse.redirect(new URL("/admin", request.url)); // Redirect về /login nếu không có token
  }

  // Nếu có token hoặc đang ở trang login, cho phép tiếp tục
  return NextResponse.next();
}

// Áp dụng middleware cho tất cả các route, trừ /login
export const config = {
  matcher: ["/login", "/admin/:path*"],
};
