import { AppLogo } from './AppLogo'

export function Heading() {
	return (
		<div className='w-full min-h-[60vh] relative flex flex-col justify-center items-center'>
			<div className='w-[1000px] h-[600px] absolute -z-10 heading-gradient'></div>
			<AppLogo height={130} width={500} />

			<h1 className='text-2xl font-bold text-center mt-6'>
				Conocimientos para programadores en cada click.
			</h1>
		</div>
	)
}
