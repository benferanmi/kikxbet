// middleware.js

import { NextResponse } from 'next/server';

export function middleware(req) {
  const token = req.cookies.get('authToken');
  const { pathname } = req.nextUrl;
  // Paths that require redirect if user is logged in
  const protectedPaths = ['/auth/login', '/auth/signup', '/auth/forgot-password'];
  const shouldRedirect = protectedPaths.some(path => pathname.startsWith(path));

  // Allow APIs, static files, and images to pass
  const regex = new RegExp('^/((?!api|_next/static|_next/image|favicon.ico).*)$');

  if (token && shouldRedirect && regex.test(req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

// Match all routes except those starting with /api, /_next/static, /_next/image, and favicon.ico
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
