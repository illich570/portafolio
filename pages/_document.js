import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import theme from '../src/theme'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta content={theme.palette.primary.main} name="theme-color" />
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
					<link href="/favicon.ico" rel="shorcut icon" />
					<link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
					<link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
					<link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
					<link href="/site.webmanifest" rel="manifest" />
					{/* METADATOS */}
					<meta
						content="portfolio, developer, IT, responsive, frontend, backend, programmer, programador, illich"
						name="keywords"
					/>
					<meta content="https://www.illichrada.com/og_image.png" name="image" />
					<meta content="https://www.illichrada.com/og_image.png" property="og:image" />
					<meta content="Illich Rada" name="author" />
					<meta content="Illich Rada" name="copyright" />
					<meta content={theme.palette.primary.main} name="msapplication-TileColor" />
					<meta content="Illich Rada | Fullstack Developer" name="apple-mobile-web-app-title" />
					<meta content="Illich Rada | Fullstack Developer" name="application-name" />
					<meta content="Illich Rada | Fullstack Developer" property="og:title" />
					<meta
						content="Illich Rada Fullstack Developer. He Realizado proyectos con tecnologias web de alta vanguardia como React, Strapi, GraphCMS, Next.js y Gatbsy. Sientete libre de contactame!"
						name="description"
					/>
					<meta
						content="Illich Rada Fullstack Developer. He Realizado proyectos con tecnologias web de alta vanguardia como React, Strapi, GraphCMS, Next.js y Gatbsy. Sientete libre de contactame!"
						property="og:description"
					/>
					<meta content={theme.palette.primary.main} name="msapplication-TileColor" />
					<link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
					<link
						href="https://fonts.googleapis.com/css2?family=Alegreya:wght@500&family=Poppins:wght@500&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const sheets = new ServerStyleSheets()
	const originalRenderPage = ctx.renderPage

	ctx.renderPage = () =>
		originalRenderPage({
			enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
		})

	const initialProps = await Document.getInitialProps(ctx)

	return {
		...initialProps,
		// Styles fragment is rendered after the app and page rendering finish.
		styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
	}
}
