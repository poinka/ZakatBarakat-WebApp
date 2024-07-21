import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { NextURL } from "next/dist/server/web/next-url";

export async function middleware(req: NextRequest) {
    const { pathname, searchParams } = new NextURL(req.url);
    const isAdminPath = pathname.startsWith('/admin');
    console.log(pathname);
    if (!isAdminPath) {
        return NextResponse.next();
    }

    const sessionToken = req.cookies.get('session_token');

    if (sessionToken) { // add normal session check
        return NextResponse.next();
    }

    const code = searchParams.get('code');
    const timestamp = searchParams.get('timestamp');
    const dataToHash = `${timestamp}${process.env.BOT_TOKEN}`;

    const encoder = new TextEncoder();
    const data = encoder.encode(dataToHash);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

    if (timestamp && code && hashHex == code) { // Generate code1 using the map from url parameters and compare code1 === code
        // Parameters are valid, set session and allow access
        const response = NextResponse.next();
        response.cookies.set('session_token', 'simple-session-token', {
            httpOnly: true,
            path: '/',
            secure: false, // Set to true for HTTPS
        });
        return response;
    }

  // Invalid parameters or no session, redirect to root
  return NextResponse.redirect(new URL('/', req.url))
}

// Define which paths to apply the middleware to
export const config = {
  matcher: ['/admin/:path*'], // Apply middleware to all /admin paths
};
