import { articlePreview } from '@/ssot/content'
import Image from 'next/image'

export function ArticlePreview({
	title,
	image,
	imageAlt,
	date,
	description,
}: articlePreview) {
	return (
		<div className='w-[300px] h-max bg-white rounded-xl article-preview cursor-pointer'>
			<div className='w-full h-[150px] overflow-hidden rounded-tl-xl rounded-tr-xl'>
				<Image src={image} width={300} height={200} alt={imageAlt} />
			</div>
			<div className='w-full px-6 py-3'>
				<h3 className='font-semibold italic text-lg'>{title}</h3>
				<p className='my-2'>{description}</p>
				<span className='text-TEXT_GRAY_SECONDARY'>{date}</span>
			</div>
		</div>
	)
}
