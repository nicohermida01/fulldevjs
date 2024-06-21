import { ArticleContainer } from '@/components/ArticleContainer'
import { getArticle } from '@/lib/getArticle'

export default function Post() {
	const article = getArticle(5)

	return <ArticleContainer article={article} />
}
