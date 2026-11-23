import { createFileRoute } from "@tanstack/react-router";
import { business } from "@/lib/business";
import { pageHead } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { FinalCta } from "@/components/final-cta";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/gallery")({
  head: () =>
    pageHead({
      title: "Gallery",
      description: `Browse a gallery of clean commercial spaces from ${business.name}, showing the standard of clean we work to deliver.`,
      path: "/gallery",
      image: business.gallery.images[0]?.src,
    }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="See the Difference a Clean Space Makes"
        description="Clean, professional commercial spaces. This is the standard we work to deliver for every client."
        image={business.gallery.images[0]?.src ?? business.images.servicesHero.src}
        imageAlt={business.gallery.images[0]?.alt ?? business.images.servicesHero.alt}
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {business.gallery.images.map((img, i) => (
              <Reveal key={img.src} delay={(i % 3) * 80}>
                <div className="group relative overflow-hidden rounded-2xl border border-border shadow-sm break-inside-avoid">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ aspectRatio: i % 3 === 0 ? "4/5" : "4/3" }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-primary/0 opacity-0 transition-opacity duration-300 group-hover:bg-primary/10 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs font-medium text-white">{img.alt}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
