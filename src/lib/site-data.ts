export const BRAND = {
  name: "Maison Noir",
  tagline: "Grooming Atelier",
  established: "2021",
  whatsappDisplay: "0333 444 5555",
  whatsappLink: "https://wa.me/923334445555",
  email: "concierge@maisonnoir.pk",
  instagram: "https://instagram.com/maisonnoir.pk",
};

export const LOCATIONS = [
  {
    city: "Lahore",
    label: "Atelier Lahore",
    address1: "12-K, Gulberg III",
    address2: "Off M.M. Alam Road",
    phone: "+92 42 3577 0000",
    hours: "Mon — Sat · 11:00 — 22:00 · Sun · 13:00 — 20:00",
  },
  {
    city: "Karachi",
    label: "Atelier Karachi",
    address1: "Suite 4-C, 26th Street",
    address2: "DHA Phase 6",
    phone: "+92 21 3524 0000",
    hours: "Mon — Sat · 11:00 — 22:00 · Sun · 13:00 — 20:00",
  },
] as const;

export const SERVICES = [
  {
    no: "01",
    name: "The Maison Signature Cut",
    blurb: "Consultation, precision shear work, hot towel finish, and styling.",
    detail: "A 60-minute ritual built around the architecture of your face. Begins with a private consultation and finishes with hand-styling in your preferred product.",
    duration: "60 min",
    price: "PKR 4,500",
  },
  {
    no: "02",
    name: "Traditional Straight Razor Shave",
    blurb: "Multi-step facial preparation, warm lather, and cold stone finish.",
    detail: "A seven-step shave performed with a single-blade straight razor. Warm towel preparation, badger-hair lathering, and a cool basalt-stone close.",
    duration: "45 min",
    price: "PKR 3,500",
  },
  {
    no: "03",
    name: "Beard Sculpting & Grooming",
    blurb: "Architectural shaping designed around your natural facial structure.",
    detail: "Hot-towel softening, scissor-over-comb work, line-up with the straight razor, and conditioning with our house oil blend.",
    duration: "40 min",
    price: "PKR 2,800",
  },
  {
    no: "04",
    name: "The Atelier Ritual",
    blurb: "Ninety minutes of full grooming including a clarifying facial.",
    detail: "Signature cut, hot-towel shave, deep-cleansing facial with a black-charcoal mask, and a scalp massage. Our most complete experience.",
    duration: "90 min",
    price: "PKR 8,500",
  },
  {
    no: "05",
    name: "Scalp & Hair Restoration",
    blurb: "A clinical-grade scalp treatment and follicle conditioning protocol.",
    detail: "Deep exfoliation, micro-stimulation massage, and a leave-in keratin treatment recommended for thinning or fatigued hair.",
    duration: "50 min",
    price: "PKR 5,200",
  },
  {
    no: "06",
    name: "Private Pre-Wedding Session",
    blurb: "A closed-door grooming residency for the groom and his close circle.",
    detail: "Reserve the atelier privately. Full grooming for up to four guests, complimentary refreshments, and a take-home aftercare kit.",
    duration: "By arrangement",
    price: "From PKR 35,000",
  },
] as const;

import stylist1 from "@/assets/stylist-1.jpg";
import stylist2 from "@/assets/stylist-2.jpg";
import stylist3 from "@/assets/stylist-3.jpg";

export const STYLISTS = [
  {
    name: "Omar Siddiqui",
    role: "Creative Director",
    city: "Lahore",
    image: stylist1,
    bio: "Trained between London and Karachi, Omar shapes the house aesthetic and personally oversees the Signature Cut.",
    signature: "The Architectural Crop",
  },
  {
    name: "Hamza Khan",
    role: "Principal Barber",
    city: "Karachi",
    image: stylist2,
    bio: "A scissor-over-comb specialist with a decade behind the chair. Known for textured, low-maintenance silhouettes.",
    signature: "The Soft Taper",
  },
  {
    name: "Zaid Ahmed",
    role: "Master of Straight Razor",
    city: "Lahore",
    image: stylist3,
    bio: "Trained in the traditional Turkish ustura method. Zaid leads our shaving programme and beard sculpting craft.",
    signature: "The Heritage Shave",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: "An uncompromising approach to grooming. Maison Noir is not a barber shop — it is a quiet hour of restoration in a city that never stops.",
    name: "Ali R.",
    city: "DHA Phase 6, Karachi",
  },
  {
    quote: "Attention to detail that rivals anything I have visited in London or Dubai. Omar is a genuine craftsman.",
    name: "Bilal W.",
    city: "Gulberg III, Lahore",
  },
  {
    quote: "The only place I have walked into for the first time and immediately felt I belonged. The room itself does half the work.",
    name: "Hassan M.",
    city: "Bahria, Islamabad",
  },
] as const;
