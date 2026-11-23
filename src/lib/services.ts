// ─────────────────────────────────────────────────────────────────────────
//  SERVICE CATALOG  ← edit this file to change which services a client offers
//  ─────────────────────────────────────────────────────────────────────────
//  One entry per service. Everything else is generated from this list:
//    • homepage services grid        • header dropdown (desktop + mobile)
//    • footer service links          • estimate-form dropdown
//    • /services overview            • /services/<slug> pages
//    • "Explore other services"      • sitemap.xml and structured data
//
//  • Add a service    → copy an entry, give it a unique `slug`.
//  • Remove a service → delete the entry (or set `enabled: false` to keep it on file).
//  • Reorder          → move entries up/down (array order = display order).
//  • Priority         → `priority: true` lists a service first in "other services"
//                       and in SEO copy/structured data.
//  • Images           → point `image` / `heroImage` at any file in /public/images.
//
//  Disabled services disappear everywhere (links, form, sitemap) and their URL
//  returns a real 404, so nothing is left broken or stale.
// ─────────────────────────────────────────────────────────────────────────

import { IMG } from "./images";

export type Service = {
  /** URL segment: the page lives at /services/<slug>. Lowercase letters, numbers and hyphens only. */
  slug: string;
  /** Set false to hide the service everywhere without deleting its content. */
  enabled: boolean;
  /** Marks a flagship service (listed first in related services + SEO copy). */
  priority: boolean;
  title: string;
  short: string;
  card: string;
  image: string;
  imageAlt: string;
  heroImage: string;
  heroAlt: string;
  eyebrow: string;
  tagline: string;
  intro: string;
  overview: string;
  tasks: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  /** Optional custom <title> for the service page (otherwise "<title> | <business name>"). */
  seoTitle?: string;
  /** Optional custom meta description for the service page. */
  seoDescription?: string;
};

