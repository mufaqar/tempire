import About from "@/components/homepage/about";
import Contact from "@/components/homepage/contact";
import Feedback from "@/components/homepage/feedback";
import MainSlider from "@/components/homepage/MainSlider";

export default function Home() {
  return (
    <>
    <MainSlider />
    <About />
    <Feedback />
    <Contact />
    </>
  );
}
