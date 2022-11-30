import Header from '../components/header';

import About from '../components/About';

import Footer from '../components/footer';
import PageTitle from '../components/pagebanner';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tempire</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <PageTitle title="About Tempire" />

      <About />

      <Footer />
    </>
  );
}
