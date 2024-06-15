export type articlePreview = {
	title: string
	image: string
	imageAlt: string
	description: string
	date: string
	link: string
}

export const contentList: articlePreview[] = [
	{
		title: 'Porqué estudiar programación?',
		image: '/post1.jpg',
		imageAlt: 'Imagen del post1',
		description:
			'Si estas interesado en el mundo de la informatica y la programacion, este articulo es para vos!',
		date: 'Junio 1, 2024',
		link: 'porque-estudiar-programacion',
	},
	{
		title: 'Aprende Javascript',
		image: '/post2.jpg',
		imageAlt: 'Imagen del post2',
		description:
			'Te gusta el mundo del desarrollo web? Entonces tienes que saber Javascript',
		date: 'Junio 2, 2024',
		link: '#',
	},
	{
		title: 'Aprende HTML',
		image: '/post3.jpg',
		imageAlt: 'Imagen del post3',
		description: 'Crea la estructura de tu web con HTML',
		date: 'Junio 3, 2024',
		link: '#',
	},
	{
		title: 'Aprende CSS',
		image: '/post4.jpg',
		imageAlt: 'imagen del post4',
		description: 'Dale estilo y vida a tu pagina web con CSS',
		date: 'Junio 4, 2024',
		link: '#',
	},
	{
		title: 'Qué son las APIs?',
		image: '/post5.jpg',
		imageAlt: 'Imagen del post5',
		description:
			'Aca te contamos cómo podes consumir datos de servicos de terceros!',
		date: 'Junio 6, 2024',
		link: 'que-son-las-apis',
	},
	{
		title: 'Para qué sirve Git?',
		image: '/post6.jpg',
		imageAlt: 'Imagen del post6',
		description:
			'Una de las herramientas mas utilizadas y comunes a la hora de desarrollar codigo.',
		date: 'Junio 7, 2024',
		link: '#',
	},
]
