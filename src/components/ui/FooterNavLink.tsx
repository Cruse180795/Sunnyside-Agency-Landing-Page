type FooterNavLinkProps = {
  linkLabel: string;
  linkHref: string;
};

export default function FooterNavLink({ linkLabel, linkHref }: FooterNavLinkProps) {
  return (
    <li>
      <a
        href={linkHref}
        className="text-lg leading-165 text-green-500 transition-colors ease-in-out duration-500 hover:text-white"
      >
        {linkLabel}
      </a>
    </li>
  );
}
