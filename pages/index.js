import Head from 'next/head'
import ParallaxCard from '@/components/ParallaxCard'
import ProjectSection from '@/components/Sections/ProjectSection'
import SectionDivider from '@/components/SectionDivider'
import AboutSection from '@/components/Sections/AboutSection'
import TechSection from '@/components/Sections/TechSection'
import ContactSection from '@/components/Sections/ContactSection'
import Layout from '@/components/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {
	return (
		<>
			<Head>
				<link
					charSet="UTF-8"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.0/slick.min.css"
					rel="stylesheet"
					type="text/css"
				/>
				<link
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.0/slick-theme.min.css"
					rel="stylesheet"
					type="text/css"
				/>
			</Head>
			<Layout titleHead="Illich Rada">
				<ParallaxCard />
				<ProjectSection />
				<SectionDivider />
				<AboutSection />
				<SectionDivider />
				<TechSection />
				<SectionDivider />
				<ContactSection />
			</Layout>
		</>
	)
}

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, [
				'navbar',
				'about',
				'contact',
				'footer',
				'parallax',
				'projects',
				'tech',
			])),
			// Will be passed to the page component as props
		},
	}
}
