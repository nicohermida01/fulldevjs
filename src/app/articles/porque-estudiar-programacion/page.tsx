import { ArticleHeader } from '@/components/ArticleHeader'
import { ArticlePaper } from '@/components/ArticlePaper'
import { getArticle } from '@/lib/getArticle'

export default function Post() {
	const article = getArticle(1)

	return (
		<ArticlePaper>
			<ArticleHeader
				title={article.title}
				description={article.description}
				lastUpdate={article.date}
				imgSrc={article.image}
				labelList={article.labelList}
			/>

			<h3 className='font-bold text-xl mt-4'>Subtitulo 1</h3>
			<p className='mt-4'>
				Esse adipisicing minim magna adipisicing nostrud adipisicing nisi Lorem
				fugiat nisi cupidatat. Minim aute esse irure cupidatat consequat sit
				laboris cupidatat amet minim. Dolore minim irure et eiusmod excepteur
				consectetur. Veniam reprehenderit est ut nostrud magna est aliquip eu
				consectetur aliqua officia ut. Ullamco sint amet cillum magna quis sint
				laborum Lorem. Anim mollit proident esse voluptate non nostrud labore
				incididunt nulla. Id reprehenderit officia excepteur incididunt. Aute
				pariatur aliquip ad sit exercitation anim eiusmod pariatur
				reprehenderit. Aliqua laborum occaecat laborum et proident mollit nisi
				laborum occaecat. Laborum excepteur eu commodo occaecat anim consectetur
				culpa nostrud. Eu irure eu ullamco tempor ea culpa nisi in. Nulla
				deserunt aliqua pariatur ex magna nisi veniam proident ex minim ipsum
				commodo. Nostrud quis duis proident irure pariatur. Exercitation ea
				pariatur occaecat nisi excepteur aliqua pariatur deserunt qui. Veniam
				minim anim nulla pariatur. Veniam enim consectetur in sunt aliquip
				laboris sint consequat nulla ut et. Mollit duis deserunt sint Lorem
				dolor elit excepteur culpa id duis. Do esse dolore aliqua labore
				excepteur culpa do anim consectetur amet. Commodo voluptate mollit
				excepteur cillum cupidatat minim minim magna. Ad cupidatat aliqua
				officia mollit aute in duis nulla eiusmod.
			</p>
		</ArticlePaper>
	)
}
