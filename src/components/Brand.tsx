import { AppLogo } from './AppLogo'

type BrandProps = {
	isHeading?: boolean
	logoHeight: number
	logoWidth: number
}

const slogan = 'Conocimientos para programadores en cada click.'

export function Brand({ isHeading, logoHeight, logoWidth }: BrandProps) {
	return (
		<div className='flex flex-col justify-center items-center'>
			<AppLogo height={logoHeight} width={logoWidth} />

			{isHeading ? (
				<h1 className='text-2xl font-bold text-center mt-6'>{slogan}</h1>
			) : (
				<p className='mt-2 text-sm text-center'>{slogan}</p>
			)}
		</div>
	)
}
