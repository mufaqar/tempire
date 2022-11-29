import Head from 'next/head'
import Header from '../components/header'
import Price from '../components/Price'
import Stats from '../components/Stats'
import About from '../components/About'
import FAQs from '../components/Faqs'
import Footer from '../components/Footer'







export default function Home() {
  return (

    <>

      <Head>
        <title>Tempire </title>
        <meta name="description" content="Tempire" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Stats />
      <About />
      <Price />
      <FAQs />

      <Footer />

    </>

  )
}
