import Layout from '../components/Layout'
import ParallaxCard from '../components/ParallaxCard/ParallaxCard';
import ProjectSection from '../components/ProjectSection/ProjectSection'
import SectionDivider from '../components/SectionDivider/SectionDivider';

export default function Home() {
  return (
    <>
      <Layout titleHead="Illich Rada">
        <ParallaxCard/>
        <ProjectSection/>
        <SectionDivider/>
      </Layout>
    </>
  )
}
