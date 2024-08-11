/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		container: {
			center: true,
		},
		extend: {
			colors: {
				brightRed: 'hsl(12,88%,59%)',
				creamPrimary: 'hsl(30, 38%, 92%)',
				gold: '#edc00dba',
				darkGold: '#8a7f0427',
			},
		},
	},
	plugins: [],
}
