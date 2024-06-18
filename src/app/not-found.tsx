import { LeftArrowIcon } from '@/components/icons/LeftArrowIcon'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='w-full h-[calc(100vh-100px)] flex justify-center items-center'>
			<div className='flex flex-col items-center'>
				<h2 className='font-bold text-5xl'>
					Ups, no encontramos lo que buscabas
				</h2>
				<p className='my-8'>
					Puedes usar el buscador para encontrar lo que necesitas o volver a la
					página principal.
				</p>
				<Link
					href='/'
					className='flex items-center gap-1 bg-PRIMARY text-white py-2 px-4 rounded-3xl text-sm hover:underline'
				>
					<LeftArrowIcon className='w-[16px] fill-TEXT_BLACK' /> Volver al
					inicio
				</Link>
			</div>
		</div>
	)
}
