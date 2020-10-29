import Layout from '../components/Layout'
import ParallaxCard from '../components/ParallaxCard/ParallaxCard';
import ProjectSection from '../components/ProjectSection/ProjectSection'

export default function Home() {
  return (
    <>
      <Layout titleHead="Illich Rada">
        <ParallaxCard/>
        <ProjectSection/>
      </Layout>
    </>
  )
}
