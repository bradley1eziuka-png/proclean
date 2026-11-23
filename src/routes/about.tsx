import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Award,
  Building2,
  Check,
  Clock,
  Heart,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { business } from "@/lib/business";
import { pageHead } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About Us",
      description: `${business.name} is a locally owned commercial cleaning company in Pittston, PA, led by owner John J. DeLeo with 16 years of industry experience. Fully bonded and insured.`,
      path: "/about",
      image: business.images.about.src,
    }),
  component: AboutPage,
});

const ICONS = {
  sparkles: Sparkles,
  clock: Clock,
  heart: Heart,
  message: MessageSquareText,
  shield: ShieldCheck,
  building: Building2,
  map: MapPin,
  award: Award,
};

const POINTS = [
  "16 years of cleaning industry experience",
  "Fully bonded and insured",
  "Commercial and office cleaning specialists",
  "Locally owned, serving Pittston and surrounding areas",
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Locally Owned Commercial Cleaning in Pittston, PA"
        description="Pro-Clean Commercial Cleaning LLC is owned by John J. DeLeo and provides dependable commercial and office cleaning for businesses in Pittston and surrounding communities."
        image={business.images.about.src}
        imageAlt={business.images.about.alt}
      />

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              About Pro-Clean
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
              Meet the owner, John J. DeLeo
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Pro-Clean Commercial Cleaning LLC is owned by John J. DeLeo, who has 16 years of
              experience in the cleaning industry and has been running Pro-Clean for approximately
              5.5 years. Pro-Clean is fully bonded and insured and provides commercial cleaning,
              office cleaning, carpet cleaning, and foreclosure &amp; move-out cleaning throughout
              Pittston and surrounding communities.
            </p>
            <ul className="mt-7 flex flex-col gap-3">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-foreground">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6">
            {business.differentiators.map((v, i) => {
              const Icon = ICONS[v.icon];
              return (
                <Reveal key={v.title} delay={i * 90}>
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-foreground">{v.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                        {v.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {business.foundingStory ? (
        <section className="border-t border-border bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-3xl">
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Our Story
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
              How {business.name} got started
            </h2>
            {business.foundingStory
              .split(/\n{2,}/)
              .filter(Boolean)
              .map((para) => (
                <p
                  key={para}
                  className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
                >
                  {para}
                </p>
              ))}
          </Reveal>
        </section>
      ) : null}

      <FinalCta />
    </>
  );
}
