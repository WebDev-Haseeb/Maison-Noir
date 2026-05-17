import { Link } from "@tanstack/react-router";
import { BRAND, LOCATIONS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-creme/5 bg-noir">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        {/* Main Footer - Full Width Distribution */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:w-1/3 space-y-6">
            <div className="font-serif text-3xl md:text-4xl tracking-[0.12em] uppercase">
              {BRAND.name}
            </div>
            <p className="text-creme/50 max-w-sm text-pretty leading-relaxed">
              A private grooming atelier for the modern South Asian gentleman.
              Two ateliers. One standard of craft.
            </p>
            <div className="text-eyebrow text-brass">Est. {BRAND.established}</div>
          </div>

          {/* Right Section - Locations + Reach */}
          <div className="lg:w-2/3 flex flex-col md:flex-row md:justify-end gap-12 lg:gap-16 xl:gap-24">
            {/* Locations */}
            {LOCATIONS.map((loc) => (
              <div key={loc.city} className="space-y-4 md:text-right">
                <h4 className="text-eyebrow text-brass">{loc.label}</h4>
                <address className="not-italic text-creme/70 leading-relaxed text-sm">
                  {loc.address1}
                  <br />
                  {loc.address2}
                  <br />
                  {loc.city}, Pakistan
                </address>
                <div className="text-sm text-creme/50">{loc.phone}</div>
              </div>
            ))}

            {/* Reach Links */}
            <div className="space-y-4 md:text-right">
              <h4 className="text-eyebrow text-brass">Reach</h4>
              <ul className="space-y-3 text-sm text-creme/70">
                <li>
                  <a
                    href={BRAND.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brass transition-colors inline-flex items-center gap-2 md:flex-row-reverse"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={BRAND.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brass transition-colors inline-flex items-center gap-2 md:flex-row-reverse"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="hover:text-brass transition-colors inline-flex items-center gap-2 md:flex-row-reverse"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Full Width */}
        <div className="mt-16 lg:mt-20 pt-8 border-t border-creme/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.24em] text-creme/30">
            © {new Date().getFullYear()} {BRAND.name} Grooming Atelier — All Rights Reserved
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-[0.24em] text-creme/30">
            <Link to="/contact" className="hover:text-brass transition-colors">Contact</Link>
            <Link to="/book" className="hover:text-brass transition-colors">Reserve</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
