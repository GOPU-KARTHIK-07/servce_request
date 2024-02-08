import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // Example: Add a custom headerreturn Next
    return NextResponse.redirect(new URL("/login",request.url))
  // Example: Return a simple response
  
}

export const config = {
    matcher: "/dashboard",
  };
  