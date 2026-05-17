import { Link } from "@tanstack/react-router";
import { BRAND, LOCATIONS } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-creme/5 bg-noir">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          <div className="md:col-span-5 space-y-6">
            <div className="font-serif text-3xl md:text-4xl tracking-[0.12em] uppercase">
              {BRAND.name}
            </div>
            <p className="text-creme/50 max-w-sm text-pretty leading-relaxed">
              A private grooming atelier for the modern South Asian gentleman.
              Two ateliers. One standard of craft.
            </p>
            <div className="text-eyebrow text-brass">Est. {BRAND.established}</div>
          </div>

          {LOCATIONS.map((loc) => (
            <div key={loc.city} className="md:col-span-3 space-y-4">
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

          <div className="md:col-span-1 space-y-4">
            <h4 className="text-eyebrow text-brass">Reach</h4>
            <ul className="space-y-2 text-sm text-creme/70">
              <li><a href={BRAND.whatsappLink} className="hover:text-brass transition-colors">WhatsApp</a></li>
              <li><a href={BRAND.instagram} className="hover:text-brass transition-colors">Instagram</a></li>
              <li><a href={`mailto:${BRAND.email}`} className="hover:text-brass transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-creme/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.24em] text-creme/30">
            © {new Date().getFullYear()} {BRAND.name} Grooming Atelier — All Rights Reserved
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.24em] text-creme/30">
            <Link to="/contact" className="hover:text-brass transition-colors">Contact</Link>
            <Link to="/book" className="hover:text-brass transition-colors">Reserve</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
