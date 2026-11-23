import { Star } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

// Placeholder testimonials. Replace each entry with a verified customer review before launch.
const REVIEWS = [
  {
    name: "Commercial Client",
    initials: "CC",
    text: "Pro-Clean has been dependable from day one. Our building is spotless, and the crew shows up on schedule every time.",
  },
  {
    name: "Office Client",
    initials: "OC",
    text: "Professional, courteous, and thorough. Our office looks great every morning and our team notices the difference.",
  },
  {
    name: "Carpet Cleaning Client",
    initials: "CL",
    text: "Our carpets look fresh again. They paid attention to the high-traffic areas and the details others overlook.",
  },
];

export function ReviewsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Client Feedback"
          title="What Our Customers Are Saying"
          description="See what customers have to say about their experience with Pro-Clean Commercial Cleaning LLC."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(11,85,96,0.4)]">
                <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-5 w-5" fill="#F5B301" stroke="#F5B301" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-pretty text-base leading-relaxed text-foreground/85">
                  {r.text}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <span
                    aria-hidden
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground"
                  >
                    {r.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{r.name}</p>
                    <p className="text-xs text-muted-foreground">Pro-Clean customer</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
