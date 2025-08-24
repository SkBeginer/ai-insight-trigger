import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BackgroundEffects } from "@/components/BackgroundEffects";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
};

export default Index;
