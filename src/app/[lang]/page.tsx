import { HomePage } from '@/components/pages/home-page'
import { getArticlesToShow } from '@/lib/getArticlesToShow'

export const dynamic = 'force-dynamic'

type HomePageProps = {
	searchParams: {
		search: string
	}
}

export default function Home({ searchParams }: HomePageProps) {
	const { search } = searchParams

	const articlesToShow = getArticlesToShow(search)

	return <HomePage articles={articlesToShow} />
}
