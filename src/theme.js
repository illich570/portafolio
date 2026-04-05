import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const theme = createTheme({
	palette: {
		primary: {
			main: '#860000',
		},
		secondary: {
			main: '#19857b',
		},
		error: {
			main: red.A400,
		},
		background: {
			default: '#fff',
		},
		text: {
			primary: '#000000',
			secondary: '#fff',
		},
	},
	typography: {
		fontFamily: 'var(--font-poppins), sans-serif',
	},
})

export default theme
