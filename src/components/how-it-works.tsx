import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const STEPS = [
  {
    num: "01",
    title: "Request Your Free Quote",
    desc: "Tell us what kind of cleaning you need and share a few details about your space.",
  },
  {
    num: "02",
    title: "Discuss Your Needs",
    desc: "We'll talk through your space and your schedule and find the right approach for your business.",
  },
  {
    num: "03",
    title: "Enjoy a Clean Workplace",
    desc: "Get dependable cleaning from a fully bonded and insured local company.",
  },
];

export function HowItWorks() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Simple & Convenient"
          title="A Cleaner Workplace in Three Simple Steps"
        />
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 110}>
              <div className="relative h-full rounded-2xl border border-border bg-card p-7 shadow-sm">
                <span className="font-serif text-4xl italic text-primary/25">{s.num}</span>
                <h3 className="mt-3 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                {i < STEPS.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute right-7 top-9 hidden h-px w-10 bg-border md:block"
                  />
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
