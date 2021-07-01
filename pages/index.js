import Head from 'next/head'
import ParallaxCard from '@/components/ParallaxCard'
import ProjectSection from '@/components/Sections/ProjectSection'
import SectionDivider from '@/components/SectionDivider'
import AboutSection from '@/components/Sections/AboutSection'
import TechSection from '@/components/Sections/TechSection'
import ContactSection from '@/components/Sections/ContactSection'
import Layout from '@/components/Layout'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GraphQLClient } from 'graphql-request'

export default function Home({ techCards, projectCards }) {
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

	const { techCards, projectCards } = await graphcms.request(`
	{
		techCards{
			id
			title
			image{
				url
			}
		}
		projectCards {
				title
				description
				exampleUrl
				githubUrl
				image {
					url
				}
		}
	}
`)

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
			// Will be passed to the page component as props
		},
	}
}
