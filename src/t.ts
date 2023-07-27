import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //return NextResponse.redirect(new URL('/home', request.url))

  if(request.url.includes('/api/')){
    
  }
  console.log("Middleware")
  console.log(request.method)
  console.log(request.url)

  const origin = request.headers.get('origin')
  console.log(origin)

  
  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
}
