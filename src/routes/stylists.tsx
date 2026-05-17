import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { STYLISTS } from "@/lib/site-data";

export const Route = createFileRoute("/stylists")({
  head: () => ({
    meta: [
      { title: "The Artisans · Maison Noir" },
      { name: "description", content: "Meet the master barbers behind Maison Noir — Omar Siddiqui, Hamza Khan, and Zaid Ahmed." },
      { property: "og:title", content: "The Artisans · Maison Noir" },
      { property: "og:description", content: "Master barbers shaping the house aesthetic." },
      { property: "og:image", content: STYLISTS[0].image },
    ],
  }),
  component: StylistsPage,
});

function StylistsPage() {
  return (
    <SiteShell>
      <section className="pt-40 lg:pt-48 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="text-eyebrow text-brass mb-6">The Artisans</div>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
              You don't go to a salon. <em className="italic text-brass">You go to a barber.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 border-t border-creme/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 space-y-32 lg:space-y-44">
          {STYLISTS.map((s, i) => (
            <Reveal key={s.name} as="div">
              <div className={`grid grid-cols-12 gap-6 lg:gap-12 items-end ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                <div className="col-span-12 md:col-span-7 [direction:ltr]">
                  <div className="relative aspect-[4/5] overflow-hidden group">
                    <img
                      src={s.image}
                      alt={`Portrait of ${s.name}, ${s.role}, ${s.city}.`}
                      width={800}
                      height={1000}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
                <div className="col-span-12 md:col-span-5 [direction:ltr] space-y-6">
                  <div className="font-mono text-eyebrow text-brass">0{i + 1} / {STYLISTS.length.toString().padStart(2, "0")}</div>
                  <h2 className="font-serif text-5xl md:text-6xl leading-tight">{s.name}</h2>
                  <div className="text-eyebrow text-creme/50">{s.role} — {s.city}</div>
                  <p className="text-creme/70 leading-relaxed text-pretty max-w-md">{s.bio}</p>
                  <div className="pt-4 border-t border-creme/10 flex items-baseline justify-between max-w-sm">
                    <span className="text-eyebrow text-creme/40">Signature</span>
                    <span className="font-serif italic text-xl text-brass">{s.signature}</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32 text-center border-t border-creme/5">
        <Link to="/book" className="inline-block bg-brass text-noir px-10 py-4 text-eyebrow font-semibold hover:bg-creme transition-colors">
          Request a Specific Barber
        </Link>
      </section>
    </SiteShell>
  );
}
