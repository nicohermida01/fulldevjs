import { AppLogo } from './AppLogo'
import { LoginButton } from './LoginButton'
import { RegisterButton } from './RegisterButton'

export function Topbar() {
	return (
		<header className='w-full bg-white py-2 shadow-sm'>
			<div className='w-full max-w-app mx-auto flex justify-between px-10'>
				<AppLogo />

				{/* <div className='flex gap-2'>
					<LoginButton />
					<RegisterButton />
				</div> */}
			</div>
		</header>
	)
}
