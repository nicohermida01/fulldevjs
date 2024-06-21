import { LabelList } from './labels'

export type Article = {
	id: number
	name: string // id in text
	title: string
	description: string
	date: string
	labelList: LabelList[]
}

export const defaultArticle: Article = {
	id: 0,
	name: 'undefined',
	date: 'undefined',
	description: 'undefined',
	title: 'undefined',
	labelList: [],
}

export const articlesDB: Article[] = [
	{
		id: 1,
		title: 'Porqué estudiar programación?',
		name: 'porque-estudiar-programacion',
		description:
			'Si estas interesado en el mundo de la informatica y la programacion, este articulo es para vos!',
		date: 'Junio 1, 2024',
		labelList: ['Programming'],
	},
	{
		id: 2,
		title: 'Aprende Javascript',
		description:
			'Te gusta el mundo del desarrollo web? Entonces tienes que saber Javascript',
		date: 'Junio 2, 2024',
		name: '#',
		labelList: ['Web Development', 'JavaScript'],
	},
	{
		id: 3,
		title: 'Aprende HTML',
		description: 'Crea la estructura de tu web con HTML',
		date: 'Junio 3, 2024',
		name: '#',
		labelList: ['HTML', 'Web Development'],
	},
	{
		id: 4,
		title: 'Aprende CSS',
		description: 'Dale estilo y vida a tu pagina web con CSS',
		date: 'Junio 4, 2024',
		name: '#',
		labelList: ['Web Development', 'CSS'],
	},
	{
		id: 5,
		title: 'Qué son las APIs?',
		description:
			'Aca te contamos cómo podes consumir datos de servicos de terceros!',
		date: 'Junio 6, 2024',
		name: 'que-son-las-apis',
		labelList: ['Programming', 'APIs'],
	},
	{
		id: 6,
		title: 'Para qué sirve Git?',
		description:
			'Una de las herramientas mas utilizadas y comunes a la hora de desarrollar codigo.',
		date: 'Junio 7, 2024',
		name: '#',
		labelList: ['Development Tools', 'Git'],
	},
]

export const latestContent =
	articlesDB.length < 11 ? articlesDB : articlesDB.slice(-10)
