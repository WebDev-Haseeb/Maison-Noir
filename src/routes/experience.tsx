import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import interiorWide from "@/assets/interior-wide.jpg";
import detailTools from "@/assets/detail-tools.jpg";
import detailChair from "@/assets/detail-chair.jpg";
import look2 from "@/assets/look-2.jpg";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "The Experience · Maison Noir" },
      { name: "description", content: "Step inside the atelier. A quieter kind of luxury, designed in dark walnut, cognac leather, and warm amber light." },
      { property: "og:title", content: "The Experience · Maison Noir" },
      { property: "og:description", content: "Inside the atelier — interiors, ritual, and house philosophy." },
      { property: "og:image", content: interiorWide },
    ],
  }),
  component: ExperiencePage,
});

const STEPS = [
  { no: "I", title: "Arrival", body: "A short walk past the velvet curtain. A single espresso, or a Negroni after seven. Your barber meets you at the chair." },
  { no: "II", title: "Consultation", body: "Five minutes spent on the architecture of your face, the way your hair falls, and what you actually do with your week." },
  { no: "III", title: "The Work", body: "Scissor-over-comb, precision clipper work, hot-towel softening, and a straight-razor finish. Done without conversation if you prefer it that way." },
  { no: "IV", title: "Departure", body: "A cool basalt stone close, a final styling, and a small bottle of our house oil to take home. You leave looking, and quietly feeling, like yourself." },
];

function ExperiencePage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-12 gap-8 items-end">
          <Reveal className="col-span-12 lg:col-span-7">
            <div className="text-eyebrow text-brass mb-6">The Experience</div>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
              A quieter kind <em className="italic text-brass">of luxury.</em>
            </h1>
          </Reveal>
          <Reveal delay={150} className="col-span-12 lg:col-span-5">
            <p className="font-serif italic text-xl md:text-2xl text-creme/65 leading-snug">
              Dark walnut, cognac leather, soft amber pendant light, and the steady weight of a straight razor in a steady hand.
            </p>
          </Reveal>
        </div>
        <Reveal delay={200} className="max-w-[1400px] mx-auto px-6 lg:px-10 mt-16">
          <div className="relative aspect-[21/9] overflow-hidden">
            <img src={interiorWide} alt="Interior of the Gulberg atelier." width={1920} height={820} loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-noir/40 via-transparent to-transparent" />
          </div>
        </Reveal>
      </section>

      {/* The Ritual */}
      <section className="py-24 lg:py-32 border-t border-creme/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-eyebrow text-brass mb-12">(01) The Ritual</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
            {STEPS.map((s, i) => (
              <Reveal key={s.no} delay={i * 100}>
                <div className="border-t border-creme/10 pt-8">
                  <div className="flex items-baseline gap-6">
                    <span className="font-serif italic text-5xl text-brass">{s.no}</span>
                    <h3 className="font-serif text-3xl text-creme">{s.title}</h3>
                  </div>
                  <p className="mt-6 text-creme/65 leading-relaxed max-w-md text-pretty">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Material strip */}
      <section className="py-24 bg-noir-deep border-y border-creme/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="text-eyebrow text-brass mb-10">(02) Materials</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
            <Reveal>
              <figure className="group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={detailChair} alt="Cognac leather chair detail." loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-[1.04]" />
                </div>
                <figcaption className="mt-4 flex justify-between items-baseline">
                  <span className="font-serif text-xl text-creme">Italian leather</span>
                  <span className="text-eyebrow text-creme/40">Cognac · Pieve</span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <figure className="group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={detailTools} alt="Straight razor and badger brush on dark marble." loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-[1.04]" />
                </div>
                <figcaption className="mt-4 flex justify-between items-baseline">
                  <span className="font-serif text-xl text-creme">Japanese steel</span>
                  <span className="text-eyebrow text-creme/40">Feather · Tokyo</span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={240}>
              <figure className="group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={look2} alt="A hot towel finish." loading="lazy" className="w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-[1.04]" />
                </div>
                <figcaption className="mt-4 flex justify-between items-baseline">
                  <span className="font-serif text-xl text-creme">House oil blend</span>
                  <span className="text-eyebrow text-creme/40">Vetiver · Cedar</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing line */}
      <section className="py-32 lg:py-44 text-center border-t border-creme/5">
        <Reveal>
          <p className="font-serif italic text-3xl md:text-5xl text-creme/80 max-w-4xl mx-auto px-6 leading-tight text-balance">
            "We do not chase the trend. We sharpen the man already in the chair."
          </p>
          <Link to="/book" className="inline-block mt-14 bg-brass text-noir px-10 py-4 text-eyebrow font-semibold hover:bg-creme transition-colors">
            Reserve the Experience
          </Link>
        </Reveal>
      </section>
    </SiteShell>
  );
}
