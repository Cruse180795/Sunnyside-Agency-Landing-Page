type TestimonialsCardProps = {
  avatarLink: string;
  testimonialText: string;
  clientName: string;
  clientJobTitle: string;
};

export default function TestimonialsCard({
  avatarLink,
  testimonialText,
  clientName,
  clientJobTitle,
}: TestimonialsCardProps) {
  return (
    <li className="space-y-14.5">
      {/** Avatar */}
      <img
        src={avatarLink}
        alt="Client Avatar"
        className="rounded-full mx-auto"
        loading="lazy"
        decoding="async"
        height={72}
        width={72}
      />

      {/** Testimonial Content */}
      <div className="space-y-8 text-center md:space-y-14 lg:space-y-18">
        {/** Testimonial */}
        <p className="text-gray-600 text-lg leading-165">{testimonialText}</p>

        {/** Client Details */}
        <div className="space-y-2">
          {/** Client Name */}
          <h2 className="text-lg font-black leading-125">{clientName}</h2>
          {/** Client Job Title */}
          <p className="text-sm leading-180 text-gray-400">{clientJobTitle}</p>
        </div>
      </div>
    </li>
  );
}
