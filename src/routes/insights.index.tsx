import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { articles, insightCategories } from "@/data/insights";
import { site } from "@/lib/site";
import mill from "@/assets/mill.jpg";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: `Insights — Olive Oil & Export Knowledge | ${site.brand}` },
      {
        name: "description",
        content:
          "Articles on Tunisian olive oil, export practice, Mediterranean agriculture and product knowledge for professional buyers.",
      },
      { property: "og:title", content: `Insights | ${site.brand}` },
      { property: "og:description", content: "B2B knowledge on Tunisian olive oil and export." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Knowledge for professional buyers."
        intro="Short reads on origin, grading, packaging and export practice. All articles below are demo content."
        image={mill}
      />

      <Section>
        <div className="container-x">
          <div className="flex flex-wrap gap-3">
            {insightCategories.map((c) => (
              <span key={c} className="label-xs border border-border px-4 py-2 text-muted-foreground">
                {c}
              </span>
            ))}
          </div>

          <div className="mt-14 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.08}>
                <Link to="/insights/$slug" params={{ slug: a.slug }} className="group block">
                  <span className="label-xs text-accent">{a.category}</span>
                  <h2 className="display-3 mt-4 transition-colors group-hover:text-olive">{a.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a.excerpt}</p>
                  <p className="label-xs mt-6 text-muted-foreground">
                    {a.date} · {a.readingTime}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          <p className="mt-14 text-xs text-muted-foreground">
            Demo content — replace with your own editorial before publishing.
          </p>
        </div>
      </Section>

      <CtaBanner
        title="Questions we haven't answered?"
        intro="Our export team is happy to go into detail on grading, documentation or logistics."
        primary={{ label: "Contact Us", to: "/contact" }}
        secondary={{ label: "Request a Sample", to: "/request-sample" }}
      />
    </>
  );
}
