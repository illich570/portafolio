import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { notFound } from 'next/navigation'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import Providers from '@/components/Providers'
import '@/app/globals.css'

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	minimumScale: 1,
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }) {
	const { locale } = await params
	if (!routing.locales.includes(locale)) {
		notFound()
	}
	setRequestLocale(locale)

	const messages = await getMessages()

	return (
		<html lang={locale}>
			<head>
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" sizes="32x32" type="image/png" href="/favicon-32x32.png" />
				<link rel="icon" sizes="16x16" type="image/png" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<meta name="msapplication-TileColor" content="#860000" />
				<meta name="apple-mobile-web-app-title" content="Illich Rada | Fullstack Developer" />
				<meta name="application-name" content="Illich Rada | Fullstack Developer" />
				<meta content="https://www.illichrada.com/og_image.png" name="image" />
				<link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
				<link
					href="https://fonts.googleapis.com/css2?family=Alegreya:wght@500&family=Poppins:wght@500&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					<Providers locale={locale} messages={messages}>
						{children}
					</Providers>
				</AppRouterCacheProvider>
			</body>
		</html>
	)
}
