import { AppLogo } from './AppLogo'
import { Brand } from './Brand'

export function Heading() {
	return (
		<div className='w-full min-h-[60vh] relative flex items-center justify-center'>
			<div className='w-[1000px] h-[600px] absolute -z-10 heading-gradient'></div>

			<Brand isHeading={true} logoHeight={130} logoWidth={500} />
		</div>
	)
}
