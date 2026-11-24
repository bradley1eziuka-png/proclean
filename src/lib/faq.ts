// Homepage FAQ. Answers that mention a specific service are only shown while
// that service is enabled in services.ts, so disabling a service never leaves
// a stale FAQ behind. Edit freely per client.

import { services, serviceTitleList } from "./services";

export type Faq = { q: string; a: string };

type FaqSource = Faq & {
  /** Only show this question when this service slug is enabled. */
  requiresService?: string;
};

const sources = (): FaqSource[] => [
  {
    q: "What cleaning services do you offer?",
    a: `Pro-Clean specializes in commercial cleaning. We offer ${serviceTitleList()}.`,
  },
  {
    q: "Do you clean offices and commercial spaces?",
    a: "Yes. Commercial and office cleaning is our specialty. We serve businesses in Pittston and surrounding communities.",
    requiresService: "commercial-cleaning",
  },
  {
    q: "Are you bonded and insured?",
    a: "Yes. Pro-Clean Commercial Cleaning LLC is fully bonded and insured.",
  },
  {
    q: "Where do you provide service?",
    a: "We're based at 259 Market St in Pittston, PA, and serve Pittston and surrounding communities within approximately 50 miles.",
  },
  {
    q: "Are you COVID-19 compliant, and do you offer sanitization?",
    a: "Yes. Pro-Clean is COVID-19 compliant and offers hospital-grade sanitization and disinfection for commercial spaces.",
    requiresService: "commercial-sanitization-disinfection",
  },
  {
    q: "How do I get a quote?",
    a: "Use the quote form on this page, call (570) 762-0082, or visit the contact page. Share a few details about your space and the service you need, and we'll follow up.",
  },
  {
    q: "What are your hours?",
    a: "We're available Monday through Sunday, 7:00 AM to 7:00 PM.",
  },
  {
    q: "Do you clean foreclosed or move-out properties?",
    a: "Yes. Foreclosure and move-out cleaning is one of our core services.",
    requiresService: "foreclosure-move-out-cleaning",
  },
  {
    q: "Do you offer carpet cleaning?",
    a: "Yes. We provide carpet cleaning for commercial spaces. Request a free quote with the details of your space.",
    requiresService: "carpet-cleaning",
  },
];

export function getHomeFaqs(): Faq[] {
  const enabled = new Set(services.map((s) => s.slug));
  return sources()
    .filter((f) => !f.requiresService || enabled.has(f.requiresService))
    .map(({ q, a }) => ({ q, a }));
}
