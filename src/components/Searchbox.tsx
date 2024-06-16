'use client'

import { useSearchboxStore } from '@/providers/searchbox-store-provider'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

export function Searchbox() {
	const { changeInput } = useSearchboxStore(state => state)

	const [inputValue, setInputValue] = useState<string>('')

	const [debouncedValue] = useDebounce(inputValue, 1000)

	useEffect(() => {
		changeInput(debouncedValue)
	}, [debouncedValue])

	return (
		<div className='w-[300px] h-[40px] border border-TEXT_GRAY_SECONDARY rounded-md overflow-hidden p-2'>
			<input
				type='search'
				placeholder='Buscar ...'
				className='w-full h-full focus:outline-none'
				value={inputValue}
				onChange={({ target }) => setInputValue(target.value)}
			/>
		</div>
	)
}
