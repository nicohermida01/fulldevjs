'use client'

import Link from 'next/link'
import { RightArrowIcon } from './icons/RightArrowIcon'
import Scrollspy from 'react-scrollspy'
import { useState } from 'react'

type NavItemProps = {
	text: string
	id: string
	isActive: boolean
}

const NavItem = ({ text, id, isActive }: NavItemProps) => {
	return (
		<li
			className={`py-1 px-3 ${
				isActive && 'bg-BG_GRAY2_HOVER'
			} hover:bg-BG_GRAY2_HOVER transition-all rounded`}
		>
			<Link href={`#${id}`} className='flex items-center gap-1'>
				<RightArrowIcon className='stroke-TEXT_BLACK w-[18px]' /> {text}
			</Link>
		</li>
	)
}

type ArticleNavProps = {
	sections: string[]
}

export function ArticleNav({ sections }: ArticleNavProps) {
	const [sectionActive, setSectionActive] = useState<string>(sections[0])

	const handleUpdateSpy = (item: HTMLElement) => {
		setSectionActive(item.id)
	}

	return (
		<nav className='w-[300px] block fixed'>
			<h4 className='font-bold'>Contenido</h4>
			<Scrollspy
				items={sections}
				currentClassName=''
				onUpdate={handleUpdateSpy}
				offset={-200}
			>
				<NavItem
					text='Subtitulo 1'
					id='section1'
					isActive={sectionActive === 'section1'}
				/>
				<NavItem
					text='Subtitulo 2'
					id='section2'
					isActive={sectionActive === 'section2'}
				/>
				<NavItem
					text='Subtitulo 3'
					id='section3'
					isActive={sectionActive === 'section3'}
				/>
				<NavItem
					text='Subtitulo 4'
					id='section4'
					isActive={sectionActive === 'section4'}
				/>
				<NavItem
					text='Subtitulo 5'
					id='section5'
					isActive={sectionActive === 'section5'}
				/>
			</Scrollspy>
		</nav>
	)
}
