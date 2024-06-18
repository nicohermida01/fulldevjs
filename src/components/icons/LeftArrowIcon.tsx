import { SVGProps } from 'react'

export function LeftArrowIcon(props: SVGProps<any>) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			{...props}
		>
			<path
				fill='currentColor'
				fillRule='evenodd'
				d='M11.707 4.293a1 1 0 010 1.414L6.414 11H20a1 1 0 110 2H6.414l5.293 5.293a1 1 0 01-1.414 1.414l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 0z'
				clipRule='evenodd'
			></path>
		</svg>
	)
}
