import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section, SectionHeading } from "@/components/common/Section";
import { SampleRequestForm } from "@/components/forms/SampleRequestForm";
import { site } from "@/lib/site";
import bottle from "@/assets/product-bottle.jpg";

export const Route = createFileRoute("/request-sample")({
  head: () => ({
    meta: [
      { title: `Request a Sample — Tunisian Olive Oil | ${site.brand}` },
      {
        name: "description",
        content:
          "Request a sample of our Tunisian extra virgin olive oil and evaluate the profile before committing to an order.",
      },
      { property: "og:title", content: `Request a Sample | ${site.brand}` },
      { property: "og:description", content: "Taste before you commit — request a B2B sample." },
      { property: "og:url", content: "/request-sample" },
    ],
    links: [{ rel: "canonical", href: "/request-sample" }],
  }),
  component: RequestSamplePage,
});

function RequestSamplePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sample request"
        title="Taste Before You Commit."
        intro="Request a product sample and discover whether our olive oil is the right fit for your market."
        image={bottle}
      />
      <Section>
        <div className="container-x max-w-4xl">
          <SectionHeading
            eyebrow="Your details"
            title="Sample request"
            intro="No payment is required. We will confirm shipping arrangements by email."
          />
          <div className="mt-12">
            <SampleRequestForm />
          </div>
        </div>
      </Section>
    </>
  );
}
