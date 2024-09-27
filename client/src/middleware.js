// middleware.js

import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = req.cookies.get('authToken');
  const { pathname } = req.nextUrl;

  const protectedPaths = ['/profile', '/dashboard', '/settings'];
  const isProtected = protectedPaths.some(path => pathname.startsWith(path));

  if (isProtected) {
    if (!token) {
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }
    const res = await fetch(`${process.env.NEXT_PUBLIC_PROD_API_URL}/auth/validate-token?token=${token.value}`);
    if (!res.ok) {
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
