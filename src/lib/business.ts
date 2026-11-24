// ─────────────────────────────────────────────────────────────────────────
//  CENTRAL BUSINESS CONFIGURATION  ← the main file to edit for each client
//  ─────────────────────────────────────────────────────────────────────────
//  Everything business-specific on the website (name, phone, email, colors,
//  logo, images, service area, SEO, lead form) is read from this file.
//  Services live in  src/lib/services.ts  (see CLIENT_SETUP.md).
//
//  Values here are baked into the site at build time, so server-rendered HTML,
//  page titles, meta tags and structured data always match what visitors see.
//
//  Leave a field as "" (or [] / null) when it does not apply. Anything left
//  blank is simply not displayed – the template never invents business facts.
// ─────────────────────────────────────────────────────────────────────────

import { IMG, type ImageRef } from "./images";

export type FormProvider = "formspree" | "demo";

export interface BusinessConfig {
  // ── Identity ──────────────────────────────────────────────────────────
  /** Customer-facing business name (logo, headings, titles, footer). */
  name: string;
  /** Registered/legal name. Falls back to `name` when blank. Used in © line + structured data. */
  legalName: string;
  /** Short tagline shown under the homepage headline. */
  tagline: string;
  /** One or two sentences describing the business (footer + default meta description). */
  description: string;
  /** Optional founding story. When non-empty it appears on the About page. Do not invent one. */
  foundingStory: string;
  /** Short descriptor shown above the homepage headline, e.g. "Professional Commercial Cleaning". */
  businessType: string;
  /** schema.org type for structured data. "LocalBusiness" is always valid; "ProfessionalService" also works. */
  schemaType: string;

  // ── Contact ───────────────────────────────────────────────────────────
  contact: {
    /** Main business phone. Drives every tel: link and the structured data. */
    phone: string;
    /** Phone text shown on the site. Leave "" to display `phone` as written. */
    displayPhone: string;
    /** Public email address. Leave "" to hide. */
    email: string;
    /** Physical address (only shown when `showAddress` is true; always omitted from structured data otherwise). */
    address: { street: string; city: string; state: string; postalCode: string };
    showAddress: boolean;
    /** e.g. [{ days: "Mon–Fri", hours: "8am – 5pm" }]. Leave [] to hide. */
    hours: { days: string; hours: string }[];
  };

  // ── Service area / marketing ──────────────────────────────────────────
  location: {
    primaryCity: string;
    state: string;
    /** Additional cities/areas served. Only list places the business genuinely serves. */
    serviceAreas: string[];
  };
  /** Selling points. Shown on the homepage "Why Choose Us" list and the About page cards. */
  differentiators: { title: string; description: string; icon: DifferentiatorIcon }[];
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
    tiktok: string;
    linkedin: string;
    x: string;
    nextdoor: string;
    yelp: string;
  };
  googleBusinessProfileUrl: string;

  // ── Branding ──────────────────────────────────────────────────────────
  branding: {
    /** Browser-tab icon in /public (SVG or PNG). Leave "" for none. */
    favicon: string;
    logo: {
      /** Path to a logo file in /public (e.g. "/images/logo.svg"). Leave "" to use the built-in text logo. */
      src: string;
      alt: string;
      /** Small italic line under the name in the text logo (e.g. "cleaning co."). Leave "" to hide. */
      subtitle: string;
    };
    /**
     * Optional brand color overrides – any CSS color (hex, rgb(), oklch()).
     * Leave "" to keep the master template's navy palette from src/styles.css.
     */
    colors: {
      primary: string;
      /** Text/icon color used on top of `primary` (buttons, CTA band). Default: near-white. */
      primaryForeground: string;
      secondary: string;
      accent: string;
    };
  };

  // ── Images (files live in /public/images) ─────────────────────────────
  images: {
    hero: ImageRef;
    about: ImageRef;
    servicesHero: ImageRef;
    contactHero: ImageRef;
    reviewsHero: ImageRef;
    /** Social-share image path (1200×630 recommended). Leave "" to fall back to the hero image. */
    ogImage: string;
  };
  gallery: {
    /**
     * true  = the images below are stock/demonstration images and are labelled as samples.
     * false = they are the business's real project photos; sample labels are hidden.
     */
    isSample: boolean;
    images: ImageRef[];
  };

  // ── Lead form ─────────────────────────────────────────────────────────
  form: {
    /** "formspree" posts to `endpoint`. "demo" never sends anything (and says so on screen). */
    provider: FormProvider;
    /** Full Formspree endpoint, e.g. "https://formspree.io/f/xxxxxxxx". Blank = automatic demo mode. */
    endpoint: string;
    successTitle: string;
    /** Shown after a successful submission. `{name}` is replaced with the business name. */
    successMessage: string;
    /** Shown when submission fails. */
    errorMessage: string;
  };

  // ── SEO / launch ──────────────────────────────────────────────────────
  seo: {
    /**
     * Canonical production origin with no trailing slash, e.g. "https://www.clientdomain.com".
     * Used for canonical URLs, the sitemap, Open Graph and structured data.
     */
    siteUrl: string;
    /**
     * LAUNCH SWITCH. While false, every page sends `noindex, nofollow` and robots.txt
     * disallows crawling, so the demo/staging site can never compete with a real client site.
     * Set true (and set `siteUrl`) only when the client's site is ready to go live.
     */
    indexable: boolean;
  };
}

