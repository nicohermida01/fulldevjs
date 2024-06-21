import { ArticlePreview } from '@/components/ArticlePreview'
import { Heading } from '@/components/Heading'

import { generateArticleURL } from '@/lib/generateArticleURL'
import { getArticleImage } from '@/lib/getArticleImage'
import { getArticlesToShow } from '@/lib/getArticlesToShow'

export const dynamic = 'force-dynamic'

type PageProps = {
	params: { slug: string; lang: string }
	searchParams: { [key: string]: string }
}

export default function Home({ searchParams, params: { lang } }: PageProps) {
	const { search } = searchParams

	const articlesToShow = getArticlesToShow(search)

	return (
		<>
			<Heading />

			<div className='pb-10'>
				<h2 className='text-2xl font-bold my-12 text-TEXT_BLACK'>
					Contenido destacado
				</h2>

				<div className='flex flex-wrap  gap-8'>
					{articlesToShow.map(article => (
						<ArticlePreview
							key={article.id}
							description={article.description}
							title={article.title}
							lastUpdate={article.date}
							url={generateArticleURL(lang, article.name)}
							image={getArticleImage(article.id)}
						/>
					))}
				</div>
			</div>
		</>
	)
}
