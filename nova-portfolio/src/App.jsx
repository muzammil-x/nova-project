import ChooseUs from "./components/ChooseUs";
import Contact from "./components/Contact";
import Courses from "./components/Courses";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import FreeTrial from "./components/FreeTrial";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <>
      <Header />
      <Intro />
      <Courses />
      <ChooseUs />
      <FreeTrial />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}
