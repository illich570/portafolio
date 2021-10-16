import Head from 'next/head'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Layout({ children, titleHead }) {
	return (
		<>
			<Head>
				<title>{titleHead}</title>
			</Head>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}
