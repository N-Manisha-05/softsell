
import "./page.css";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import ContactForm from "../components/ContactForm";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import ThemeToggle from "../components/ThemeToggle";
import Navbar from "../components/Navbar"
export default function Home() {
  return (
    <main>
      <Navbar/>
     
      <HeroSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </main>
  );
 }