const allServices: Service[] = [
  {
    slug: "commercial-cleaning",
    enabled: true,
    priority: true,
    title: "Commercial Cleaning",
    short: "Dependable cleaning for businesses and commercial spaces.",
    card: "Dependable, professional cleaning that keeps your business looking its best for employees and customers.",
    image: IMG.commercialCleaning,
    imageAlt: "Cleaner wiping a glass door in a commercial office",
    heroImage: IMG.commercialCleaning,
    heroAlt: "Cleaner wiping a glass door in a commercial office",
    eyebrow: "Commercial Cleaning",
    tagline: "Workspaces that feel taken care of.",
    intro:
      "Help your business put its best foot forward with reliable commercial cleaning from a fully bonded and insured, locally owned company.",
    overview:
      "Commercial cleaning is what Pro-Clean does. With 16 years of industry experience, John J. DeLeo and the Pro-Clean team keep the places where people work and welcome customers clean and professional. We'll talk through your space and build a plan that fits your business.",
    tasks: [
      "Workstations, desks, and shared surfaces wiped",
      "Break rooms and kitchenettes cleaned",
      "Restrooms cleaned and sanitized",
      "Entry and reception areas tidied",
      "Hard floors mopped and carpets vacuumed",
      "Glass doors and high-touch points wiped down",
    ],
    benefits: [
      "A professional first impression for customers and visitors",
      "Fully bonded and insured",
      "Locally owned, with 16 years of industry experience",
    ],
    faqs: [
      {
        q: "Can you clean outside of business hours?",
        a: "Scheduling can be discussed when you request your quote so cleaning fits around your operations. Pro-Clean's office hours are Monday through Sunday, 7:00 AM to 7:00 PM.",
      },
      {
        q: "Are you bonded and insured?",
        a: "Yes. Pro-Clean Commercial Cleaning LLC is fully bonded and insured.",
      },
    ],
  },
  {
    slug: "office-cleaning",
    enabled: true,
    priority: true,
    title: "Office Cleaning",
    short: "Clean, organized offices your team and clients will notice.",
    card: "Keep your office clean and welcoming for your team and your clients with dependable office cleaning.",
    image: IMG.officeCleaning,
    imageAlt: "Cleaner wiping down an office desk",
    heroImage: IMG.officeCleaning,
    heroAlt: "Cleaner wiping down an office desk",
    eyebrow: "Office Cleaning",
    tagline: "A cleaner office, every day it matters.",
    intro:
      "A clean office supports a better workday. Pro-Clean provides dependable office cleaning for businesses in Pittston and surrounding communities.",
    overview:
      "From reception to workstations, conference rooms to restrooms, office cleaning keeps your workplace clean, comfortable, and presentable. We'll discuss your office, your schedule, and your priorities, then tailor the service to fit.",
    tasks: [
      "Desks, workstations, and common surfaces wiped",
      "Reception and waiting areas tidied",
      "Conference rooms cleaned",
      "Restrooms cleaned and sanitized",
      "Break rooms wiped down",
      "Floors vacuumed and mopped",
    ],
    benefits: [
      "A workplace your team and clients feel good in",
      "Service tailored to your office and schedule",
      "Fully bonded and insured",
    ],
    faqs: [
      {
        q: "How often can you clean my office?",
        a: "Frequency depends on your needs. Tell us about your office when you request a quote and we'll discuss the schedule that works for you.",
      },
      {
        q: "Can I get a quote for my office?",
        a: "Yes. Use the quote form or call (570) 762-0082 and share a few details about your space.",
      },
    ],
  },
  {
    slug: "carpet-cleaning",
    enabled: true,
    priority: false,
    title: "Carpet Cleaning",
    short: "Fresher, cleaner carpets for your business.",
    card: "Professional carpet cleaning to help refresh the look and feel of your commercial space.",
    image: IMG.carpetCleaning,
    imageAlt: "Commercial carpet extraction equipment in an office corridor",
    heroImage: IMG.carpetCleaning,
    heroAlt: "Commercial carpet extraction equipment in an office corridor",
    eyebrow: "Carpet Cleaning",
    tagline: "Fresher floors, a better first impression.",
    intro:
      "Carpets take a beating in busy workplaces. Pro-Clean's carpet cleaning helps your commercial space look and feel fresher.",
    overview:
      "High-traffic carpet shows wear quickly. Professional carpet cleaning helps restore the appearance of your floors and supports a cleaner, more inviting space. Tell us about your carpeted areas and we'll provide a free quote.",
    tasks: [
      "Carpeted offices, hallways, and common areas",
      "Attention to high-traffic areas",
      "Spot and stain treatment as appropriate",
      "Service scheduled around your business",
    ],
    benefits: [
      "A fresher, cleaner-looking workplace",
      "Free quote with no obligation",
      "Fully bonded and insured",
    ],
    faqs: [
      {
        q: "How do I get a carpet cleaning quote?",
        a: "Share the size and type of the space you'd like cleaned using the quote form, or call (570) 762-0082, and we'll follow up with your free quote.",
      },
      {
        q: "Can carpet cleaning be scheduled around my business?",
        a: "Scheduling can be discussed when you request your quote so the work fits around your operations.",
      },
    ],
  },
  {
    slug: "foreclosure-move-out-cleaning",
    enabled: true,
    priority: false,
    title: "Foreclosure & Move-Out Cleaning",
    short: "Get vacant properties clean and ready for what's next.",
    card: "Detailed cleaning for foreclosed, vacant, and move-out properties so they're ready for their next chapter.",
    image: IMG.foreclosureMoveOut,
    imageAlt: "Cleaning cabinets inside a vacant property",
    heroImage: IMG.foreclosureMoveOut,
    heroAlt: "Cleaning cabinets inside a vacant property",
    eyebrow: "Foreclosure & Move-Out",
    tagline: "Ready for what's next.",
    intro:
      "Property managers, landlords, and property owners can count on Pro-Clean to get vacant, foreclosed, and move-out properties clean and ready.",
    overview:
      "Vacant properties need a thorough clean before they can be listed, rented, or handed over. Pro-Clean provides foreclosure and move-out cleaning for properties in Pittston and surrounding communities. Tell us about the property and we'll provide a free quote.",
    tasks: [
      "Kitchens and bathrooms cleaned",
      "Floors vacuumed and mopped",
      "Window sills, ledges, and baseboards wiped",
      "Closets and corners cleared of dust and debris",
      "Light fixtures and switch plates wiped down",
    ],
    benefits: [
      "Helps vacant properties show and rent better",
      "Thorough coverage of empty spaces",
      "Fully bonded and insured",
    ],
    faqs: [
      {
        q: "Do you clean foreclosed or vacant properties?",
        a: "Yes. Foreclosure and move-out cleaning is one of Pro-Clean's core services.",
      },
      {
        q: "How do I get a quote?",
        a: "Use the quote form or call (570) 762-0082 with the property details and we'll get back to you with a free quote.",
      },
    ],
  },
];

/** Enabled services, in display order. Import this everywhere a service list is needed. */
export const services: Service[] = allServices.filter((s) => s.enabled);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceSlugs = services.map((s) => s.slug);

/** Other enabled services, priority ones first (keeps configured order within each group). */
export function relatedServices(slug: string): Service[] {
  const others = services.filter((s) => s.slug !== slug);
  return [...others.filter((s) => s.priority), ...others.filter((s) => !s.priority)];
}

/** Human list of enabled service titles, e.g. "House Cleaning, Deep Cleaning and Recurring Cleaning". */
export function serviceTitleList(): string {
  const titles = services.map((s) => s.title);
  if (titles.length <= 1) return titles.join("");
  return `${titles.slice(0, -1).join(", ")} and ${titles[titles.length - 1]}`;
}