export type DifferentiatorIcon =
  "sparkles" | "clock" | "heart" | "message" | "shield" | "building" | "map" | "award";

export const business: BusinessConfig = {
  // ── Identity ──────────────────────────────────────────────────────────
  name: "Pro-Clean Commercial Cleaning LLC",
  legalName: "Pro-Clean Commercial Cleaning LLC",
  tagline: "Dependable commercial and office cleaning.",
  description:
    "Pro-Clean Commercial Cleaning LLC provides professional commercial, office, carpet, and foreclosure & move-out cleaning, plus commercial sanitization and disinfection, in Pittston, PA and surrounding communities. COVID-19 compliant with hospital-grade sanitization. 16 years of industry experience. Fully bonded and insured.",
  foundingStory: "",
  businessType: "Professional Commercial Cleaning",
  schemaType: "LocalBusiness",

  // ── Contact ───────────────────────────────────────────────────────────
  contact: {
    phone: "(570) 762-0082",
    displayPhone: "",
    email: "johndeleo065@gmail.com",
    address: { street: "259 Market St", city: "Pittston", state: "PA", postalCode: "18640" },
    showAddress: true,
    hours: [{ days: "Monday – Sunday", hours: "7:00 AM – 7:00 PM" }],
  },

  // ── Service area / marketing ──────────────────────────────────────────
  location: {
    primaryCity: "Pittston",
    state: "PA",
    // Nearby communities, all within ~50 miles of Pittston. Confirm this list with the owner.
    serviceAreas: ["Wilkes-Barre", "Scranton", "Kingston", "Hazleton"],
  },
  differentiators: [
    {
      title: "16 Years of Industry Experience",
      description:
        "John J. DeLeo brings 16 years of cleaning industry experience to every Pro-Clean account.",
      icon: "award",
    },
    {
      title: "Fully Bonded & Insured",
      description: "Pro-Clean is fully bonded and insured, so your business is protected.",
      icon: "shield",
    },
    {
      title: "Hospital-Grade Sanitization",
      description:
        "COVID-19 compliant, with hospital-grade sanitization and disinfection for commercial spaces.",
      icon: "shield",
    },
    {
      title: "Commercial Cleaning Specialists",
      description:
        "Our focus is commercial and office cleaning for businesses, not residential housekeeping.",
      icon: "building",
    },
    {
      title: "Locally Owned in Pittston",
      description:
        "A locally owned business serving Pittston and surrounding communities within about 50 miles.",
      icon: "map",
    },
  ],
  social: {
    facebook: "",
    instagram: "",
    youtube: "",
    tiktok: "",
    linkedin: "",
    x: "",
    nextdoor: "",
    yelp: "",
  },
  googleBusinessProfileUrl: "",

  // ── Branding ──────────────────────────────────────────────────────────
  branding: {
    favicon: "/favicon.png",
    logo: {
      src: "/images/pro-clean-logo.png",
      alt: "Pro-Clean Commercial Cleaning LLC, Pittston, PA",
      subtitle: "",
    },
    // Derived from the logo: dark teal (primary), light teal tints (secondary/accent).
    colors: {
      primary: "#0b5560",
      primaryForeground: "#ffffff",
      secondary: "#eaf5f6",
      accent: "#d9eff1",
    },
  },

  // ── Images ────────────────────────────────────────────────────────────
  images: {
    hero: {
      src: IMG.office,
      alt: "Bright, clean open-plan commercial office with large windows",
    },
    about: {
      src: IMG.whyChooseUs,
      alt: "Cleaner wiping a glass conference table in a modern office",
    },
    servicesHero: { src: IMG.officeWindows, alt: "Clean, modern commercial office floor" },
    contactHero: {
      src: IMG.officeWorkstations,
      alt: "Clean, modern open-plan office workstations",
    },
    reviewsHero: { src: IMG.office, alt: "Bright, clean open-plan commercial office" },
    ogImage: "",
  },
  gallery: {
    // Stock images. Swap in the owner's own project photos when available.
    isSample: true,
    images: [
      { src: IMG.office, alt: "Clean, modern open-plan commercial office space" },
      { src: IMG.officeWorkstations, alt: "Tidy office workstations in a bright workspace" },
      { src: IMG.officeWindows, alt: "Open commercial office floor with city views" },
      { src: IMG.emptyApartment, alt: "Empty, spotless interior ready for its next occupant" },
    ],
  },

  // ── Lead form ─────────────────────────────────────────────────────────
  form: {
    provider: "formspree",
    endpoint: "", // ← paste the client's Formspree endpoint here. Blank = demo mode.
    successTitle: "Thank you! Your request is in.",
    successMessage:
      "Someone from {name} will reach out shortly to talk through your commercial cleaning needs and provide your free quote.",
    errorMessage:
      "Sorry, we couldn't send your request. Please try again, or call us and we'll take care of it.",
  },

  // ── SEO / launch ──────────────────────────────────────────────────────
  seo: {
    siteUrl: "",
    indexable: false,
  },
};

