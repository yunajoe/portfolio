import { NextResponse, type NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("accessToken");
  if (!accessToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}
export const config = {
  matcher: "/myportpolio/:path*",
};
