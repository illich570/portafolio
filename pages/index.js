import Layout from '../src/components/Layout'
import ParallaxCard from '../src/components/ParallaxCard/ParallaxCard'
import ProjectSection from '../src/components/ProjectSection/ProjectSection'
import SectionDivider from '../src/components/SectionDivider/SectionDivider'
import AboutSection from '../src/components/AboutSection/AboutSection'
import ContactSection from '../src/components/ContactSection/ContactSection'
import TechSection from '../src/components/TechSection/TechSection'
import Pulse from 'react-reveal/Pulse';
import Head from "next/head"

export default function Home() {
  return (
    <>
    <Head>
    <link
  rel="stylesheet"
  type="text/css"
  charSet="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.0/slick-theme.min.css"
/>
    </Head>
      <Layout titleHead="Illich Rada">
        <Pulse>
        <ParallaxCard/>
        </Pulse>
        <ProjectSection/>
        <SectionDivider/>
        <AboutSection/>
        <SectionDivider/>
        <TechSection/>
        <SectionDivider/>
        <ContactSection/>
      </Layout>
    </>
  )
}
