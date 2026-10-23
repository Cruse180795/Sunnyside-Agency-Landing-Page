import GraphicDesignSection from "./GraphicDesignSection";
import PhotographySection from "./PhotographySection";
export default function ServicesSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2" id="services">
      <GraphicDesignSection />
      <PhotographySection />
    </div>
  );
}
