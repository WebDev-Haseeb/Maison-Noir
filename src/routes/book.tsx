import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteShell } from "@/components/site/SiteShell";
import { Reveal } from "@/components/site/Reveal";
import { AppleSelect } from "@/components/ui/apple-select";
import { BRAND, LOCATIONS, SERVICES, STYLISTS } from "@/lib/site-data";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Reserve a Chair · Maison Noir" },
      { name: "description", content: "Reserve your session at Maison Noir Lahore or Karachi. Submit the form and we'll confirm via WhatsApp within the hour." },
      { property: "og:title", content: "Reserve · Maison Noir" },
      { property: "og:description", content: "A frictionless booking ritual." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "Lahore" as "Lahore" | "Karachi",
    service: SERVICES[0].name as string,
    stylist: "No preference" as string,
    date: "",
    time: "",
    notes: "",
  });

  const whatsappHref = useMemo(() => {
    const lines = [
      `Salaam — I'd like to reserve a chair at Maison Noir.`,
      ``,
      `Name: ${form.name || "—"}`,
      `Phone: ${form.phone || "—"}`,
      `Atelier: ${form.city}`,
      `Service: ${form.service}`,
      `Stylist: ${form.stylist}`,
      `Date: ${form.date || "—"}`,
      `Preferred time: ${form.time || "—"}`,
      form.notes ? `Notes: ${form.notes}` : "",
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    return `${BRAND.whatsappLink}?text=${text}`;
  }, [form]);

  function update<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.open(whatsappHref, "_blank", "noopener,noreferrer");
  }

  return (
    <SiteShell>
      <section className="pt-40 lg:pt-48 pb-12">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="text-eyebrow text-brass mb-6">Reserve</div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] max-w-4xl">
              Secure your <em className="italic text-brass">chair.</em>
            </h1>
            <p className="font-serif italic text-xl md:text-2xl text-creme/60 max-w-2xl mt-10 leading-snug">
              We confirm every booking personally over WhatsApp within the hour. Submitting this form opens a pre-filled message — no app, no account.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 lg:py-24 border-t border-creme/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="col-span-12 lg:col-span-8">
            <form onSubmit={onSubmit} className="space-y-12">
              <Field label="01 — Your name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Full name"
                  className="w-full bg-transparent border-b border-creme/15 focus:border-brass outline-none py-3 text-2xl font-serif text-creme placeholder:text-creme/25 transition-colors"
                />
              </Field>

              <Field label="02 — WhatsApp / Phone">
                <input
                  required
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="0333 444 5555"
                  inputMode="tel"
                  className="w-full bg-transparent border-b border-creme/15 focus:border-brass outline-none py-3 text-2xl font-serif text-creme placeholder:text-creme/25 transition-colors"
                />
              </Field>

              <Field label="03 — Atelier">
                <AppleSelect
                  value={form.city}
                  onChange={(value) => update("city", value as "Lahore" | "Karachi")}
                  options={LOCATIONS.map((l) => ({ value: l.city, label: l.city }))}
                  placeholder="Select your atelier"
                />
              </Field>

              <Field label="04 — Service">
                <AppleSelect
                  value={form.service}
                  onChange={(value) => update("service", value)}
                  options={SERVICES.map((s) => ({ value: s.name, label: `${s.name} — ${s.price}` }))}
                  placeholder="Select a service"
                />
              </Field>

              <Field label="05 — Preferred barber">
                <div className="flex gap-3 flex-wrap">
                  <Chip active={form.stylist === "No preference"} onClick={() => update("stylist", "No preference")}>
                    No preference
                  </Chip>
                  {STYLISTS.map((s) => (
                    <Chip key={s.name} active={form.stylist === s.name} onClick={() => update("stylist", s.name)}>
                      {s.name}
                    </Chip>
                  ))}
                </div>
              </Field>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <Field label="06 — Date">
                  <input
                    type="date"
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    className="w-full bg-transparent border-b border-creme/15 focus:border-brass outline-none py-3 text-xl font-serif text-creme transition-colors"
                  />
                </Field>
                <Field label="07 — Time">
                  <input
                    type="time"
                    value={form.time}
                    onChange={(e) => update("time", e.target.value)}
                    className="w-full bg-transparent border-b border-creme/15 focus:border-brass outline-none py-3 text-xl font-serif text-creme transition-colors"
                  />
                </Field>
              </div>

              <Field label="08 — Anything we should know (optional)">
                <textarea
                  value={form.notes}
                  onChange={(e) => update("notes", e.target.value)}
                  rows={3}
                  placeholder="Reference photo, allergy, occasion…"
                  className="w-full bg-transparent border-b border-creme/15 focus:border-brass outline-none py-3 text-lg font-serif text-creme placeholder:text-creme/25 transition-colors resize-none"
                />
              </Field>

              <div className="pt-6 flex flex-wrap items-center gap-6">
                <button
                  type="submit"
                  className="bg-brass text-noir px-10 py-4 text-eyebrow font-semibold hover:bg-creme transition-colors"
                >
                  Send via WhatsApp
                </button>
                <span className="text-eyebrow text-creme/40">
                  → opens {BRAND.whatsappDisplay}
                </span>
              </div>
            </form>
          </Reveal>

          <Reveal delay={150} className="col-span-12 lg:col-span-4">
            <aside className="lg:sticky lg:top-32 space-y-10 border-l border-creme/10 pl-8 lg:pl-10">
              <div>
                <div className="text-eyebrow text-brass mb-4">House Notes</div>
                <p className="font-serif italic text-xl text-creme/75 leading-snug">
                  Reservations are confirmed in person. Weekends fill quickly — we recommend booking 48 hours ahead.
                </p>
              </div>
              <div>
                <div className="text-eyebrow text-brass mb-4">Concierge</div>
                <a href={BRAND.whatsappLink} target="_blank" rel="noopener noreferrer" className="font-serif text-2xl text-creme hover:text-brass transition-colors">
                  {BRAND.whatsappDisplay}
                </a>
                <p className="text-sm text-creme/40 mt-2">Daily · 11:00 — 22:00</p>
              </div>
              <div>
                <div className="text-eyebrow text-brass mb-4">Ateliers</div>
                <ul className="space-y-4">
                  {LOCATIONS.map((l) => (
                    <li key={l.city} className="text-sm text-creme/65 leading-relaxed">
                      <div className="font-serif text-lg text-creme">{l.city}</div>
                      {l.address1}, {l.address2}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </SiteShell>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <div className="text-eyebrow text-brass">{label}</div>
      {children}
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-5 py-2.5 text-eyebrow border transition-colors ${
        active ? "bg-brass text-noir border-brass" : "border-creme/15 text-creme/70 hover:border-brass hover:text-brass"
      }`}
    >
      {children}
    </button>
  );
}
