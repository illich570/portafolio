import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'

function baseUrl(): string {
	return (process.env.SITE_URL ?? 'https://www.illichrada.com').replace(/\/$/, '')
}

export default function sitemap(): MetadataRoute.Sitemap {
	const base = baseUrl()

	return routing.locales.map((locale) => {
		const path = locale === routing.defaultLocale ? '' : `/${locale}`
		const url = path === '' ? `${base}/` : `${base}${path}`

		return {
			url,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: locale === routing.defaultLocale ? 1 : 0.9,
		}
	})
}
