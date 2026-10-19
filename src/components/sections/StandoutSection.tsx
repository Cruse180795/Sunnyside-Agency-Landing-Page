import StandOutMobileImage from "../../assets/images/mobile/image-stand-out.webp";
import StandOutDesktopImage from "../../assets/images/desktop/image-stand-out.webp";

export default function StandoutSection() {
  return (
    <section className="standout-section lg:grid lg:grid-cols-2">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet={StandOutDesktopImage}
          type="image/webp"
          width={772}
          height={965}
        />
        <img
          className="w-full h-full object-cover"
          src={StandOutMobileImage}
          alt="Orange colored glass on an orange background"
          height={502}
          width={402}
          loading="lazy"
          decoding="async"
        />
      </picture>

      {/*title, content & link */}
      <div className="about-section-content-wrapper">
        <h2 className="about-section-title">Stand out to the right audience</h2>
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          <p className="about-section-body">
            Using a collaborative formula of designers, researchers, photographers, videographers, and
            copywriters, we’ll build and extend your brand in digital places.
          </p>

          {/*Since this Learn More goes nowhere i used a span over an a tag*/}
          <span className="highlight about-section-link">Learn More</span>
        </div>
      </div>
    </section>
  );
}
