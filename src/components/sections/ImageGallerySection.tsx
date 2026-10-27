import BottlesMobileImage from "../../assets/images/mobile/image-gallery-milkbottles.webp";
import OrangeMobileImage from "../../assets/images/mobile/image-gallery-orange.webp";
import ConeMobileImage from "../../assets/images/mobile/image-gallery-cone.webp";
import SugarCubesMobileImage from "../../assets/images/mobile/image-gallery-sugar-cubes.webp";

import BottlesDesktopImage from "../../assets/images/desktop/image-gallery-milkbottles.webp";
import OrangeDesktopImage from "../../assets/images/desktop/image-gallery-orange.webp";
import ConeDesktopImage from "../../assets/images/desktop/image-gallery-cone.webp";
import SugarCubesDesktopImage from "../../assets/images/desktop/image-gallery-sugarcubes.webp";

const images = [
  {
    id: "Milk-bottles",
    alt: "Milk bottles with a blue sky and clouds",
    mobile: { src: BottlesMobileImage, width: 409, height: 512 },
    desktop: { src: BottlesDesktopImage, width: 859, height: 1074 },
  },
  {
    id: "Orange",
    alt: "Orange fruit on an orange background",
    mobile: { src: OrangeMobileImage, width: 296, height: 370 },
    desktop: { src: OrangeDesktopImage, width: 409, height: 512 },
  },
  {
    id: "Ice-cream-cone",
    alt: "Ice cream cone without the ice cream on a blue background",
    mobile: { src: ConeMobileImage, width: 298, height: 366 },
    desktop: { src: ConeDesktopImage, width: 468, height: 586 },
  },
  {
    id: "Sugar-cubes",
    alt: "Sugar cubes stacked on a pink background",
    mobile: { src: SugarCubesMobileImage, width: 312, height: 390 },
    desktop: { src: SugarCubesDesktopImage, width: 599, height: 749 },
  },
];

export default function ImageGallerySection() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4" aria-label="Image gallery" id="projects">
      {images.map((image) => (
        <picture key={image.id} className="block">
          <source
            srcSet={image.desktop.src}
            media="(min-width: 640px)"
            type="image/webp"
            width={image.desktop.width}
            height={image.desktop.height}
          />
          <img
            className="w-full h-full object-cover aspect-4/5"
            src={image.mobile.src}
            alt={image.alt}
            height={image.mobile.height}
            width={image.mobile.width}
            loading="lazy"
            decoding="async"
          />
        </picture>
      ))}
    </section>
  );
}
