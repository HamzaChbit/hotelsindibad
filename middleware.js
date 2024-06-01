import {  NextResponse } from 'next/server';
import { clerkMiddleware } from '@clerk/nextjs/server';
import createMiddleware from 'next-intl/middleware';

// Create the next-intl middleware with locale configurations
const intlMiddleware = createMiddleware({
  locales: ['en', 'fr'],
  defaultLocale: 'en'
});

// Compose middlewares
const combinedMiddleware = async (req) => {
  // Execute clerkMiddleware
  const clerkResponse = clerkMiddleware()(req);
  if (clerkResponse instanceof NextResponse) {
    return clerkResponse;
  }

  // Execute next-intl middleware
  const intlResponse = intlMiddleware(req);
  if (intlResponse instanceof NextResponse) {
    return intlResponse;
  }

  // Continue the request processing
  return NextResponse.next();
};

export default combinedMiddleware;

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/(en|fr)/:path*"
  ]
};
