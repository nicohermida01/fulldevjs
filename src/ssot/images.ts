import { StaticImageData } from 'next/image'
import post1Image from './assets/images/porque-estudiar-programacion.jpg'
import post2Image from './assets/images/post2.jpg'
import post3Image from './assets/images/post3.jpg'
import post4Image from './assets/images/post4.jpg'
import post5Image from './assets/images/post5.jpg'
import post6Image from './assets/images/post6.jpg'

type ImagesData = {
	[key: number]: StaticImageData
}

export const images: ImagesData = {
	1: post1Image,
	2: post2Image,
	3: post3Image,
	4: post4Image,
	5: post5Image,
	6: post6Image,
}
