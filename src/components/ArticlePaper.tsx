import { PropsWithChildren } from 'react'

export function ArticlePaper({ children }: PropsWithChildren) {
	return (
		<div className='mt-[50px] p-[30px] min-h-[100vh] bg-white rounded-lg shadow'>
			{children}
		</div>
	)
}
