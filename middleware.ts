import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { updateSession } from './app/utils/middleware';

export async function middleware(request: NextRequest): Promise<NextResponse> {
	console.log('Middleware running for', request.nextUrl.pathname);
	// Step 1: refresh session and prepare response
	let response = await updateSession(request);

	// Step 2: create Supabase client tied to this request/response
	const supabase = createServerClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL!,
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
		{
			cookies: {
				getAll: () => request.cookies.getAll(),
				setAll: cookiesToSet => {
					cookiesToSet.forEach(({ name, value, options }) => {
						response.cookies.set(name, value, options);
					});
				},
			},
		}
	);

	// Step 3: check if user exists
	const {
		data: { user },
	} = await supabase.auth.getUser();

	const url = request.nextUrl;

	// Step 4a: redirect to /login if not logged in and accessing protected routes
	if (
		!user &&
		(url.pathname.startsWith('/time') ||
			url.pathname.startsWith('/add') ||
			url.pathname.startsWith('/account'))
	) {
		return NextResponse.redirect(new URL('/login', request.url));
	}

	// Step 4b: redirect logged-in users away from /login or /signup to /learn
	if (user && (url.pathname === '/login' || url.pathname === '/signup')) {
		return NextResponse.redirect(new URL('/learn', request.url));
	}
	return response;
}

export const config = {
	matcher: ['/time/:path*', '/add/:path*', '/account/:path*', '/login'], // run middleware only on these routes
};
