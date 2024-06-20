import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

import './globals.css'
import { PRIMARY_COLOR } from '../../tailwind.config'

import { Topbar } from '@/components/Topbar'
import { PageWrapper } from '@/components/PageWrapper'
import { Footer } from '@/components/Footer'

import { SearchboxStoreProvider } from '@/providers/searchbox-store-provider'

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Fulldevjs',
	description: 'A place for the developer',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<SearchboxStoreProvider>
					<NextTopLoader color={PRIMARY_COLOR} />
					<Topbar />
					<PageWrapper>{children}</PageWrapper>
					<Footer />
				</SearchboxStoreProvider>
			</body>
		</html>
	)
}
