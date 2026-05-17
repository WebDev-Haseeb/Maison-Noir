import { Star } from "lucide-react";

const MARQUEE_ITEMS = [
  "Precision Cuts",
  "Traditional Shaves",
  "Bespoke Rituals",
  "Gulberg Lahore",
  "DHA Karachi",
  "Private Grooming",
  "Master Barbers",
  "Heritage Craft",
];

export function MarqueeBanner() {
  return (
    <section className="border-y border-creme/10 bg-noir-deep overflow-hidden py-6 lg:py-8">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap pr-8">
          {MARQUEE_ITEMS.map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-eyebrow text-creme/60 text-sm uppercase tracking-[0.2em]">
                {item}
              </span>
              <Star className="w-3 h-3 text-brass/60 fill-brass/60" />
            </div>
          ))}
        </div>
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap pr-8" aria-hidden="true">
          {MARQUEE_ITEMS.map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-eyebrow text-creme/60 text-sm uppercase tracking-[0.2em]">
                {item}
              </span>
              <Star className="w-3 h-3 text-brass/60 fill-brass/60" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
