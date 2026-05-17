import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { SERVICES } from "@/lib/site-data";
import interiorWide from "@/assets/interior-wide.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services · Maison Noir Grooming Atelier" },
      { name: "description", content: "The full Maison Noir menu — signature cuts, traditional shaves, beard sculpting, the Atelier Ritual, and private pre-wedding sessions." },
      { property: "og:title", content: "Services · Maison Noir" },
      { property: "og:description", content: "Signature cuts, traditional shaves, and bespoke rituals." },
      { property: "og:image", content: interiorWide },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteShell>
      <section className="pt-40 lg:pt-48 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="text-eyebrow text-brass mb-6">Menu d'Atelier</div>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
              Six services. <em className="italic text-brass">No fillers.</em>
            </h1>
            <p className="font-serif italic text-xl md:text-2xl text-creme/60 max-w-xl mt-10 leading-snug">
              Every appointment includes consultation, hot-towel preparation, and a curated refreshment menu.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 border-t border-creme/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ul className="divide-y divide-creme/8">
            {SERVICES.map((s, i) => (
              <Reveal key={s.no} delay={i * 60} as="div">
                <li className="grid grid-cols-12 gap-6 py-10 lg:py-14 group">
                  <div className="col-span-12 md:col-span-1 font-mono text-eyebrow text-brass/70">{s.no}</div>
                  <div className="col-span-12 md:col-span-6">
                    <h2 className="font-serif text-3xl md:text-4xl text-creme group-hover:text-brass transition-colors">
                      {s.name}
                    </h2>
                    <p className="mt-4 text-creme/60 max-w-xl leading-relaxed text-pretty">{s.detail}</p>
                  </div>
                  <div className="col-span-6 md:col-span-2 text-eyebrow text-creme/40">{s.duration}</div>
                  <div className="col-span-6 md:col-span-3 text-right">
                    <div className="font-serif italic text-2xl md:text-3xl text-creme">{s.price}</div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-24 lg:py-32 text-center border-t border-creme/5">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl">Ready to book?</h2>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/book" className="bg-brass text-noir px-10 py-4 text-eyebrow font-semibold hover:bg-creme transition-colors">
              Reserve a Chair
            </Link>
            <Link to="/stylists" className="border border-creme/20 px-10 py-4 text-eyebrow text-creme hover:bg-creme/5 transition-colors">
              Meet the Artisans
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
