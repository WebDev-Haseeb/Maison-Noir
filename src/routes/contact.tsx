import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { BRAND, LOCATIONS } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Locations · Maison Noir" },
      { name: "description", content: "Two ateliers — Gulberg III, Lahore and DHA Phase 6, Karachi. WhatsApp concierge available daily." },
      { property: "og:title", content: "Contact · Maison Noir" },
      { property: "og:description", content: "Find the atelier in Lahore or Karachi." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <section className="pt-40 lg:pt-48 pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="text-eyebrow text-brass mb-6">Contact</div>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
              Two ateliers. <em className="italic text-brass">One standard.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 border-t border-creme/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {LOCATIONS.map((loc, i) => (
            <Reveal key={loc.city} delay={i * 120}>
              <article className="border-t border-creme/10 pt-10 space-y-8">
                <div>
                  <div className="text-eyebrow text-brass">{loc.label}</div>
                  <h2 className="font-serif text-5xl md:text-6xl text-creme mt-3">{loc.city}</h2>
                </div>
                <address className="not-italic text-creme/75 text-lg leading-relaxed">
                  {loc.address1}
                  <br />
                  {loc.address2}
                  <br />
                  {loc.city}, Pakistan
                </address>
                <div className="space-y-2 text-sm text-creme/60">
                  <div className="flex justify-between border-b border-creme/8 pb-2">
                    <span className="text-eyebrow text-creme/40">Phone</span>
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex justify-between border-b border-creme/8 pb-2">
                    <span className="text-eyebrow text-creme/40">Hours</span>
                    <span className="text-right max-w-[60%]">{loc.hours}</span>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${loc.address1} ${loc.address2} ${loc.city} Pakistan`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-eyebrow text-brass border-b border-brass/40 pb-1 hover:text-creme hover:border-creme transition-colors"
                >
                  Open in Maps →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32 border-t border-creme/5 text-center">
        <Reveal>
          <div className="text-eyebrow text-brass mb-6">Concierge</div>
          <a
            href={BRAND.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-5xl md:text-7xl text-creme hover:text-brass transition-colors inline-block"
          >
            {BRAND.whatsappDisplay}
          </a>
          <p className="mt-6 text-creme/50">WhatsApp daily · 11:00 — 22:00</p>
          <div className="mt-4">
            <a href={`mailto:${BRAND.email}`} className="text-eyebrow text-creme/70 hover:text-brass transition-colors">
              {BRAND.email}
            </a>
          </div>
        </Reveal>
      </section>
    </SiteShell>
  );
}
