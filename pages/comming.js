import Header from '../components/header';
import Footer from '../components/footer';

import Head from 'next/head';

export default function ComingSoon() {
  return (
    <>
      <Head>
        <title>Tempire | </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      </Head>
      <Header />

      <Footer />
    </>
  );
}
