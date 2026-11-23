import { createFileRoute } from "@tanstack/react-router";
import { business, phoneDisplay } from "@/lib/business";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () =>
    pageHead({
      title: "Terms of Service",
      description: `Terms of service for ${business.name}.`,
      path: "/terms",
      noindex: true,
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: {new Date().getFullYear()}
        </p>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          These terms apply to your use of the {business.name} website.
        </p>
        <h2 className="mt-10 text-xl font-bold text-foreground">Using this website</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          The information on this website is provided for general purposes. Service availability and
          details are confirmed directly with {business.name}.
        </p>
        <h2 className="mt-8 text-xl font-bold text-foreground">Services &amp; quotes</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Quotes are based on the details you share about your space. Final scope, pricing, and
          scheduling are confirmed directly with {business.name} before work begins.
        </p>
        <h2 className="mt-8 text-xl font-bold text-foreground">Contact</h2>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          Questions about these terms? Call {phoneDisplay} or email {business.contact.email}.
        </p>
      </div>
    </section>
  );
}
