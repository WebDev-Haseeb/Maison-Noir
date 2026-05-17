import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { BRAND } from "@/lib/site-data";

const LINKS = [
  { to: "/services", label: "Services" },
  { to: "/stylists", label: "Stylists" },
  { to: "/lookbook", label: "Lookbook" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-noir/85 backdrop-blur-md border-b border-creme/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="font-serif text-xl md:text-2xl tracking-[0.18em] uppercase text-creme"
          aria-label={`${BRAND.name} home`}
        >
          {BRAND.name}
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-eyebrow text-creme/70 hover:text-brass transition-colors"
              activeProps={{ className: "text-brass" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/book"
            className="hidden sm:inline-flex items-center gap-3 border border-creme/20 px-5 py-2.5 text-eyebrow text-creme hover:bg-creme hover:text-noir transition-colors"
          >
            <span className="size-1.5 bg-brass rounded-full" />
            Reserve
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="md:hidden p-2 text-creme"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block h-px w-6 bg-creme transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`block h-px w-6 bg-creme transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-6 bg-creme transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-out bg-noir-deep border-b border-creme/5 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-6 gap-4">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="text-creme font-serif text-2xl"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="text-brass text-eyebrow mt-2"
          >
            Reserve →
          </Link>
        </nav>
      </div>
    </header>
  );
}
