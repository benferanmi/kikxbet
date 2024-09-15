// middleware.js

import { NextResponse } from 'next/server';

export async function middleware(req) {
  const token = req.cookies.get('authToken');
  const { pathname } = req.nextUrl;
  // Paths that require redirect if user is not logged in
  const publicPaths = ['/auth/login', '/auth/signup', '/auth/forgot-password'];
  const shouldProtect = !publicPaths.some(path => pathname.startsWith(path));

  // Allow APIs, static files, and images to pass
  const regex = new RegExp('^/((?!api|_next/static|_next/image|favicon.ico).*)$');

  if (!pathname.startsWith('/profile')) {
    return NextResponse.next();
  }
  if (token && publicPaths.some(path => pathname.startsWith(path))) {
    return NextResponse.redirect(new URL('/profile', req.url));
  }

  if (shouldProtect && regex.test(req.nextUrl.pathname)) {
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

// Match all routes except those starting with /api, /_next/static, /_next/image, and favicon.ico
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
