import Layout from '../src/components/Layout'
import ParallaxCard from '../src/components/ParallaxCard/ParallaxCard'
import ProjectSection from '../src/components/ProjectSection/ProjectSection'
import SectionDivider from '../src/components/SectionDivider/SectionDivider'
import AboutSection from '../src/components/AboutSection/AboutSection'
import ContactSection from '../src/components/ContactSection/ContactSection'
import Pulse from 'react-reveal/Pulse';

export default function Home() {
  return (
    <>
      <Layout titleHead="Illich Rada">
        <Pulse>
        <ParallaxCard/>
        </Pulse>
        <ProjectSection/>
        <SectionDivider/>
        <AboutSection/>
        <SectionDivider/>
        <ContactSection/>
      </Layout>
    </>
  )
}
