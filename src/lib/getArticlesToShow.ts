import 'server-only'

import { Article, articlesDB, latestContent } from '@/ssot/articles-db'

export const getArticlesToShow = (input?: string): Article[] => {
	if (input) {
		return articlesDB.filter(
			a =>
				a.title.toLowerCase().includes(input.toLowerCase()) ||
				a.labelList.join(' ').toLowerCase().includes(input.toLowerCase())
		)
	}

	return latestContent
}
