export function getSiteBaseUrl(): string {
	return (process.env.SITE_URL ?? 'https://www.illichrada.com').replace(/\/$/, '')
}
