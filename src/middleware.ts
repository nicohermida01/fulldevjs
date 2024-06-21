import { NextRequest, NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

const locales = ['es-ES', 'en-US']

const getLocale = (request: NextRequest) => {
	let headers = { 'accept-language': 'es-ES,es;q=0.5' }
	let languages = new Negotiator({ headers }).languages()
	let defaultLocale = 'es-ES'

	return match(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
	// Check if there is any supported locale in the pathname (in locales array)
	const { pathname } = request.nextUrl
	const pathnameHasLocale = locales.some(
		locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	)

	if (pathnameHasLocale) return

	// Redirect if there is no locale
	const locale = getLocale(request)
	request.nextUrl.pathname = `/${locale}${pathname}`

	return NextResponse.redirect(request.nextUrl)
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		'/((?!_next).*)',
		// Optional: only run on root (/) URL
		// '/'
	],
}
