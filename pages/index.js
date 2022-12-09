import Header from '../components/header';
import About from '../components/About';
import FAQs from '../components/Faqs';
import Footer from '../components/footer';
import Slider from '../components/Hero_Slider';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tempire | </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      </Head>
      <Header />
      <Slider />
      <About />
      <FAQs />
      <Footer />
    </>
  );
}
