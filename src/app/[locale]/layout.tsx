import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'
import { Alegreya, Poppins } from 'next/font/google'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { isSupportedLocale, routing } from '@/i18n/routing'
import Providers from '@/components/Providers'
import '@/app/globals.css'
import type { ReactNode } from 'react'

const alegreya = Alegreya({
	subsets: ['latin'],
	weight: '500',
	display: 'swap',
	variable: '--font-alegreya',
})

const poppins = Poppins({
	subsets: ['latin'],
	weight: '500',
	display: 'swap',
	variable: '--font-poppins',
})

export const viewport = {
	width: 'device-width',
	initialScale: 1,
	minimumScale: 1,
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: ReactNode
	params: Promise<{ locale: string }>
}) {
	const { locale } = await params
	if (!isSupportedLocale(locale)) {
		notFound()
	}
	setRequestLocale(locale)

	const messages = await getMessages()

	return (
		<html className={`${alegreya.variable} ${poppins.variable}`} lang={locale}>
			<head>
				<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
				<link href="/favicon.ico" rel="shortcut icon" />
				<link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
				<link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
				<link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
				<link href="/site.webmanifest" rel="manifest" />
				<meta content="#860000" name="msapplication-TileColor" />
				<meta content="Illich Rada | Fullstack Developer" name="apple-mobile-web-app-title" />
				<meta content="Illich Rada | Fullstack Developer" name="application-name" />
				<meta content="https://www.illichrada.com/og_image.png" name="image" />
			</head>
			<body>
				<NextIntlClientProvider locale={locale} messages={messages} timeZone="UTC">
					<AppRouterCacheProvider options={{ enableCssLayer: true }}>
						<Providers>{children}</Providers>
					</AppRouterCacheProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
