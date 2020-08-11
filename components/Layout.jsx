import Head from 'next/head'
import Navbar from './Navbar/Navbar'
export default function Layout({children,titleHead}) {
  return(
    <>
      <Head>
        <title>{titleHead}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      {children}
    </>
  )
}