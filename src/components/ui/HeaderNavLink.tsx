type HeaderNavLinkProps = {
  label: string;
  href: string;
  onClick?: () => void;
};

export default function HeaderNavLink({ label, href, onClick }: HeaderNavLinkProps) {
  return (
    <li>
      <a
        href={href}
        className="text-xl leading-125 text-gray-550 lg:text-white lg:text-lg lg:leading-165"
        onClick={onClick}
      >
        {label}
      </a>
    </li>
  );
}
