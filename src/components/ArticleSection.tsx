import { ReactNode } from 'react'

type ArticleSectionProps = {
	id: string
	title: string
	children: ReactNode
}

export function ArticleSection({ id, title, children }: ArticleSectionProps) {
	return (
		<section id={id}>
			<h3 className='font-bold text-xl mt-4'>{title}</h3>
			{children}
		</section>
	)
}
