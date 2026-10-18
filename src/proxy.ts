import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, isLocale } from "@/lib/i18n";

// Constant-time comparison so response timing does not reveal how much of the password matched
const safeEqual = (a: string, b: string) => {
  let diff = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  }
  return diff === 0;
};

// /ai is internal. shortcut: one shared user/password (AI_USER, AI_PASSWORD in Vercel), move to per-person
// Google login (Auth.js + email allowlist) when the team grows. Without both variables it stays closed.
function isAuthorized(request: NextRequest): boolean {
  const user = process.env.AI_USER;
  const password = process.env.AI_PASSWORD;
  const header = request.headers.get("authorization");
  if (!user || !password || !header?.startsWith("Basic ")) return false;

  let decoded: string;
  try {
    decoded = atob(header.slice(6));
  } catch {
    return false;
  }
  const separator = decoded.indexOf(":");
  if (separator < 0) return false;
  return safeEqual(decoded.slice(0, separator), user) && safeEqual(decoded.slice(separator + 1), password);
}

// "/" -> the visitor's language (Accept-Language lists them in order of preference)
function preferredLocale(request: NextRequest): string {
  const languages = request.headers.get("accept-language")?.toLowerCase().split(",") ?? [];
  return languages.map((l) => l.trim().slice(0, 2)).find(isLocale) ?? DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL(`/${preferredLocale(request)}`, request.url));
  }

  if (!isAuthorized(request)) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Kubsei internal", charset="UTF-8"', "Cache-Control": "no-store" },
    });
  }
  const response = NextResponse.next();
  response.headers.set("Cache-Control", "private, no-store");
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

export const config = {
  matcher: ["/", "/ai", "/ai/:path*"],
};
