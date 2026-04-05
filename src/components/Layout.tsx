import type { ReactNode } from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}
