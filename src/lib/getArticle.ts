import { articlePreview, contentList, defaultArticle } from '@/ssot/content'

export function getArticle(id: number): articlePreview {
	return contentList.find(elem => elem.id === id) || defaultArticle
}
