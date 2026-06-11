import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaShoppingBag, FaTimes } from "react-icons/fa";
import { HEADER_LINKS } from "../../data/links";
import { Button } from "../ui/Button";
import { useOrder } from "../../context/useOrder";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount, openSidebar } = useOrder();

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg-page/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-4 py-2.5 sm:px-6">
        <NavLink to="/" aria-label="Baked With Feelings home">
          <img
            src="/LogoNoSlogan.svg"
            alt="Baked With Feelings"
            className="h-12 w-auto sm:h-14"
          />
        </NavLink>

        <nav
          className="hidden items-center gap-5 md:flex"
          aria-label="Primary navigation"
        >
          {HEADER_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                [
                  "text-sm font-semibold transition-colors hover:text-text-brand",
                  isActive ? "text-text-brand" : "text-text-secondary",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <NavLink to="/menu">
            <Button className="px-4 py-2 sm:px-5 sm:py-2.5">Order</Button>
          </NavLink>

          <button
            type="button"
            className="relative inline-flex size-10 items-center justify-center rounded-lg border border-border-subtle bg-bg-card text-text-primary shadow-sm transition hover:border-border-focus hover:text-text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
            aria-label={`Open shopping bag with ${itemCount} items`}
            onClick={openSidebar}
          >
            <FaShoppingBag className="size-4" aria-hidden />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex min-w-5 items-center justify-center rounded-full bg-action-primary px-1.5 text-xs font-bold leading-5 text-action-primary-text">
                {itemCount}
              </span>
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="relative inline-flex size-10 items-center justify-center rounded-lg border border-border-subtle bg-bg-card text-text-primary shadow-sm transition hover:border-border-focus hover:text-text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
            aria-label={`Open shopping bag with ${itemCount} items`}
            onClick={openSidebar}
          >
            <FaShoppingBag className="size-4" aria-hidden />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex min-w-5 items-center justify-center rounded-full bg-action-primary px-1.5 text-xs font-bold leading-5 text-action-primary-text">
                {itemCount}
              </span>
            )}
          </button>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-border-subtle bg-bg-card text-text-primary shadow-sm transition hover:border-border-focus hover:text-text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-focus"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? (
              <FaTimes className="size-4" aria-hidden />
            ) : (
              <FaBars className="size-4" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="border-t border-border-subtle bg-bg-page px-4 py-4 shadow-sm md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-2">
            {HEADER_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={closeMenu}
                className={({ isActive }) =>
                  [
                    "rounded-lg px-4 py-3 text-sm font-semibold transition-colors",
                    isActive
                      ? "bg-cinnamon-100 text-text-brand"
                      : "text-text-secondary hover:bg-bg-card hover:text-text-brand",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}

            <NavLink to="/menu" onClick={closeMenu} className="mt-2">
              <Button className="w-full px-4 py-3">Order</Button>
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
}
