import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { phoneDisplay, phoneHref } from "@/lib/business";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function FinalCta() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-primary/15 bg-primary text-primary-foreground shadow-[0_30px_70px_-30px_rgba(11,85,96,0.5)]">
          {/* soft decorative glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />
          <div className="relative grid items-center gap-8 p-8 sm:p-12 lg:grid-cols-[1.4fr_1fr] lg:p-16">
            <div>
              <h2 className="text-balance text-3xl font-bold sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]">
                Ready for a Cleaner Workplace?
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
                Let Pro-Clean take cleaning off your to-do list. Request a free quote for your
                business today.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button
                asChild
                size="lg"
                className="bg-background text-primary hover:bg-background/90"
              >
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background/40 bg-transparent text-primary-foreground hover:bg-background/10 hover:text-primary-foreground"
              >
                <a href={phoneHref}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call {phoneDisplay}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
