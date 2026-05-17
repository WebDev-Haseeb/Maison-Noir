import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import heroPortrait from "@/assets/hero-portrait.jpg";
import interiorWide from "@/assets/interior-wide.jpg";
import detailTools from "@/assets/detail-tools.jpg";
import detailChair from "@/assets/detail-chair.jpg";
import look1 from "@/assets/look-1.jpg";
import look2 from "@/assets/look-2.jpg";
import stylist1 from "@/assets/stylist-1.jpg";
import stylist2 from "@/assets/stylist-2.jpg";
import stylist3 from "@/assets/stylist-3.jpg";

export const Route = createFileRoute("/lookbook")({
  head: () => ({
    meta: [
      { title: "Lookbook · Maison Noir" },
      { name: "description", content: "Recent work from the Maison Noir floor — cuts, beards, rooms, and details." },
      { property: "og:title", content: "Lookbook · Maison Noir" },
      { property: "og:description", content: "An editorial gallery of recent work." },
      { property: "og:image", content: look1 },
    ],
  }),
  component: LookbookPage,
});

interface Tile { src: string; alt: string; tag: string; span?: string; }

const TILES: Tile[] = [
  { src: look1, alt: "Beard sculpting in progress.", tag: "Beard — Lahore", span: "md:row-span-2 aspect-[3/4]" },
  { src: look2, alt: "Profile of a freshly groomed gentleman with hot towel.", tag: "Signature Cut — Karachi", span: "aspect-[4/3]" },
  { src: detailTools, alt: "Detail of grooming tools.", tag: "Tools", span: "aspect-square" },
  { src: heroPortrait, alt: "Portrait of a man in a charcoal turtleneck.", tag: "Editorial", span: "md:col-span-2 aspect-[16/10]" },
  { src: interiorWide, alt: "Atelier interior.", tag: "Gulberg Atelier", span: "md:row-span-2 aspect-[3/4]" },
  { src: stylist1, alt: "Omar Siddiqui.", tag: "Master Barber", span: "aspect-square" },
  { src: detailChair, alt: "Leather barber chair headrest.", tag: "Detail", span: "aspect-square" },
  { src: stylist2, alt: "Hamza Khan with shears.", tag: "Behind the Chair", span: "aspect-[4/5]" },
  { src: stylist3, alt: "Zaid Ahmed in the atelier.", tag: "Heritage Shave", span: "md:col-span-2 aspect-[16/10]" },
];

function LookbookPage() {
  return (
    <SiteShell>
      <section className="pt-40 lg:pt-48 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-end justify-between gap-8 flex-wrap">
          <Reveal>
            <div className="text-eyebrow text-brass mb-6">Lookbook</div>
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95]">
              Edition <em className="italic text-brass">24/01</em>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="font-mono text-eyebrow text-creme/40 max-w-xs">
              An editorial archive of recent work — cuts, beards, rooms, and the small details in between.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-32 border-t border-creme/5 pt-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto gap-3 lg:gap-4">
            {TILES.map((t, i) => (
              <Reveal key={i} delay={(i % 3) * 80} className={t.span ?? "aspect-square"}>
                <figure className="group relative h-full w-full overflow-hidden">
                  <img
                    src={t.src}
                    alt={t.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
                  />
                  <figcaption className="absolute bottom-3 left-3 text-eyebrow text-creme opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {t.tag}
                  </figcaption>
                  <div className="absolute inset-0 bg-noir/0 group-hover:bg-noir/15 transition-colors duration-500" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
