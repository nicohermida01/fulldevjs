import { Brand } from './Brand'

export function Footer() {
	return (
		<footer className='w-full bg-white py-[100px]'>
			<div className='w-full max-w-app mx-auto px-10'>
				<div className='flex items-center justify-around'>
					<Brand logoHeight={50} logoWidth={200} />

					<p className='w-[700px]'>
						Excepteur sunt do nulla consectetur voluptate culpa incididunt
						fugiat sint ex aliquip. Laborum aliqua aliquip pariatur qui laboris.
						Quis incididunt voluptate irure laboris culpa.
					</p>
				</div>

				<div className='border-t-[1px] border-BG_GRAY2 mt-[50px] pt-[20px] flex justify-center text-sm items-center '>
					@ Todos los derechos reservados.
				</div>
			</div>
		</footer>
	)
}
