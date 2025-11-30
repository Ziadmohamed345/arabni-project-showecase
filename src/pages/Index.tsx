import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
