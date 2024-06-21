import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type ArticlePreviewProps = {
	title: string
	description: string
	lastUpdate: string
	image: StaticImageData
	url: string
}

export function ArticlePreview({
	title,
	description,
	lastUpdate,
	image,
	url,
}: ArticlePreviewProps) {
	return (
		<Link href={url}>
			<div className='w-[300px] h-max bg-white rounded-xl article-preview cursor-pointer overflow-hidden'>
				<Image
					src={image}
					alt='Imagen del articulo'
					className='w-full h-auto'
				/>

				<div className='w-full px-6 py-3'>
					<h3 className='font-semibold italic text-lg'>{title}</h3>
					<p className='my-2'>{description}</p>
					<span className='text-TEXT_GRAY_SECONDARY'>{lastUpdate}</span>
				</div>
			</div>
		</Link>
	)
}
