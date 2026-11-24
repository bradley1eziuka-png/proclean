import { Award, ShieldCheck, SprayCan, MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";

const BENEFITS = [
  {
    icon: Award,
    title: "16 Years of Experience",
    desc: "Industry experience you can rely on.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Bonded & Insured",
    desc: "Protection and peace of mind.",
  },
  {
    icon: MapPin,
    title: "Locally Owned",
    desc: "Based in Pittston, PA.",
  },
  {
    icon: SprayCan,
    title: "Hospital-Grade Sanitization",
    desc: "COVID-19 compliant.",
  },
];

export function BenefitsStrip() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, desc }, i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="flex flex-col gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-background text-primary shadow-[0_6px_18px_-10px_rgba(11,85,96,0.4)]">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-foreground sm:text-base">{title}</h3>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
