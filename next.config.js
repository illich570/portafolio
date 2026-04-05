const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./src/i18n/request.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
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

module.exports = withNextIntl(nextConfig)

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
