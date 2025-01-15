import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // if (process.env.NODE_ENV === "production"){
  //   if (request.nextUrl.pathname.startsWith('/rank')){
  //     return NextResponse.redirect(new URL('/', request.url))
  //   }
  // }
}
