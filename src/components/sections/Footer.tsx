import FooterLogo from "../../assets/images/logo-footer.svg";

import FacebookIcon from "../icons/FacebookIcon";
import PinterestIcon from "../icons/PinterestIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";

import FooterNavLink from "../ui/FooterNavLink";
import FooterSocialLink from "../ui/FooterSocialLink";

export default function Footer() {
  return (
    <footer className="bg-green-300 py-18.25 space-y-20">
      {/** Brand Logo and Website Navigation */}
      <div className="space-y-10">
        <img src={FooterLogo} alt="Sunnyside Agency" className="mx-auto" />
        <nav>
          <ul className="flex items-center justify-center gap-x-14">
            <FooterNavLink linkLabel="About" linkHref="#about" />
            <FooterNavLink linkLabel="Services" linkHref="#services" />
            <FooterNavLink linkLabel="Projects" linkHref="#projects" />
          </ul>
        </nav>
      </div>

      {/** Social Links */}
      <div className="flex items-center justify-center gap-x-6">
        <FooterSocialLink
          socialHref="https://www.facebook.com/"
          label="Facebook"
          icon={
            <FacebookIcon
              aria-hidden="true"
              className="size-5 text-green-500 transition-colors ease-in-out duration-500 hover:text-white"
            />
          }
        />

        <FooterSocialLink
          socialHref="https://www.instagram.com/?hl=en"
          label="Instagram"
          icon={
            <InstagramIcon
              aria-hidden="true"
              className="size-5 text-green-500 transition-colors ease-in-out duration-500 hover:text-white"
            />
          }
        />

        <FooterSocialLink
          socialHref="https://x.com/home"
          label="Twitter"
          icon={
            <TwitterIcon
              aria-hidden="true"
              className="size-5 text-green-500 transition-colors ease-in-out duration-500 hover:text-white"
            />
          }
        />

        <FooterSocialLink
          socialHref="https://x.com/home"
          label="Pinterest"
          icon={
            <PinterestIcon
              aria-hidden="true"
              className="size-5 text-green-500 transition-colors ease-in-out duration-500 hover:text-white"
            />
          }
        />
      </div>
    </footer>
  );
}
