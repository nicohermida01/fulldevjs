import Image, { StaticImageData } from 'next/image'

import { LabelList } from '@/ssot/labels'

type ArticleHeaderProps = {
	title: string
	description: string
	lastUpdate: string
	image: StaticImageData
	labelList: LabelList[]
}

export function ArticleHeader({
	title,
	description,
	lastUpdate,
	image,
	labelList,
}: ArticleHeaderProps) {
	return (
		<header className='w-full flex '>
			<div className='w-[50%]'>
				<h1 className='font-bold text-3xl'>{title}</h1>

				<p className='mt-2'>{description}</p>

				<p className='text-TEXT_GRAY_SECONDARY mt-6 mb-3'>
					Ultima actualización: <span>{lastUpdate}</span>
				</p>

				<ul className='flex flex-wrap gap-2'>
					{labelList.map((label, i) => (
						<li
							key={i}
							className='bg-BG_GRAY1 py-1 px-3 rounded-xl capitalize text-sm'
						>
							{label}
						</li>
					))}
				</ul>
			</div>

			<Image
				src={image}
				alt='Imagen del articulo'
				className='w-[50%] h-auto rounded-md'
			/>
		</header>
	)
}
