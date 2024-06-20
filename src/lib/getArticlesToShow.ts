import { Article, articlesDB, latestContent } from '@/ssot/articles-db'
import { LabelList } from '@/ssot/labels'

export const getArticlesToShow = (input?: string): Article[] => {
	if (input) {
		return articlesDB.filter(
			a =>
				a.title.toLowerCase().includes(input.toLowerCase()) ||
				a.labelList
					.map(item => item.toLowerCase())
					.includes(input.toLowerCase())
		)
	}

	return latestContent
}
