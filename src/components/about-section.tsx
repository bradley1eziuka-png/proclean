import { Link } from "@tanstack/react-router";
import { Check, MapPin, Clock, ShieldCheck } from "lucide-react";
import { business } from "@/lib/business";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-1 lg:order-none">
            <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_70px_-30px_rgba(11,85,96,0.4)]">
              <img
                src={business.images.about.src}
                alt={business.images.about.alt}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              />
              <div className="absolute bottom-4 left-4 rounded-xl bg-background/90 px-4 py-3 shadow-md backdrop-blur-sm">
                <p className="font-serif text-sm italic text-foreground/80">
                  Locally owned. Fully bonded and insured.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Why Choose Us
            </span>
            <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl lg:text-[2.7rem] lg:leading-[1.1]">
              Commercial Cleaning You Can Count On
            </h2>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              Pro-Clean is owned by John J. DeLeo, who brings 16 years of cleaning industry
              experience and has been running Pro-Clean for approximately 5.5 years. Based in
              Pittston, PA, we provide commercial and office cleaning for local businesses.
            </p>

            <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {business.differentiators.map((d) => (
                <li
                  key={d.title}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium text-foreground">{d.title}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6 text-center sm:text-left">
              <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-start sm:gap-2">
                <Clock className="hidden h-5 w-5 text-primary sm:block" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Open 7 Days</p>
                  <p className="text-xs text-muted-foreground">7 AM – 7 PM</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-start sm:gap-2">
                <ShieldCheck className="hidden h-5 w-5 text-primary sm:block" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Bonded</p>
                  <p className="text-xs text-muted-foreground">& Insured</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-start sm:gap-2">
                <MapPin className="hidden h-5 w-5 text-primary sm:block" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Locally</p>
                  <p className="text-xs text-muted-foreground">Owned</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
