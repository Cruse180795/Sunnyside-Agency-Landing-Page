import TestimonialsCard from "../ui/TestimonialsCard";

import EmilyAvatar from "../../assets/images/image-emily.webp";
import ThomasAvatar from "../../assets/images/image-thomas.webp";
import JennieAvatar from "../../assets/images/image-jennie.webp";

const testimonials = [
  {
    avatar: EmilyAvatar,
    testimonialText:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    clientName: "Emily R.",
    clientJobTitle: "Marketing Director",
  },
  {
    avatar: ThomasAvatar,
    testimonialText:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    clientName: "Thomas S.",
    clientJobTitle: "Chief Operating Officer",
  },
  {
    avatar: JennieAvatar,
    testimonialText:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    clientName: "Jennie F.",
    clientJobTitle: "Business Owner",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-13.75 space-y-14 md:space-y-20 md:py-17.5 lg:py-40.5  ">
      <h2 className="font-black text-xl leading-125 tracking-wide-4 text-gray-400 uppercase text-center">
        Client Testimonials
      </h2>

      <ul className="grid grid-cols-1 gap-14 px-6 md:px-21 lg:grid-cols-3 lg:px-0 lg:gap-8 lg:lg:max-w-278.5 lg:mx-auto">
        {testimonials.map((t) => (
          <TestimonialsCard
            key={t.clientName}
            avatarLink={t.avatar}
            testimonialText={t.testimonialText}
            clientName={t.clientName}
            clientJobTitle={t.clientJobTitle}
          />
        ))}
      </ul>
    </section>
  );
}
