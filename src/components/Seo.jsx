import Head from 'next/head'

export default function SEO() {
	return (
		<Head>
			<link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
			<link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
			<link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
			<link href="/site.webmanifest" rel="manifest"></link>
		</Head>
	)
}
