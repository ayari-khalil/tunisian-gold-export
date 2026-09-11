import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, FileText } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Section, SectionHeading, Eyebrow } from "@/components/common/Section";
import { Reveal, RevealImage } from "@/components/common/Reveal";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Button } from "@/components/ui/button";
import { getProduct, products } from "@/data/products";
import { traceabilityDocuments } from "@/data/process";
import { site } from "@/lib/site";

export const Route = createFileRoute("/our-oil/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const { product } = loaderData;
    return {
      meta: [
        { title: `${product.name} — Tunisian Olive Oil | ${site.brand}` },
        { name: "description", content: product.description.slice(0, 155) },
        { property: "og:title", content: `${product.name} | ${site.brand}` },
        { property: "og:description", content: product.tagline },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/our-oil/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/our-oil/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            category: product.category,
            brand: { "@type": "Brand", name: site.brandFull },
            countryOfOrigin: "Tunisia",
          }),
        },
      ],
    };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      <PageHeader eyebrow={product.category} title={product.name} intro={product.tagline} image={product.image} />

      <Section>
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          <RevealImage src={product.image} alt={`${product.name} — Tunisian extra virgin olive oil`} ratio="aspect-[4/5]" priority />
          <div>
            <Eyebrow>Overview</Eyebrow>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {product.longDescription}
            </p>

            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <dt className="label-xs text-muted-foreground">Origin</dt>
                <dd className="mt-2 text-sm">Tunisia</dd>
              </div>
              <div>
                <dt className="label-xs text-muted-foreground">Ideal for</dt>
                <dd className="mt-2 text-sm">{product.idealFor}</dd>
              </div>
              <div>
                <dt className="label-xs text-muted-foreground">Taste profile</dt>
                <dd className="mt-2 text-sm">{product.tasteProfile.join(" · ")}</dd>
              </div>
              <div>
                <dt className="label-xs text-muted-foreground">Minimum order</dt>
                <dd className="mt-2 text-sm">{product.moq}</dd>
              </div>
              <div>
                <dt className="label-xs text-muted-foreground">Packaging formats</dt>
                <dd className="mt-2 text-sm">{product.packaging.join(", ")}</dd>
              </div>
              <div>
                <dt className="label-xs text-muted-foreground">Available volumes</dt>
                <dd className="mt-2 text-sm">{product.volumes.join(", ")}</dd>
              </div>
              <div>
                <dt className="label-xs text-muted-foreground">Harvest</dt>
                <dd className="mt-2 text-sm">{product.harvest}</dd>
              </div>
              <div>
                <dt className="label-xs text-muted-foreground">Storage</dt>
                <dd className="mt-2 text-sm">{product.storage}</dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="olive" size="xl">
                <Link to="/request-sample">Request a Sample</Link>
              </Button>
              <Button asChild variant="quiet" size="xl">
                <Link to="/request-quote">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Specification" title="Technical specification" />
            <Reveal delay={0.1} className="mt-8 border-t border-border">
              <table className="w-full text-left text-sm">
                <tbody>
                  {product.specs.map((row) => (
                    <tr key={row.label} className="border-b border-border align-top">
                      <th scope="row" className="label-xs w-2/5 py-4 pr-4 font-normal text-muted-foreground">
                        {row.label}
                      </th>
                      <td className="py-4">{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <p className="mt-6 text-xs text-muted-foreground">
              Values marked [TO BE PROVIDED] are placeholders. No certification, award or
              laboratory result is claimed until the corresponding document is supplied.
            </p>
          </div>

          <div>
            <SectionHeading eyebrow="Documentation" title="Technical documentation & certifications" />
            <Reveal delay={0.1} className="mt-8 divide-y divide-border border-y border-border">
              {traceabilityDocuments.map((doc) => (
                <div key={doc.title} className="flex items-center justify-between gap-4 py-4">
                  <span className="flex items-center gap-3 text-sm">
                    <FileText className="size-4 text-accent" aria-hidden />
                    {doc.title}
                  </span>
                  <span className="label-xs text-muted-foreground">{doc.status}</span>
                </div>
              ))}
            </Reveal>
            <Reveal delay={0.2} className="mt-8">
              <Button asChild variant="quiet" size="lg">
                <Link to="/quality">
                  See how quality is traced <ArrowRight className="size-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <SectionHeading eyebrow="Also available" title="Other programmes" />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link to="/our-oil/$slug" params={{ slug: p.slug }} className="group block">
                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="display-3 mt-6">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CtaBanner
        title="Ready to evaluate this product?"
        intro="Samples let your team assess the profile before any commitment."
      />
    </>
  );
}
