import { SVGProps } from 'react'

export function RightArrowIcon(props: SVGProps<any>) {
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
				strokeWidth='1.5'
				d='M10 7l5 5-5 5'
			></path>
		</svg>
	)
}
