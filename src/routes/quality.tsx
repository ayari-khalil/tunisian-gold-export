import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { ProcessJourney } from "@/components/sections/ProcessJourney";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { traceabilityDocuments } from "@/data/process";
import { site } from "@/lib/site";
import mill from "@/assets/mill.jpg";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: `Quality & Traceability | ${site.brand}` },
      {
        name: "description",
        content:
          "Grove to export: how each batch of our Tunisian extra virgin olive oil is selected, controlled and documented for international buyers.",
      },
      { property: "og:title", content: `Quality & Traceability | ${site.brand}` },
      {
        property: "og:description",
        content: "Quality you can trace — batch documentation for professional buyers.",
      },
      { property: "og:url", content: "/quality" },
    ],
    links: [{ rel: "canonical", href: "/quality" }],
  }),
  component: QualityPage,
});

function QualityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Quality & traceability"
        title="Quality You Can Trace."
        intro="Every consignment should be explainable: where the fruit grew, when it was milled, how it was checked and what document proves it."
        image={mill}
      />

      <ProcessJourney />

      <Section tone="sand">
        <div className="container-x">
          <SectionHeading
            eyebrow="Documentation"
            title="Documented batch by batch"
            intro="We do not publish certificates or laboratory values we cannot support. The list below shows what can accompany a consignment; placeholders will be replaced with real documents as they are issued."
          />
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {traceabilityDocuments.map((doc, i) => (
              <Reveal key={doc.title} delay={i * 0.06} className="bg-background p-8">
                <FileText className="size-5 text-accent" aria-hidden />
                <h3 className="mt-6 font-serif text-2xl">{doc.title}</h3>
                <p className="label-xs mt-3 text-muted-foreground">{doc.status}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-xs text-muted-foreground">
            No certification, award, standard or laboratory result is claimed on this website.
            Items marked [TO BE PROVIDED] are pending real documentation.
          </p>
        </div>
      </Section>

      <CtaBanner
        title="Ask for the documentation."
        intro="Tell us which documents your market requires and we will confirm what can be issued."
        primary={{ label: "Contact Us", to: "/contact" }}
        secondary={{ label: "Request a Sample", to: "/request-sample" }}
      />
    </>
  );
}
