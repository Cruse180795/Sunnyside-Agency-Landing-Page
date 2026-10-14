import type { ReactNode } from "react";

type FooterSocialLinkProps = {
  socialHref: string;
  label: string;
  icon: ReactNode;
};

export default function FooterSocialLink({ socialHref, label, icon }: FooterSocialLinkProps) {
  return (
    <a href={socialHref} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {icon}
    </a>
  );
}
