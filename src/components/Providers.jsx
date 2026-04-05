'use client'

import { NextIntlClientProvider } from 'next-intl'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from '@/theme'

export default function Providers({ children, messages, locale }) {
	return (
		<NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</NextIntlClientProvider>
	)
}
