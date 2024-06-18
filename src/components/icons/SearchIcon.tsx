import { SVGProps } from 'react'

export function SearchIcon(props: SVGProps<SVGElement>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			{...props}
		>
			<path
				stroke='currentColor'
				strokeLinecap='round'
				strokeLinejoin='round'
				strokeWidth='2'
				d='M16.672 16.641L21 21m-2-10a8 8 0 11-16 0 8 8 0 0116 0z'
			></path>
		</svg>
	)
}
