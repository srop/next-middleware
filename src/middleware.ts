import { NextResponse } from 'next/server'
import  { NextRequest } from 'next/server'
import { verifyAuth } from "./lib/auth"
import {projectRoutes} from "./constants/path"
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    //return NextResponse.redirect(new URL('/home', request.url))
    console.log('Middleware')
    const token = request.cookies.get('user-token')?.value
    // console.log(request)
    
    console.log(projectRoutes)
    console.log(request.nextUrl.pathname)
    if(projectRoutes.includes(request.nextUrl.pathname)){
        console.log("dfds",projectRoutes.includes(request.nextUrl.pathname))
      const verifiedToken =  await verifyAuth(token).catch((err)=>{
        console.log(err)
      })
      console.log("verifiedToken",verifiedToken)
    }
    //   if(!verifiedToken){
    //     return NextResponse.redirect(new URL('/', request.url))
    //   }
    return NextResponse.next()
}
