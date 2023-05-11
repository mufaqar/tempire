import Header from '../components/header';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/footer';
import Slider from '../components/Hero_Slider';
import Feedback from '../components/feedback';


export default function Home() {
  return (
    <>
      
      <Header />
      <Slider />
      <About />
      <Feedback/>
      <Contact />
      <Footer />
    </>
  );
}




