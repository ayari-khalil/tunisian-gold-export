import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/common/Section";
import { Eyebrow } from "@/components/common/Section";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { getArticle } from "@/data/insights";
import { site } from "@/lib/site";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} | ${site.brand}` },
        { name: "description", content: article.excerpt.slice(0, 155) },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/insights/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/insights/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            articleSection: article.category,
            publisher: { "@type": "Organization", name: site.brandFull },
          }),
        },
      ],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();

  return (
    <>
      <header className="bg-sand pt-36 pb-16 md:pt-44 md:pb-20">
        <div className="container-x max-w-3xl">
          <Eyebrow>{article.category}</Eyebrow>
          <h1 className="display-1 mt-6">{article.title}</h1>
          <p className="label-xs mt-6 text-muted-foreground">
            {article.date} · {article.readingTime}
          </p>
        </div>
      </header>

      <Section>
        <div className="container-x max-w-3xl">
          <p className="border-l border-accent pl-4 text-xs text-muted-foreground">
            Demo content — this article is placeholder editorial.
          </p>
          <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            {article.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <Link
            to="/insights"
            className="label-xs mt-12 inline-flex items-center gap-2 text-olive transition-colors hover:text-olive-deep"
          >
            <ArrowLeft className="size-4" /> All insights
          </Link>
        </div>
      </Section>

      <CtaBanner
        title="Prefer to talk to a person?"
        intro="Our export team can answer market-specific questions directly."
        primary={{ label: "Contact Us", to: "/contact" }}
        secondary={{ label: "Request a Sample", to: "/request-sample" }}
      />
    </>
  );
}
