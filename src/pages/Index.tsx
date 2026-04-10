import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Leadership from "@/components/Leadership";
import Speaking from "@/components/Speaking";
import LogoStrip from "@/components/LogoStrip";
import Community from "@/components/Community";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoStrip />
      <About />
      <Leadership />
      <Speaking />
      <Community />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Index;
