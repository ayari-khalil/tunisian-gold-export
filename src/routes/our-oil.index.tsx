import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { PackagingShowcase } from "@/components/sections/PackagingShowcase";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { site } from "@/lib/site";
import bottle from "@/assets/product-bottle.jpg";

export const Route = createFileRoute("/our-oil/")({
  head: () => ({
    meta: [
      { title: `Our Oil — Extra Virgin, Premium & Private Label | ${site.brand}` },
      {
        name: "description",
        content:
          "Three Tunisian extra virgin olive oil programmes for importers, retailers and private-label partners: core export grade, premium selection and custom brand production.",
      },
      { property: "og:title", content: `Our Oil | ${site.brand}` },
      {
        property: "og:description",
        content: "Tunisian extra virgin olive oil ranges prepared for international B2B buyers.",
      },
      { property: "og:url", content: "/our-oil" },
    ],
    links: [{ rel: "canonical", href: "/our-oil" }],
  }),
  component: OurOilPage,
});

function OurOilPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our oil"
        title="One origin, three ways to bring it to your market."
        intro="Whether you are filling a supermarket shelf, a gourmet counter or your own brand, the oil comes from the same Tunisian selection and the same controlled production."
        image={bottle}
      />
      <ProductShowcase />
      <PackagingShowcase />
      <CtaBanner
        title="Request product information."
        intro="Tell us your market and volume and we will send the matching specification."
        primary={{ label: "Request a Sample", to: "/request-sample" }}
        secondary={{ label: "Request a Quote", to: "/request-quote" }}
      />
    </>
  );
}
