import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section, SectionHeading } from "@/components/common/Section";
import { QuoteRequestForm } from "@/components/forms/QuoteRequestForm";
import { site } from "@/lib/site";
import port from "@/assets/export-port.jpg";

export const Route = createFileRoute("/request-quote")({
  head: () => ({
    meta: [
      { title: `Request a Quote — Olive Oil Export | ${site.brand}` },
      {
        name: "description",
        content:
          "Send your product, packaging, volume, Incoterm and destination port and receive commercial information from our export team.",
      },
      { property: "og:title", content: `Request a Quote | ${site.brand}` },
      { property: "og:description", content: "B2B quotation request for Tunisian olive oil export." },
      { property: "og:url", content: "/request-quote" },
    ],
    links: [{ rel: "canonical", href: "/request-quote" }],
  }),
  component: RequestQuotePage,
});

function RequestQuotePage() {
  return (
    <>
      <PageHeader
        eyebrow="Quotation"
        title="Request a Quote."
        intro="Our team will review your requirements and contact you with the appropriate commercial information."
        image={port}
      />
      <Section>
        <div className="container-x max-w-4xl">
          <SectionHeading
            eyebrow="Your requirement"
            title="Quotation request"
            intro="The more precise the packaging, volume and Incoterm, the faster we can answer."
          />
          <div className="mt-12">
            <QuoteRequestForm />
          </div>
        </div>
      </Section>
    </>
  );
}
