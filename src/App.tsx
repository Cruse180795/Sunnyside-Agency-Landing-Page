import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ServicesSection from "./components/sections/ServicesSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ImageGallerySection from "./components/sections/ImageGallerySection";

import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <>
      <HeroSection />
      <main className="lg:container lg:mx-auto">
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ImageGallerySection />
      </main>

      <Footer />
    </>
  );
}

{
  /* Remaining sections
  - Navigation + hero section
  */
}
