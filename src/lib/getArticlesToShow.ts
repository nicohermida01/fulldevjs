import { Article, articlesDB, latestContent } from '@/ssot/articles-db'
import { LabelList } from '@/ssot/labels'

export const getArticlesToShow = (input?: string): Article[] => {
	if (input) {
		return articlesDB.filter(
			a => a.title.includes(input) || a.labelList.includes(input as LabelList)
		)
	}

	return latestContent
}
