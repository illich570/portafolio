import Head from 'next/head'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Layout({ children, titleHead }) {
	return (
		<>
			<Head>
				<title>{titleHead}</title>
				<meta
					content="Illich Rada Frontend Developer. Realizando proyectos con tecnologias web de alta vanguardia como React, Next.js y Gatbsy. Siempre dispuesto a escuchar propuestas y realizar proyectos."
					name="description"
				/>
			</Head>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}
