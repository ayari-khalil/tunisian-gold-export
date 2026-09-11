import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { PrivateLabelFlow } from "@/components/sections/PrivateLabelFlow";
import { PackagingShowcase } from "@/components/sections/PackagingShowcase";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { site } from "@/lib/site";
import bottle from "@/assets/product-bottle.jpg";

export const Route = createFileRoute("/private-label")({
  head: () => ({
    meta: [
      { title: `Private Label Olive Oil Programmes | ${site.brand}` },
      {
        name: "description",
        content:
          "Develop your own olive oil brand with Tunisian origin: format selection, label artwork, sample approval, production and export.",
      },
      { property: "og:title", content: `Private Label | ${site.brand}` },
      { property: "og:description", content: "Your brand. Our origin." },
      { property: "og:url", content: "/private-label" },
    ],
    links: [{ rel: "canonical", href: "/private-label" }],
  }),
  component: PrivateLabelPage,
});

function PrivateLabelPage() {
  return (
    <>
      <PageHeader
        eyebrow="Private label"
        title="Your Brand. Our Origin."
        intro="Retail chains, distributors and brand owners can build their own olive oil range on Tunisian origin, produced and shipped to their specification."
        image={bottle}
      />
      <PrivateLabelFlow />
      <PackagingShowcase />
      <CtaBanner
        title="Discuss private label."
        intro="Share your target format, volume and market and we will outline the programme."
        primary={{ label: "Contact Us", to: "/contact" }}
        secondary={{ label: "Request a Quote", to: "/request-quote" }}
      />
    </>
  );
}
