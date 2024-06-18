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
				app: '1400px',
			},
			colors: {
				PRIMARY: '#7001FF',
				PRIMARY_GHOST: '#F2E9FF',

				BG_GRAY1: '#eff2fb',
				BG_GRAY1_HOVER: '#e1e3ea',

				TEXT_BLACK: '#333',
				TEXT_GRAY_SECONDARY: '#b6bbc4',
			},
		},
	},
	plugins: [],
}
export default config
