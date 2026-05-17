import { BRAND } from "@/lib/site-data";

export function WhatsAppPill() {
  return (
    <a
      href={BRAND.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 bg-noir-deep border border-creme/15 hover:border-brass px-4 py-3 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]"
    >
      <span className="relative flex size-2.5">
        <span className="absolute inset-0 rounded-full bg-brass opacity-60 animate-ping" />
        <span className="relative rounded-full size-2.5 bg-brass" />
      </span>
      <span className="text-eyebrow text-creme group-hover:text-brass transition-colors">
        WhatsApp Concierge
      </span>
    </a>
  );
}
