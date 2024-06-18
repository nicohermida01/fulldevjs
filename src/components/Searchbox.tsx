'use client'

import { FormEventHandler, useState } from 'react'
import { SearchIcon } from './icons/SearchIcon'
import { useRouter } from 'next/navigation'

export function Searchbox() {
	const router = useRouter()

	const [inputValue, setInputValue] = useState<string>('')

	const handleOnSubmit: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()

		setInputValue('')

		if (inputValue) {
			router.push(`/?search=${inputValue}`)
		}
	}

	return (
		<form className='flex items-center' onSubmit={handleOnSubmit}>
			<div className='w-[400px] h-[40px] rounded-tl-md rounded-bl-md overflow-hidden py-2 px-4 bg-BG_GRAY1'>
				<input
					type='search'
					placeholder='Buscar: Ultimas tecnologias, JavaScript, ...'
					className='w-full h-full focus:outline-none bg-transparent'
					value={inputValue}
					onChange={({ target }) => setInputValue(target.value)}
				/>
			</div>

			<button className='bg-BG_GRAY1 h-full px-[10px] rounded-tr-md rounded-br-md hover:bg-BG_GRAY1_HOVER transition-all'>
				<SearchIcon className='w-[20px] stroke-TEXT_BLACK' />
			</button>
		</form>
	)
}
