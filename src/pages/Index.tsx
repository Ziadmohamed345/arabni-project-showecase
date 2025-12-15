import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Prototype from "@/components/Prototype";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Gallery />
      <Prototype />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
