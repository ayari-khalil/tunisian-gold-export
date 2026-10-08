import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { BottleSizesShowcase } from "@/components/sections/BottleSizesShowcase";
import { PackagingShowcase } from "@/components/sections/PackagingShowcase";
import { PrivateLabelFlow } from "@/components/sections/PrivateLabelFlow";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { site } from "@/lib/site";
import bottle from "@/assets/product-bottle.jpg";

export const Route = createFileRoute("/packaging")({
  head: () => ({
    meta: [
      { title: `Bottle Sizes & Packaging Formats | ${site.brand}` },
      {
        name: "description",
        content:
          "Explore our official range of extra virgin olive oil bottle sizes: 1L, 500ml, 250ml, and 250ml culinary spray for international importers and retail buyers.",
      },
      { property: "og:title", content: `Bottle Sizes & Packaging Range | ${site.brand}` },
      {
        property: "og:description",
        content: "Complete retail glass bottle sizes, tins, and spray formats for Tunisian extra virgin olive oil.",
      },
      { property: "og:url", content: "/packaging" },
    ],
    links: [{ rel: "canonical", href: "/packaging" }],
  }),
  component: PackagingPage,
});

function PackagingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Bottle Sizes & Formats"
        title="The Right Format For Your Market Shelf."
        intro="Explore our official packaging line: 1 Litre retail bottles, 500 ml Marasca/Dorica glass, 250 ml restaurant reserve bottles, and 250 ml culinary spray misting bottles."
        image={bottle}
      />

      {/* Featured 4 Real Bottle Sizes Section */}
      <BottleSizesShowcase />

      {/* Other Packaging Formats (Tins, Food Service, Bulk) */}
      <PackagingShowcase />

      {/* Private Label Branding Pipeline */}
      <PrivateLabelFlow invert />

      <CtaBanner
        title="Need Custom Labeling or a Specific Bottle Shape?"
        intro="We supply private label branding, custom foil-stamped labels, and tailored export cartons for supermarket chains and regional distributors."
        primary={{ label: "Request a Sample", to: "/request-sample" }}
        secondary={{ label: "Request a Quote", to: "/request-quote" }}
      />
    </>
  );
}
