import type { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { getSiteBaseUrl } from '@/lib/site-url'

export default function sitemap(): MetadataRoute.Sitemap {
	const base = getSiteBaseUrl()

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
