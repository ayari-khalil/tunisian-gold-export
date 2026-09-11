import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { ProcessJourney } from "@/components/sections/ProcessJourney";
import { TunisiaMap } from "@/components/sections/TunisiaMap";
import { ExportMap } from "@/components/sections/ExportMap";
import { BuyerSegments } from "@/components/sections/BuyerSegments";
import { PrivateLabelFlow } from "@/components/sections/PrivateLabelFlow";
import { PackagingShowcase } from "@/components/sections/PackagingShowcase";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal, RevealImage } from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import mill from "@/assets/mill.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Premium Tunisian Olive Oil | ${site.brand}` },
      {
        name: "description",
        content:
          "Discover premium Tunisian Extra Virgin Olive Oil for international importers, distributors, retailers and private-label partners.",
      },
      { property: "og:title", content: `Premium Tunisian Olive Oil | ${site.brand}` },
      {
        property: "og:description",
        content:
          "Premium Tunisian Extra Virgin Olive Oil, prepared for international B2B buyers.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />

      <Section>
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <RevealImage className="order-last lg:order-first">
            <img
              src={mill}
              alt="Freshly milled Tunisian olive oil running from the press"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </RevealImage>
          <div>
            <SectionHeading
              eyebrow="Our product"
              title="Pure Tunisian Excellence"
              intro="Tunisia's long dry summers, mild coastal winters and centuries of olive-growing knowledge produce fruit with real character. We select it, control how it is milled, and prepare it for buyers who resell under their own reputation."
            />
            <Reveal delay={0.1} className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Mediterranean climate",
                "Tunisian olive-growing heritage",
                "Carefully selected olives",
                "Controlled production",
                "Authentic taste",
                "Quality-focused sourcing",
              ].map((item) => (
                <p key={item} className="border-l border-accent pl-4 text-sm text-muted-foreground">
                  {item}
                </p>
              ))}
            </Reveal>
            <Reveal delay={0.2} className="mt-10">
              <Button asChild variant="olive" size="xl">
                <Link to="/our-oil">Discover Our Oil</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </Section>

      <ProductShowcase tone="sand" />
      <ProcessJourney />
      <TunisiaMap />
      <ExportMap />
      <BuyerSegments />
      <PrivateLabelFlow />
      <PackagingShowcase />
      <CtaBanner
        title="Taste before you commit."
        intro="Request a sample or send us your specification — we will reply with the commercial information that matches your market."
      />
    </>
  );
}
