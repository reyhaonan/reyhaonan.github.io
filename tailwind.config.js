const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontWeight: {
			bold: 400
		},
		colors: {
			black: '#010101',
			grey: '#1B1B1B',
			red: '#FF0000',
			white: '#FFFFFF',
			cyan: '#2EF8F8',
			yellow: '#FEFA2C'
		},
		fontSize: {
			42: ['2.625rem', { lineHeight: '3.15rem' }],
			34: ['2.125rem', { lineHeight: '2.55rem' }],
			30: ['2rem', { lineHeight: '2rem' }],
			28: ['1.75rem', { lineHeight: '2.1rem' }],
			24: ['1.5rem', { lineHeight: '2rem' }],
			20: ['1.25rem', { lineHeight: '1.5rem' }],
			18: ['1.125rem', { lineHeight: '1.375rem' }],
			16: ['1rem', { lineHeight: '1.5rem' }],
			14: ['0.875rem', { lineHeight: '1.25rem' }],
			12: ['0.75rem', { lineHeight: '1.125rem' }],
			11: ['0.688rem', { lineHeight: '1rem' }],
			10: ['0.625rem', { lineHeight: '0.875rem' }]
		},
		fontFamily: {
			sans: ['Arsenal SC', 'sans-serif'],
			noto: ['Noto Sans', 'sans-serif']
		},
		extend: {
			spacing: {
				2.5: '0.625rem',
				18: '4.5rem',
				22: '5.5rem',
				34: '8.5rem',
				97: '24.25rem',
				98: '24.5rem',
				99: '24.75rem',
				100: '25rem',
				112: '28rem',
				121: '30.25rem',
				133: '33.25rem',
				144: '36rem',
				150: '38rem',
				154: '38.5rem',
				160: '40rem',
				194: '48.5rem',
				198: '49.5rem',
				240: '60rem',
				'1/2': '50%',
				'1/3': '33.333333%',
				'2/3': '66.666667%',
				'1/4': '25%',
				'2/4': '50%',
				'3/4': '75%',
				'1/5': '20%',
				'2/5': '40%',
				'3/5': '60%',
				'4/5': '80%',
				'1/6': '16.666667%',
				'2/6': '33.333333%',
				'3/6': '50%',
				'4/6': '66.666667%',
				'5/6': '83.333333%',
				'1/12': '8.333333%',
				'2/12': '16.666667%',
				'3/12': '25%',
				'4/12': '33.333333%',
				'5/12': '41.666667%',
				'6/12': '50%',
				'7/12': '58.333333%',
				'8/12': '66.666667%',
				'9/12': '75%',
				'10/12': '83.333333%',
				'11/12': '91.666667%',
				'55/100': '55%',
				'45/100': '45%'
			}
		}
	},
	corePlugins: {
		container: false
	},
	plugins: [
		({ addComponents }) =>
			addComponents({
				'.flex-center': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				},
				'.absolute-center': {
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%,-50%)'
				},
				'.card': {
					boxShadow: '0px 1px 6px rgba(49, 53, 59, 0.25)',
					borderRadius: '8px'
				},
				'.list-alpha': {
					listStyleType: 'lower-alpha'
				}
			})

		// And so on
	]
};
