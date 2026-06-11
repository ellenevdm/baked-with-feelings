import { NavLink } from "react-router-dom";
import { FOOTER_LINKS, SOCIAL_LINKS } from "../../data/links";
import type { IconType } from "react-icons";
import { FaEnvelope, FaHeart, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const ICONS: Record<string, IconType> = {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
};

function returnIcon(name: string) {
  const Icon = ICONS[name];
  if (!Icon) return null;
  return <Icon size={18} aria-hidden />;
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border-inverse/10 bg-bg-footer text-text-inverse">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 sm:py-12 lg:grid-cols-3 lg:gap-10">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <img
              src="/InverseLogoNoSlogan.svg"
              alt="Baked With Feelings"
              className="h-14 w-auto opacity-90 sm:h-16"
            />

            <p
              className="font-script text-base opacity-80 sm:text-lg"
            >
              Homemade Just Hits Different
            </p>

            <p className="max-w-sm text-sm leading-relaxed opacity-80">
              Comfort bakes for people. Feel good treats for pets. Freshly baked
              for you.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-heading text-base sm:text-lg">Quick Links</p>
            <nav
              className="flex flex-col gap-1"
              aria-label="Footer navigation"
            >
              {FOOTER_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className="py-1.5 text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-heading text-base sm:text-lg">Find Us</p>
            <div className="flex flex-col gap-1">
              {SOCIAL_LINKS.map(({ href, label, icon, handle }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 py-1.5"
                >
                  {returnIcon(icon)}
                  <span className="text-sm opacity-70 transition-opacity group-hover:opacity-100">
                    {handle}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-border-inverse/10 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs opacity-40">
            © {new Date().getFullYear()} Baked With Feelings. All rights
            reserved.
          </p>
          <p className="flex items-center justify-center gap-1 text-xs opacity-40 sm:justify-end">
            Made with{" "}
            <FaHeart size={10} className="inline mx-0.5" fill="currentColor" />{" "}
            and real butter.
          </p>
        </div>
      </div>
    </footer>
  );
}
