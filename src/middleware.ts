import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const publicRoutes = ['/login', '/sign-up']

export default async function middleware(req: NextRequest) {
   const path = req.nextUrl.pathname
   const isPublicRoute = publicRoutes.includes(path)
   const token = cookies().get('_session')?.value

   if (isPublicRoute && token) {
      return NextResponse.redirect(new URL('/', req.nextUrl))
   }
   return NextResponse.next()
}
export const config = {
   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
