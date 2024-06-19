import { PropsWithChildren } from 'react'

export function ArticlePaper({ children }: PropsWithChildren) {
	return (
		<div className='p-[30px] w-[1000px] bg-white rounded-lg shadow'>
			{children}
		</div>
	)
}
