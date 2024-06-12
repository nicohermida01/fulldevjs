import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			maxWidth: {
				app: '1300px',
			},
			colors: {
				PRIMARY: '#7001FF',
				PRIMARY_GHOST: '#F2E9FF',

				TEXT_BLACK: '#333',
				TEXT_GRAY_SECONDARY: '#bbb',
			},
		},
	},
	plugins: [],
}
export default config
