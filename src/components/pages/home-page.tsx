'use client'

import { contentList } from '@/ssot/content'
import { Heading } from '../Heading'
import { ArticlePreview } from '../ArticlePreview'
import { useSearchboxStore } from '@/providers/searchbox-store-provider'

export function HomePage() {
	const { input } = useSearchboxStore(state => state)

	return (
		<>
			<Heading />
			<div>
				<h2 className='text-2xl font-bold my-12 text-TEXT_BLACK'>
					Contenido destacado
				</h2>

				<p>
					Search value: <span className='text-red-500 font-bold'>{input}</span>
				</p>

				<div className='flex flex-wrap  gap-8'>
					{contentList.map((article, index) => (
						<ArticlePreview key={index} {...article} />
					))}
				</div>
			</div>
		</>
	)
}
