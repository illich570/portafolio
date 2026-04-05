const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./src/i18n/request.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.graphassets.com',
				pathname: '/**',
			},
			{
				protocol: 'https',
				hostname: 'us-east-1.graphassets.com',
				pathname: '/**',
			},
		],
	},
	async headers() {
		return [
			{
				source: '/',
				headers: securityHeaders,
			},
			{
				source: '/:path*',
				headers: securityHeaders,
			},
		]
	},
}

/** Next 16 sets TURBOPACK during build; next-intl then injects legacy `experimental.turbo`. Move aliases to `turbopack` and drop the invalid key. */
function finalizeNextConfig(config) {
	const turbo = config.experimental?.turbo
	if (turbo?.resolveAlias && Object.keys(turbo.resolveAlias).length > 0) {
		config.turbopack = {
			...config.turbopack,
			resolveAlias: {
				...config.turbopack?.resolveAlias,
				...turbo.resolveAlias,
			},
		}
		const { turbo: _drop, ...experimentalRest } = config.experimental
		if (Object.keys(experimentalRest).length > 0) {
			config.experimental = experimentalRest
		} else {
			delete config.experimental
		}
	}
	return config
}

module.exports = finalizeNextConfig(withNextIntl(nextConfig))

const securityHeaders = [
	{
		key: 'Referrer-Policy',
		value: 'origin-when-cross-origin',
	},
	{
		key: 'X-Frame-Options',
		value: 'DENY',
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on',
	},
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=31536000; includeSubDomains; preload',
	},
	{
		key: 'Permissions-Policy',
		value: 'camera=(), microphone=(), geolocation=()',
	},
]
