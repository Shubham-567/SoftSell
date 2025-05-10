import Footer from "./components/Footer";
import ContactForm from "./sections/ContactForm";
import HeroSection from "./sections/HeroSection";
import HowItWorks from "./sections/HowItWorks";
import Testimonials from "./sections/Testimonials";
import WhyChooseUs from "./sections/WhyChooseUs";

function App() {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
