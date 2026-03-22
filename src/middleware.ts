import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')
  
  if (isAdminRoute && request.nextUrl.pathname !== '/admin/login') {
    const adminToken = request.cookies.get('admin_token')
    
    // Check if the cookie exists and has the right value.
    // In a real app, this should be a JWT or an encrypted session,
    // but a simple static token suffices for a personal portfolio back-office.
    if (!adminToken || adminToken.value !== 'authenticated') {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  // Redirect /admin to /admin/projects by default
  if (request.nextUrl.pathname === '/admin') {
    return NextResponse.redirect(new URL('/admin/projects', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
