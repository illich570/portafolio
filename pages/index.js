import Layout from '../components/Layout'
import ParallaxCard from '../components/ParallaxCard/ParallaxCard'
import ProjectSection from '../components/ProjectSection/ProjectSection'
import SectionDivider from '../components/SectionDivider/SectionDivider'
import AboutSection from '../components/AboutSection/AboutSection'
import ContactSection from '../components/ContactSection/ContactSection'
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
