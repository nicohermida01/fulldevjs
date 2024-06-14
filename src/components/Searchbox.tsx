export function Searchbox() {
	return (
		<div className='w-[300px] h-[40px] border border-TEXT_GRAY_SECONDARY rounded-md overflow-hidden p-2'>
			<input
				type='search'
				placeholder='Buscar ...'
				className='w-full h-full focus:outline-none'
			/>
		</div>
	)
}
