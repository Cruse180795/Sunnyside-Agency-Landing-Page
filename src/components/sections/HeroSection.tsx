import HamburgerIcon from "../icons/HamburgerIcon";
import ArrowDownIcon from "../icons/ArrowDownIcon";
import LogoHeader from "../../assets/images/logo-header.svg";
import HeaderNavLink from "../ui/HeaderNavLink";

import { useState } from "react";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="px-6 py-8 lg:px-10 ">
      {/*Brand Logo */}
      <div className="flex items-center justify-between relative">
        <img src={LogoHeader} alt="Sunnyside Agency" decoding="async" width={132} height={24} />

        <button
          type="button"
          onClick={closeMenu}
          className="lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
        >
          <HamburgerIcon className="w-6 h-4.5" />
        </button>

        {/* Mobile + Tablet Navigation */}
        {isMenuOpen && (
          <nav className="absolute bg-white w-full top-0 mt-12.5 [clip-path:polygon(0_24px,calc(100%-24px)_24px,100%_0,100%_100%,0_100%)] lg:hidden">
            <ul className="flex flex-col items-center gap-y-8 pb-10 pt-15.5">
              <HeaderNavLink label="About" href="#about" onClick={closeMenu} />
              <HeaderNavLink label="Services" href="#services" onClick={closeMenu} />
              <HeaderNavLink label="Projects" href="#projects" onClick={closeMenu} />
              <li>
                <a
                  className="px-[37.5px] py-[15.5px] bg-yellow-500 text-gray-950 rounded-[28px] uppercase text-15 leading-165 tracking-wide-1 font-black"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}

        {/*Desktop Navigation */}
        <nav className="hidden lg:block" aria-label="Mobile">
          <ul className="flex items-center gap-x-12">
            <HeaderNavLink label="About" href="#about" />
            <HeaderNavLink label="Services" href="#services" />
            <HeaderNavLink label="Projects" href="#projects" />
            <li>
              <a className="rounded-[28px] bg-white text-gray-950 px-[27.5px] py-[15.5px] cursor-pointer font-black text-15 leading-165 tracking-wide-1 uppercase transition-colors ease-in-out duration-500 hover:text-white hover:bg-white/25">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <section className="mt-20 space-y-12 md:space-y-18 md:mt-18 lg:space-y-24 lg:mt-25">
        <h1 className="text-42 text-white uppercase text-center font-black leading-125 tracking-wide-6 md:text-56 md:tracking-wide-9">
          We are Creatives
        </h1>
        <ArrowDownIcon className="mx-auto" />
      </section>
    </header>
  );
}
