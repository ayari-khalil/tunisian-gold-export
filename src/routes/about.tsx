import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal, RevealImage } from "@/components/common/Reveal";
import { Counter } from "@/components/common/Counter";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { values } from "@/data/buyers";
import { heritageStats } from "@/data/process";
import { site } from "@/lib/site";
import harvest from "@/assets/harvest.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Us — Tunisian Olive Oil Exporter | ${site.brand}` },
      {
        name: "description",
        content:
          "Who we are, what we stand for, and how we work with international importers, distributors and private-label partners.",
      },
      { property: "og:title", content: `About ${site.brandFull}` },
      {
        property: "og:description",
        content: "A Tunisian olive oil exporter built around quality, transparency and long-term partnerships.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="A Tunisian supplier built for long relationships."
        intro="We are not trying to ship once. We are trying to become the supplier you stop looking to replace."
        image={harvest}
      />

      <Section>
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Who we are" title="Who We Are" />
            <Reveal delay={0.1} className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                {site.brandFull} is a premier Tunisian exporter specializing in single-origin and premium blended extra virgin olive oil for international B2B buyers. Headquartered in Tunis with sourcing partnerships across Bizerte, Béja, Zaghouan, and Le Kef, we deliver verified export-grade quality.
              </p>
              <p>
                We manage the entire export chain: from pre-season grove selection and cold mechanical extraction to laboratory certification and FCL container dispatch from the Port of Radès and Bizerte.
              </p>
            </Reveal>

            <SectionHeading className="mt-16" eyebrow="Our mission" title="Our Mission" />
            <Reveal delay={0.1} className="mt-6 text-sm leading-relaxed text-muted-foreground">
              <p>
                To bring Tunisian olive oil to international markets under its own name — with
                documentation buyers can verify and a taste their customers come back for.
              </p>
            </Reveal>
          </div>
          <RevealImage src={harvest} alt="Olive harvest in a Tunisian grove" ratio="aspect-[4/5]" />
        </div>
      </Section>

      <Section tone="sand">
        <div className="container-x">
          <SectionHeading eyebrow="Our values" title="Our Values" />
          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} className="bg-background p-8">
                <h3 className="font-serif text-2xl">{v.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="olive">
        <div className="container-x">
          <SectionHeading
            invert
            eyebrow="In numbers"
            title="Sourcing & Export Capacity"
            intro="Key metrics reflecting our northern sourcing network and export infrastructure."
          />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {heritageStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <Counter value={stat.value} className="display-2 text-olive-foreground" />
                <p className="label-xs mt-3 text-olive-foreground/65">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Start a business conversation."
        intro="Tell us what you import today and where our oil could fit."
        primary={{ label: "Contact Us", to: "/contact" }}
        secondary={{ label: "Request a Sample", to: "/request-sample" }}
      />
    </>
  );
}
