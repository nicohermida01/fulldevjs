'use client'

import { Article } from '@/ssot/articles-db'
import { Heading } from '../Heading'
import { ArticlePreview } from '../ArticlePreview'

type HomePageProps = {
	articles: Article[]
}

export function HomePage({ articles }: HomePageProps) {
	return (
		<>
			<Heading />

			<div>
				<h2 className='text-2xl font-bold my-12 text-TEXT_BLACK'>
					Contenido destacado
				</h2>

				<div className='flex flex-wrap  gap-8'>
					{articles.map(article => (
						<ArticlePreview key={article.id} {...article} />
					))}
				</div>
			</div>
		</>
	)
}
