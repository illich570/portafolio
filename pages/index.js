import { useEffect } from 'react'
import ParallaxCard from '@/components/ParallaxCard'
import ProjectSection from '@/components/Sections/ProjectSection'
import SectionDivider from '@/components/SectionDivider'
import AboutSection from '@/components/Sections/AboutSection'
import TechSection from '@/components/Sections/TechSection'
import ContactSection from '@/components/Sections/ContactSection'
import Layout from '@/components/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GraphQLClient } from 'graphql-request'

const isWindow = typeof 'window' !== 'undefined'

export default function Home({ techCards, projectCards }) {
	useEffect(() => {
		if (isWindow) {
			window.history.scrollRestoration = 'manual'
		}
	}, [])
	return (
		<>
			<Layout titleHead="Illich Rada | Frontend Developer">
				<ParallaxCard />
				<ProjectSection dataCards={projectCards} />
				<SectionDivider />
				<AboutSection />
				<SectionDivider />
				<TechSection dataCards={techCards} />
				<SectionDivider />
				<ContactSection />
			</Layout>
		</>
	)
}

export async function getStaticProps({ locale }) {
	const graphcms = new GraphQLClient(process.env.URL_GRAPHCMS, {
		headers: {
			authorization: `Bearer ${process.env.TOKEN_GRAPHCMS}`,
		},
	})

	const { techCards, projectCards } = await graphcms.request(
		`
	query dataFetching($locale: Locale!){
		techCards{
			id
			title
			image{
				url
			}
		}
		projectCards(locales: [$locale]) {
			title
			description
			exampleUrl
			githubUrl
			localizations(includeCurrent: true){
				image {
					url
				} 
			}
		}
	}`,
		{ locale }
	)

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
			techCards,
			projectCards,
		},
	}
}
