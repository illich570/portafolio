import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter'
import { Alegreya, Poppins } from 'next/font/google'
import type { Metadata } from 'next'
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

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>
}): Promise<Metadata> {
	await params
	return {
		icons: {
			icon: [
				{ url: '/favicon.ico' },
				{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
				{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			],
			apple: '/apple-touch-icon.png',
		},
		manifest: '/site.webmanifest',
		applicationName: 'Illich Rada | Fullstack Developer',
		appleWebApp: {
			title: 'Illich Rada | Fullstack Developer',
		},
		other: {
			'msapplication-TileColor': '#860000',
		},
	}
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
