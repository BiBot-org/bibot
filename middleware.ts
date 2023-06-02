import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

export const config = { matcher: ["/login"] };

export async function middleware(req: NextRequest) {
  const session = await getToken({ req });
  const { pathname } = req.nextUrl;
  if (pathname.startsWith("/login")) {
    if (session) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
}
