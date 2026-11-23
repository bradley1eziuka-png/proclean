import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/lib/business";
import { pageHead } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { FinalCta } from "@/components/final-cta";
import { ReviewsSection } from "@/components/reviews-section";

export const Route = createFileRoute("/reviews")({
  head: () =>
    pageHead({
      title: "Reviews",
      description: `${business.name} is built on reliable service, clear communication, and attention to detail. See what customers have to say about their experience.`,
      path: "/reviews",
      image: business.images.reviewsHero.src,
    }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Cleaning That Makes a Difference"
        description="Reliable cleaning is about more than tidy rooms. It's about trust, communication, and showing up when you say you will."
        image={business.images.reviewsHero.src}
        imageAlt={business.images.reviewsHero.alt}
      />

      <ReviewsSection />

      <FinalCta />
    </>
  );
}
