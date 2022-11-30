import Header from '../components/header';
import Stats from '../components/Stats';
import About from '../components/About';

import FAQs from '../components/Faqs';
import Footer from '../components/footer';
import Slider from '../components/Hero_Slider';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tempire</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />

      <About />

      <Footer />
    </>
  );
}
