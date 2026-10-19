import TransformMobileImage from "../../assets/images/mobile/image-transform.webp";
import TransformDesktopImage from "../../assets/images/desktop/image-transform.webp";

export default function TransformSection() {
  return (
    <section className="transform-section lg:grid lg:grid-cols-2">
      <picture className="order-1">
        <source
          media="(min-width: 1024px)"
          srcSet={TransformDesktopImage}
          type="image/webp"
          width={1379}
          height={1724}
        />
        <img
          className="w-full h-full object-cover aspect-auto"
          src={TransformMobileImage}
          alt="Egg on a yellow background"
          height={896}
          width={719}
          loading="lazy"
          decoding="async"
        />
      </picture>

      {/*title, content & link */}
      <div className="about-section-content-wrapper">
        <h2 className="about-section-title">Transform your brand</h2>
        <div className="about-section-content-sub-wrapper">
          <p className="about-section-body">
            We are a full-service creative agency specializing in helping brands grow fast. Engage your
            clients through compelling visuals that do most of the marketing for you.
          </p>

          {/*Since this Learn More goes nowhere i used a span over an a tag*/}
          <span className="highlight about-section-link">Learn More</span>
        </div>
      </div>
    </section>
  );
}
