import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { BRAND, LOCATIONS, SERVICES, STYLISTS, TESTIMONIALS } from "@/lib/site-data";
import heroPortrait from "@/assets/hero-portrait.jpg";
import interiorWide from "@/assets/interior-wide.jpg";
import detailTools from "@/assets/detail-tools.jpg";
import detailChair from "@/assets/detail-chair.jpg";
import look1 from "@/assets/look-1.jpg";
import look2 from "@/assets/look-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Noir — Grooming Atelier · Lahore & Karachi" },
      { name: "description", content: "A private grooming atelier for the modern South Asian gentleman. Precision cuts, traditional shaves, and bespoke rituals in Gulberg and DHA." },
      { property: "og:title", content: "Maison Noir — Grooming Atelier" },
      { property: "og:description", content: "A private grooming atelier for the modern South Asian gentleman." },
      { property: "og:image", content: heroPortrait },
      { name: "twitter:image", content: heroPortrait },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteShell>
      <Hero />
      <Manifesto />
      <ServicesPreview />
      <ArtisansPreview />
      <Ambience />
      <Lookbook />
      <Testimonials />
      <BookingCta />
    </SiteShell>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroPortrait}
          alt="A man with a precisely groomed beard in a dimly lit espresso-toned atelier."
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center animate-slow-zoom"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/40 to-noir/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-noir/70 via-transparent to-noir/30" />
      </div>

      {/* Side rail */}
      <div className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left z-10 items-center gap-4 text-eyebrow text-creme/50">
        <span className="h-px w-12 bg-creme/30" />
        <span>Est. {BRAND.established} · Lahore · Karachi</span>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-10 pb-20 lg:pb-28 pt-32">
        <div className="grid grid-cols-12 gap-6 items-end">
          <Reveal className="col-span-12 lg:col-span-9">
            <div className="text-eyebrow text-brass mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-brass" />
              Grooming Atelier — Pakistan
            </div>
            <h1 className="font-serif font-medium leading-[0.95] text-balance text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] tracking-[-0.01em]">
              The quiet confidence
              <br />
              of <em className="italic text-brass">exceptional</em> craft.
            </h1>
          </Reveal>

          <Reveal delay={200} className="col-span-12 lg:col-span-5 lg:col-start-8 mt-10 lg:mt-12">
            <p className="font-serif italic text-xl md:text-2xl text-creme/70 max-w-md leading-snug">
              A sanctuary for the modern gentleman, where tradition meets technical precision in the heart of Gulberg and DHA.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/book"
                className="inline-flex items-center gap-3 bg-brass text-noir px-7 py-3.5 text-eyebrow font-semibold hover:bg-creme transition-colors"
              >
                Reserve Your Chair
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 border border-creme/20 px-7 py-3.5 text-eyebrow text-creme hover:bg-creme/5 transition-colors"
              >
                View the Menu
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 right-6 lg:right-10 z-10 flex items-center gap-3 text-eyebrow text-creme/40">
        <span>Scroll</span>
        <span className="h-px w-10 bg-creme/30" />
      </div>
    </section>
  );
}

