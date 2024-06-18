import 'server-only'

import { Article, articlesDB, defaultArticle } from '@/ssot/articles-db'

export function getArticle(id: number): Article {
	return articlesDB.find(elem => elem.id === id) || defaultArticle
}
