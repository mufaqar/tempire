import ComingSoon from '../components/coming';
import Head from 'next/head';

export default function Index() {
  return (
    <>
      <Head>
        <title>Tempire | Website Under Maintenance</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/x-icon" href="/favicon.png"></link>
      </Head>
      <ComingSoon />
    </>
  );
}