/**
 * Notes that belong to the client file but must NEVER be shown on the website.
 * Nothing imports this object, so it is dropped from the production bundle.
 * (Lead alerts themselves are configured in the Formspree dashboard.)
 */
export const internal = {
  /** Mobile number that should receive new-lead alerts. Reference only. */
  leadNotificationPhone: "",
};

// ─────────────────────────────────────────────────────────────────────────
//  Derived helpers (no need to edit below this line)
// ─────────────────────────────────────────────────────────────────────────

/**
 * Derive a clickable `tel:` href from a display phone number.
 * 10-digit US numbers get a +1 prefix; 11-digit numbers are used as-is.
 */
export function toPhoneHref(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `tel:+1${digits}`;
  return `tel:+${digits}`;
}

/** Phone number as shown on screen. */
export const phoneDisplay = business.contact.displayPhone || business.contact.phone;
/** `tel:` link for every call-to-action. */
export const phoneHref = toPhoneHref(business.contact.phone);
/** Name used in the © line / structured data. */
export const legalName = business.legalName || business.name;

/** True when the lead form has a real endpoint and will really send. */
export const formIsLive = business.form.provider === "formspree" && !!business.form.endpoint.trim();

/** Site origin without a trailing slash ("" when not configured). */
export const siteUrl = business.seo.siteUrl.trim().replace(/\/+$/, "");

/** Absolute URL for a site path, or "" when no `siteUrl` is configured. */
export function absoluteUrl(path: string): string {
  if (!siteUrl) return "";
  return `${siteUrl}${path}`;
}

/** "City, ST" when both are configured, otherwise whichever exists, otherwise "". */
export function primaryLocationLabel(): string {
  const { primaryCity, state } = business.location;
  return [primaryCity, state].filter(Boolean).join(", ");
}

/** Cities/areas for display & structured data (primary first, no duplicates). */
export function allServiceAreas(): string[] {
  const { primaryCity, serviceAreas } = business.location;
  return Array.from(new Set([primaryCity, ...serviceAreas].filter(Boolean)));
}
