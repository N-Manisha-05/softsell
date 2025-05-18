
import "./page.css";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import ContactForm from "../components/ContactForm";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <main>
      <Navbar/>
     
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer/>
    </main>
  );
 }