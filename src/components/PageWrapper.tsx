import { PropsWithChildren } from 'react'

export function PageWrapper({ children }: PropsWithChildren) {
	return <section className='w-full max-w-app mx-auto p-10'>{children}</section>
}
