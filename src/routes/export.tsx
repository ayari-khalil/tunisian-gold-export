import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { ExportMap } from "@/components/sections/ExportMap";
import { BuyerSegments } from "@/components/sections/BuyerSegments";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { exportServices, incoterms } from "@/data/markets";
import { site } from "@/lib/site";
import port from "@/assets/export-port.jpg";

export const Route = createFileRoute("/export")({
  head: () => ({
    meta: [
      { title: `Export & International Logistics | ${site.brand}` },
      {
        name: "description",
        content:
          "Pallet, container and bulk shipment of Tunisian olive oil, with documentation and Incoterms agreed per consignment.",
      },
      { property: "og:title", content: `Export & Logistics | ${site.brand}` },
      {
        property: "og:description",
        content: "Target markets in Europe and Africa, shipped in pallet, container or bulk formats.",
      },
      { property: "og:url", content: "/export" },
    ],
    links: [{ rel: "canonical", href: "/export" }],
  }),
  component: ExportPage,
});

function ExportPage() {
  return (
    <>
      <PageHeader
        eyebrow="Export"
        title="Prepared for international distribution."
        intro="From a first trial pallet to repeat container loading, shipments are planned with your forwarder and documented per consignment."
        image={port}
      />

      <ExportMap />

      <Section>
        <div className="container-x">
          <SectionHeading eyebrow="Capabilities" title="How we ship" />
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {exportServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05} className="bg-background p-8">
                <h3 className="font-serif text-2xl">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <div className="container-x">
          <SectionHeading
            eyebrow="Incoterms"
            title="Terms agreed before booking"
            intro="We quote against the Incoterm that suits your logistics setup."
          />
          <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3">
            {incoterms.map((term) => (
              <span key={term} className="label-xs border border-border px-4 py-2">
                {term}
              </span>
            ))}
          </Reveal>
        </div>
      </Section>

      <BuyerSegments />

      <CtaBanner
        title="Discuss your import requirements."
        intro="Send us destination, volume and packaging and we will come back with a workable plan."
        primary={{ label: "Request a Quote", to: "/request-quote" }}
        secondary={{ label: "Contact Us", to: "/contact" }}
      />
    </>
  );
}
