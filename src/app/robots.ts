import type { MetadataRoute } from 'next'

function baseUrl(): string {
	return (process.env.SITE_URL ?? 'https://www.illichrada.com').replace(/\/$/, '')
}

export default function robots(): MetadataRoute.Robots {
	const base = baseUrl()
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `${base}/sitemap.xml`,
	}
}
