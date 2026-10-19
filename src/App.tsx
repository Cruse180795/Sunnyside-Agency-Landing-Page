import AboutSection from "./components/sections/AboutSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ImageGallerySection from "./components/sections/ImageGallerySection";

export default function App() {
  return (
    <div>
      <main>
        <AboutSection />
        <TestimonialsSection />
        <ImageGallerySection />
      </main>
    </div>
  );
}
