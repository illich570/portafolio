import Layout from '../components/Layout'
import ParallaxCard from '../components/ParallaxCard/ParallaxCard';
import ProjectSection from '../components/ProjectSection/ProjectSection'
import SectionDivider from '../components/SectionDivider/SectionDivider';
import AboutSection from '../components/AboutSection/AboutSection'

export default function Home() {
  return (
    <>
      <Layout titleHead="Illich Rada">
        <ParallaxCard/>
        <ProjectSection/>
        <SectionDivider/>
        <AboutSection/>
        <SectionDivider/>
      </Layout>
    </>
  )
}
