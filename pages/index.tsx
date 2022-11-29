import Head from 'next/head'
import Header from '../components/header'
import Price from '../components/Price'
import Stats from '../components/Stats'
import About from '../components/About'
import FAQs from '../components/Faqs'







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

      <h2>Tempire</h2>

      <header className="header">
        <div className="header-main container d-flex">

          <a href="#" className="header-logo default-icon">
            <img src="assets/img/logo.svg" alt="logo company" />
          </a>

          <div className="navbar">

            <nav className="main-navigation">
              <ul className="menu">
                <li className="menu-item  current-menu-item">
                  <a href="#s-advantages">Our advantages</a>
                </li>
                <li className="menu-item">
                  <a href="#s-about">About Us</a>
                </li>
                <li className="menu-item">
                  <a href="#s-price">Prices / Subscription</a>
                </li>

                <li className="menu-item">
                  <a href="#s-faq">FAQ</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="burger js-header">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </>

  )
}
