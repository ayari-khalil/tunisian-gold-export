import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { PackagingShowcase } from "@/components/sections/PackagingShowcase";
import { PrivateLabelFlow } from "@/components/sections/PrivateLabelFlow";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { site } from "@/lib/site";
import tin from "@/assets/product-tin.jpg";

export const Route = createFileRoute("/packaging")({
  head: () => ({
    meta: [
      { title: `Packaging Formats — Bottles, Tins & Bulk | ${site.brand}` },
      {
        name: "description",
        content:
          "Glass bottles, metal tins, food-service containers and bulk formats for retail, hospitality and private-label olive oil programmes.",
      },
      { property: "og:title", content: `Packaging | ${site.brand}` },
      {
        property: "og:description",
        content: "Retail, food-service, bulk and private-label packaging for Tunisian olive oil.",
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
        eyebrow="Packaging"
        title="The format decides the shelf."
        intro="Choose the presentation your market expects — retail glass, premium tin, food-service containers or bulk for filling locally."
        image={tin}
      />
      <PackagingShowcase />
      <PrivateLabelFlow invert />
      <CtaBanner
        title="Need a format we haven't listed?"
        intro="Tell us the specification and we will confirm what is feasible."
        primary={{ label: "Contact Us", to: "/contact" }}
        secondary={{ label: "Request a Quote", to: "/request-quote" }}
      />
    </>
  );
}