/* ───────────────────── Manifesto strip ─────────────────── */
function Manifesto() {
  return (
    <section className="border-y border-creme/5 py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-12 gap-8">
        <Reveal className="col-span-12 md:col-span-2 text-eyebrow text-brass">
          (Manifesto)
        </Reveal>
        <Reveal delay={100} className="col-span-12 md:col-span-10">
          <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.15] text-creme/85 text-balance max-w-5xl">
            We believe a haircut is not a transaction. It is forty minutes of stillness in a city that does not stop — a quiet, weekly act of self-regard performed by hands that know your face.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ────────────────────── Services list ──────────────────── */
function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 lg:mb-24">
          <div>
            <div className="text-eyebrow text-brass mb-4">(01) Signature Services</div>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight max-w-2xl">
              An edited menu, executed with care.
            </h2>
          </div>
          <Link to="/services" className="text-eyebrow text-brass border-b border-brass/40 pb-1 hover:text-creme hover:border-creme transition-colors self-start md:self-end">
            View Full Menu →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-2">
          {SERVICES.slice(0, 4).map((s, i) => (
            <Reveal key={s.no} delay={i * 80}>
              <div className="group flex justify-between items-baseline gap-8 py-7 border-b border-creme/8">
                <div className="flex gap-6 items-baseline min-w-0">
                  <span className="font-mono text-eyebrow text-brass/70 shrink-0">{s.no}</span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl text-creme group-hover:text-brass transition-colors">
                      {s.name}
                    </h3>
                    <p className="text-sm text-creme/50 mt-1.5 text-pretty">{s.blurb}</p>
                  </div>
                </div>
                <span className="font-serif italic text-xl text-creme/80 shrink-0">{s.price}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Artisans preview ────────────────── */
function ArtisansPreview() {
  return (
    <section className="bg-noir-deep py-24 lg:py-32 border-y border-creme/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-16 lg:mb-24 gap-8">
          <div>
            <div className="text-eyebrow text-brass mb-4">(02) The Artisans</div>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight">
              Hands behind <em className="italic">the chair</em>.
            </h2>
          </div>
          <Link to="/stylists" className="hidden sm:inline-block text-eyebrow text-brass border-b border-brass/40 pb-1 hover:text-creme hover:border-creme transition-colors">
            Meet All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {STYLISTS.map((s, i) => (
            <Reveal
              key={s.name}
              delay={i * 120}
              className={i === 1 ? "md:translate-y-12" : i === 2 ? "md:translate-y-24" : ""}
            >
              <div className="group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={s.image}
                    alt={`Portrait of ${s.name}, ${s.role}.`}
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir/60 to-transparent" />
                </div>
                <div className="mt-5 flex items-baseline justify-between gap-4">
                  <div>
                    <h3 className="font-serif text-2xl text-creme">{s.name}</h3>
                    <p className="text-eyebrow text-creme/40 mt-1">{s.role} · {s.city}</p>
                  </div>
                  <span className="font-mono text-eyebrow text-brass">0{i + 1}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Ambience ──────────────────────── */
function Ambience() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-12 gap-4 lg:gap-6">
        <Reveal className="col-span-12 md:col-span-8">
          <div className="relative aspect-[16/10] overflow-hidden group">
            <img
              src={interiorWide}
              alt="Interior of the Gulberg atelier — walnut paneling, cognac leather chairs, brass fittings, soft amber lighting."
              width={1600}
              height={1000}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-[1.04]"
            />
            <div className="absolute bottom-6 left-6 text-creme">
              <div className="text-eyebrow text-brass mb-2">The Gulberg Atelier</div>
              <div className="font-serif text-2xl">A quieter kind of luxury.</div>
            </div>
          </div>
        </Reveal>
        <div className="col-span-12 md:col-span-4 grid grid-rows-2 gap-4 lg:gap-6">
          <Reveal delay={150}>
            <div className="relative aspect-square overflow-hidden group h-full">
              <img src={detailTools} alt="Straight razor, badger brush, and aftershave bottles on dark marble." width={900} height={900} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-[1.06]" />
            </div>
          </Reveal>
          <Reveal delay={250}>
            <div className="relative aspect-square overflow-hidden group h-full">
              <img src={detailChair} alt="Cognac leather barber chair headrest with brass studs." width={900} height={900} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-[1.06]" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────── Lookbook ──────────────────────── */
function Lookbook() {
  return (
    <section className="py-24 lg:py-32 bg-noir-deep border-y border-creme/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex items-end justify-between mb-16 gap-8">
          <div>
            <div className="text-eyebrow text-brass mb-4">(03) Lookbook</div>
            <h2 className="font-serif text-5xl md:text-6xl">Recent work.</h2>
          </div>
          <Link to="/lookbook" className="text-eyebrow text-brass border-b border-brass/40 pb-1 hover:text-creme hover:border-creme transition-colors">
            View Lookbook →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
          <Reveal delay={0}>
            <Tile src={look1} alt="A barber sculpting a beard with scissors and comb." />
          </Reveal>
          <Reveal delay={100} className="md:translate-y-10">
            <Tile src={look2} alt="Profile of a freshly groomed man with a white hot towel." />
          </Reveal>
          <Reveal delay={200}>
            <Tile src={detailTools} alt="Detail of grooming tools on marble." />
          </Reveal>
          <Reveal delay={300} className="md:translate-y-10">
            <Tile src={detailChair} alt="Cognac leather chair headrest detail." />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Tile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden group">
      <img src={src} alt={alt} width={800} height={1000} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]" />
      <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/10 transition-colors duration-500" />
    </div>
  );
}

/* ───────────────────── Testimonials ────────────────────── */
function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-eyebrow text-brass mb-12">(04) Said of the House</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 border-l border-brass/30 pl-8 lg:pl-12">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 120}>
              <blockquote className="space-y-6">
                <p className="font-serif text-xl md:text-2xl italic text-creme/90 leading-snug text-pretty">
                  “{t.quote}”
                </p>
                <cite className="not-italic block">
                  <div className="text-eyebrow text-creme">{t.name}</div>
                  <div className="text-eyebrow text-brass/80 mt-1">{t.city}</div>
                </cite>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Booking CTA + Locations ─────────────────── */
function BookingCta() {
  return (
    <section className="relative py-32 lg:py-44 border-t border-creme/5 overflow-hidden">
      <div
        className="absolute inset-0 -z-10 opacity-25"
        style={{
          background:
            "radial-gradient(ellipse at center top, oklch(0.68 0.09 70 / 0.5), transparent 60%)",
        }}
      />
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
        <Reveal>
          <div className="text-eyebrow text-brass mb-8">(05) Reserve</div>
          <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-balance max-w-4xl mx-auto">
            Secure your chair, <em className="italic text-brass">or the room.</em>
          </h2>
          <p className="text-creme/60 max-w-xl mx-auto mt-8 text-pretty leading-relaxed">
            We recommend booking 48 hours in advance for weekend sessions. Concierge available daily via WhatsApp.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-3 bg-brass text-noir px-10 py-4 text-eyebrow font-semibold hover:bg-creme transition-colors"
            >
              Reserve Online
            </Link>
            <a
              href={BRAND.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 border border-creme/20 px-10 py-4 text-eyebrow text-creme hover:bg-creme/5 transition-colors"
            >
              WhatsApp {BRAND.whatsappDisplay}
            </a>
          </div>
        </Reveal>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto text-left">
          {LOCATIONS.map((loc) => (
            <Reveal key={loc.city} className="border-t border-creme/10 pt-6">
              <div className="text-eyebrow text-brass">{loc.label}</div>
              <div className="font-serif text-3xl mt-3 text-creme">{loc.city}</div>
              <address className="not-italic text-sm text-creme/60 mt-4 leading-relaxed">
                {loc.address1}, {loc.address2}
                <br />
                {loc.hours}
              </address>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
