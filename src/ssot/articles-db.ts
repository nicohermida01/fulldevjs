import { LabelList } from './labels'

export type Article = {
	id: number
	title: string
	image: string
	description: string
	date: string
	pageUrl: string
	labelList: LabelList[]
}

export const defaultArticle: Article = {
	id: 0,
	date: 'undefined',
	description: 'undefined',
	image: 'undefined',
	pageUrl: 'undefined',
	title: 'undefined',
	labelList: [],
}

export const articlesDB: Article[] = [
	{
		id: 1,
		title: 'Porqué estudiar programación?',
		image: '/porque-estudiar-programacion.jpg',
		description:
			'Si estas interesado en el mundo de la informatica y la programacion, este articulo es para vos!',
		date: 'Junio 1, 2024',
		pageUrl: 'porque-estudiar-programacion',
		labelList: ['Programación', 'Conceptos de Programación'],
	},
	{
		id: 2,
		title: 'Aprende Javascript',
		image: '/post2.jpg',
		description:
			'Te gusta el mundo del desarrollo web? Entonces tienes que saber Javascript',
		date: 'Junio 2, 2024',
		pageUrl: '#',
		labelList: ['Programación Web', 'JavaScript'],
	},
	{
		id: 3,
		title: 'Aprende HTML',
		image: '/post3.jpg',
		description: 'Crea la estructura de tu web con HTML',
		date: 'Junio 3, 2024',
		pageUrl: '#',
		labelList: ['HTML', 'Programación Web'],
	},
	{
		id: 4,
		title: 'Aprende CSS',
		image: '/post4.jpg',
		description: 'Dale estilo y vida a tu pagina web con CSS',
		date: 'Junio 4, 2024',
		pageUrl: '#',
		labelList: ['Programación Web', 'CSS'],
	},
	{
		id: 5,
		title: 'Qué son las APIs?',
		image: '/post5.jpg',
		description:
			'Aca te contamos cómo podes consumir datos de servicos de terceros!',
		date: 'Junio 6, 2024',
		pageUrl: 'que-son-las-apis',
		labelList: ['Conceptos de Programación', 'APIs'],
	},
	{
		id: 6,
		title: 'Para qué sirve Git?',
		image: '/post6.jpg',
		description:
			'Una de las herramientas mas utilizadas y comunes a la hora de desarrollar codigo.',
		date: 'Junio 7, 2024',
		pageUrl: '#',
		labelList: ['Herramientas de Desarrollo', 'Git'],
	},
]

export const latestContent =
	articlesDB.length < 11 ? articlesDB : articlesDB.slice(-10)
