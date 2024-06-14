import { AppLogo } from './AppLogo'
import { LoginButton } from './LoginButton'
import { RegisterButton } from './RegisterButton'
import { Searchbox } from './Searchbox'

export function Topbar() {
	return (
		<header className='w-full bg-white py-2 shadow-sm fixed z-10'>
			<div className='w-full max-w-app mx-auto flex justify-between px-10'>
				<AppLogo />

				<Searchbox />

				{/* <div className='flex gap-2'>
					<LoginButton />
					<RegisterButton />
				</div> */}
			</div>
		</header>
	)
}
