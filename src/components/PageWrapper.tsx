import { PropsWithChildren } from 'react'

export function PageWrapper({ children }: PropsWithChildren) {
	return <main className='w-full max-w-app mx-auto px-10'>{children}</main>
}
