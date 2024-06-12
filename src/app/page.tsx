import { ArticlePreview } from '@/components/ArticlePreview'
import { PageWrapper } from '@/components/PageWrapper'
import { contentList } from '@/ssot/content'

export default function Home() {
	return (
		<PageWrapper>
			<h2 className='text-2xl font-bold my-8 text-TEXT_BLACK'>
				Contenido destacado
			</h2>
			<div className='flex flex-wrap gap-8'>
				{contentList.map((article, index) => (
					<ArticlePreview key={index} {...article} />
				))}
			</div>
		</PageWrapper>
	)
}
