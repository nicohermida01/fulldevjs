import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { Topbar } from '@/components/Topbar'

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
				<Topbar />
				{children}
			</body>
		</html>
	)
}
