import 'server-only'

import { StaticImageData } from 'next/image'

import { images } from '@/ssot/images'

export const getArticleImage = (id: number): StaticImageData => {
	return images[id]
}
