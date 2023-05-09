import NewNavbar from '@/src/components/NewNavbar'
import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Illich Rada | Fullstack Developer',
	keywords:
		'portfolio, developer, IT, responsive, frontend, backend, programmer, programador, illich',
	creator: 'Illich Rada',
	description:
		'Illich Rada  Fullstack Developer. He Realizado proyectos con tecnologias web de alta vanguardia como React, Strapi, GraphCMS, Next.js y Gatbsy. Sientete libre de contactame!',
	openGraph: {
		type: 'website',
		url: 'https://illichrada.com',
		title: 'Illich Rada | Fullstack Developer',
		description:
			'Illich Rada  Fullstack Developer. He Realizado proyectos con tecnologias web de alta vanguardia como React, Strapi, GraphCMS, Next.js y Gatbsy. Sientete libre de contactame!',
		siteName: 'Illich Rada | Fullstack Developer',
		images: 'https://www.illichrada.com/og_image.png',
	},
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<NewNavbar />
				{children}
			</body>
		</html>
	)
}
