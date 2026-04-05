import { setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import Layout from '@/components/Layout'
import ScrollRestoration from '@/components/ScrollRestoration'
import ParallaxCard from '@/components/ParallaxCard'
import ProjectSection from '@/components/Sections/ProjectSection'
import SectionDivider from '@/components/SectionDivider'
import AboutSection from '@/components/Sections/AboutSection'
import TechSection from '@/components/Sections/TechSection'
import ContactSection from '@/components/Sections/ContactSection'
import { fetchPortfolioData } from '@/lib/graphcms'

export const revalidate = 120

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params
	setRequestLocale(locale)
	const t = await getTranslations({ locale, namespace: 'metadata' })
	return {
		title: t('title'),
		description: t('description'),
		openGraph: {
			title: t('title'),
			description: t('description'),
			images: [{ url: 'https://www.illichrada.com/og_image.png' }],
		},
	}
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params
	setRequestLocale(locale)

	const { techCards, projectCards } = await fetchPortfolioData(locale)
	const techTitle = (await getTranslations({ locale, namespace: 'illich_tech' }))('title')
	const tContact = await getTranslations({ locale, namespace: 'contact' })

	return (
		<>
			<ScrollRestoration />
			<Layout>
				<ParallaxCard />
				<ProjectSection dataCards={projectCards} />
				<SectionDivider />
				<AboutSection />
				<SectionDivider />
				<TechSection dataCards={techCards} title={techTitle} />
				<SectionDivider />
				<ContactSection actionLabel={tContact('action')} preamble={tContact('contact')} />
			</Layout>
		</>
	)
}
