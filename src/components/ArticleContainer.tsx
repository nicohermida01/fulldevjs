import { ArticleHeader } from '@/components/ArticleHeader'
import { ArticlePaper } from '@/components/ArticlePaper'
import { Article } from '@/ssot/articles-db'
import { ArticleNav } from './ArticleNav'
import { ArticleSection } from './ArticleSection'

type ArticleContainerProps = {
	article: Article
}

export function ArticleContainer({ article }: ArticleContainerProps) {
	return (
		<div className='py-[80px]'>
			<ArticleNav
				sections={['section1', 'section2', 'section3', 'section4', 'section5']}
			/>

			<div className=' flex justify-end'>
				<ArticlePaper>
					<ArticleHeader
						title={article.title}
						description={article.description}
						lastUpdate={article.date}
						imgSrc={article.image}
						labelList={article.labelList}
					/>

					<div className='flex flex-col gap-[40px]'>
						<ArticleSection id='section1' title='Subtitulo 1'>
							<p>
								Esse adipisicing minim magna adipisicing nostrud adipisicing
								nisi Lorem fugiat nisi cupidatat. Minim aute esse irure
								cupidatat consequat sit laboris cupidatat amet minim. Dolore
								minim irure et eiusmod excepteur consectetur. Veniam
								reprehenderit est ut nostrud magna est aliquip eu consectetur
								aliqua officia ut. Ullamco sint amet cillum magna quis sint
								laborum Lorem. Anim mollit proident esse voluptate non nostrud
								labore incididunt nulla. Id reprehenderit officia excepteur
								incididunt. Aute pariatur aliquip ad sit exercitation anim
								eiusmod pariatur reprehenderit. Aliqua laborum occaecat laborum
								et proident mollit nisi laborum occaecat. Laborum excepteur eu
								commodo occaecat anim consectetur culpa nostrud. Eu irure eu
								ullamco tempor ea culpa nisi in. Nulla deserunt aliqua pariatur
								ex magna nisi veniam proident ex minim ipsum commodo. Nostrud
								quis duis proident irure pariatur. Exercitation ea pariatur
								occaecat nisi excepteur aliqua pariatur deserunt qui. Veniam
								minim anim nulla pariatur. Veniam enim consectetur in sunt
								aliquip laboris sint consequat nulla ut et. Mollit duis deserunt
								sint Lorem dolor elit excepteur culpa id duis. Do esse dolore
								aliqua labore excepteur culpa do anim consectetur amet. Commodo
								voluptate mollit excepteur cillum cupidatat minim minim magna.
								Ad cupidatat aliqua officia mollit aute in duis nulla eiusmod.
							</p>
						</ArticleSection>

						<ArticleSection id='section2' title='Subtitulo 2'>
							<p>
								Esse adipisicing minim magna adipisicing nostrud adipisicing
								nisi Lorem fugiat nisi cupidatat. Minim aute esse irure
								cupidatat consequat sit laboris cupidatat amet minim. Dolore
								minim irure et eiusmod excepteur consectetur. Veniam
								reprehenderit est ut nostrud magna est aliquip eu consectetur
								aliqua officia ut. Ullamco sint amet cillum magna quis sint
								laborum Lorem. Anim mollit proident esse voluptate non nostrud
								labore incididunt nulla. Id reprehenderit officia excepteur
								incididunt. Aute pariatur aliquip ad sit exercitation anim
								eiusmod pariatur reprehenderit. Aliqua laborum occaecat laborum
								et proident mollit nisi laborum occaecat. Laborum excepteur eu
								commodo occaecat anim consectetur culpa nostrud. Eu irure eu
								ullamco tempor ea culpa nisi in. Nulla deserunt aliqua pariatur
								ex magna nisi veniam proident ex minim ipsum commodo. Nostrud
								quis duis proident irure pariatur. Exercitation ea pariatur
								occaecat nisi excepteur aliqua pariatur deserunt qui. Veniam
								minim anim nulla pariatur. Veniam enim consectetur in sunt
								aliquip laboris sint consequat nulla ut et. Mollit duis deserunt
								sint Lorem dolor elit excepteur culpa id duis. Do esse dolore
								aliqua labore excepteur culpa do anim consectetur amet. Commodo
								voluptate mollit excepteur cillum cupidatat minim minim magna.
								Ad cupidatat aliqua officia mollit aute in duis nulla eiusmod.
							</p>
						</ArticleSection>

						<ArticleSection id='section3' title='Subtitulo 3'>
							<p>
								Esse adipisicing minim magna adipisicing nostrud adipisicing
								nisi Lorem fugiat nisi cupidatat. Minim aute esse irure
								cupidatat consequat sit laboris cupidatat amet minim. Dolore
								minim irure et eiusmod excepteur consectetur. Veniam
								reprehenderit est ut nostrud magna est aliquip eu consectetur
								aliqua officia ut. Ullamco sint amet cillum magna quis sint
								laborum Lorem. Anim mollit proident esse voluptate non nostrud
								labore incididunt nulla. Id reprehenderit officia excepteur
								incididunt. Aute pariatur aliquip ad sit exercitation anim
								eiusmod pariatur reprehenderit. Aliqua laborum occaecat laborum
								et proident mollit nisi laborum occaecat. Laborum excepteur eu
								commodo occaecat anim consectetur culpa nostrud. Eu irure eu
								ullamco tempor ea culpa nisi in. Nulla deserunt aliqua pariatur
								ex magna nisi veniam proident ex minim ipsum commodo. Nostrud
								quis duis proident irure pariatur. Exercitation ea pariatur
								occaecat nisi excepteur aliqua pariatur deserunt qui. Veniam
								minim anim nulla pariatur. Veniam enim consectetur in sunt
								aliquip laboris sint consequat nulla ut et. Mollit duis deserunt
								sint Lorem dolor elit excepteur culpa id duis. Do esse dolore
								aliqua labore excepteur culpa do anim consectetur amet. Commodo
								voluptate mollit excepteur cillum cupidatat minim minim magna.
								Ad cupidatat aliqua officia mollit aute in duis nulla eiusmod.
							</p>
						</ArticleSection>

						<ArticleSection id='section4' title='Subtitulo 4'>
							<p>
								Esse adipisicing minim magna adipisicing nostrud adipisicing
								nisi Lorem fugiat nisi cupidatat. Minim aute esse irure
								cupidatat consequat sit laboris cupidatat amet minim. Dolore
								minim irure et eiusmod excepteur consectetur. Veniam
								reprehenderit est ut nostrud magna est aliquip eu consectetur
								aliqua officia ut. Ullamco sint amet cillum magna quis sint
								laborum Lorem. Anim mollit proident esse voluptate non nostrud
								labore incididunt nulla. Id reprehenderit officia excepteur
								incididunt. Aute pariatur aliquip ad sit exercitation anim
								eiusmod pariatur reprehenderit. Aliqua laborum occaecat laborum
								et proident mollit nisi laborum occaecat. Laborum excepteur eu
								commodo occaecat anim consectetur culpa nostrud. Eu irure eu
								ullamco tempor ea culpa nisi in. Nulla deserunt aliqua pariatur
								ex magna nisi veniam proident ex minim ipsum commodo. Nostrud
								quis duis proident irure pariatur. Exercitation ea pariatur
								occaecat nisi excepteur aliqua pariatur deserunt qui. Veniam
								minim anim nulla pariatur. Veniam enim consectetur in sunt
								aliquip laboris sint consequat nulla ut et. Mollit duis deserunt
								sint Lorem dolor elit excepteur culpa id duis. Do esse dolore
								aliqua labore excepteur culpa do anim consectetur amet. Commodo
								voluptate mollit excepteur cillum cupidatat minim minim magna.
								Ad cupidatat aliqua officia mollit aute in duis nulla eiusmod.
							</p>
						</ArticleSection>

						<ArticleSection id='section5' title='Subtitulo 5'>
							<p>
								Esse adipisicing minim magna adipisicing nostrud adipisicing
								nisi Lorem fugiat nisi cupidatat. Minim aute esse irure
								cupidatat consequat sit laboris cupidatat amet minim. Dolore
								minim irure et eiusmod excepteur consectetur. Veniam
								reprehenderit est ut nostrud magna est aliquip eu consectetur
								aliqua officia ut. Ullamco sint amet cillum magna quis sint
								laborum Lorem. Anim mollit proident esse voluptate non nostrud
								labore incididunt nulla. Id reprehenderit officia excepteur
								incididunt. Aute pariatur aliquip ad sit exercitation anim
								eiusmod pariatur reprehenderit. Aliqua laborum occaecat laborum
								et proident mollit nisi laborum occaecat. Laborum excepteur eu
								commodo occaecat anim consectetur culpa nostrud. Eu irure eu
								ullamco tempor ea culpa nisi in. Nulla deserunt aliqua pariatur
								ex magna nisi veniam proident ex minim ipsum commodo. Nostrud
								quis duis proident irure pariatur. Exercitation ea pariatur
								occaecat nisi excepteur aliqua pariatur deserunt qui. Veniam
								minim anim nulla pariatur. Veniam enim consectetur in sunt
								aliquip laboris sint consequat nulla ut et. Mollit duis deserunt
								sint Lorem dolor elit excepteur culpa id duis. Do esse dolore
								aliqua labore excepteur culpa do anim consectetur amet. Commodo
								voluptate mollit excepteur cillum cupidatat minim minim magna.
								Ad cupidatat aliqua officia mollit aute in duis nulla eiusmod.
							</p>
						</ArticleSection>
					</div>
				</ArticlePaper>
			</div>
		</div>
	)
}
