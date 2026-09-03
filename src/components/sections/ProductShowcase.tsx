import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { Section, SectionHeading } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export function ProductShowcase({ tone = "default" }: { tone?: "default" | "sand" }) {
  return (
    <Section tone={tone}>
      <div className="container-x">
        <SectionHeading
          eyebrow="Product range"
          title="Three ways to bring Tunisia onto your shelf."
          intro="Each format is prepared for a different kind of buyer. Tell us where the oil is going and we will point you to the right one."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.1} className="group flex flex-col">
              <Link
                to="/our-oil/$slug"
                params={{ slug: product.slug }}
                className="block overflow-hidden bg-muted"
              >
                <img
                  src={product.image}
                  alt={`${product.name} — Tunisian extra virgin olive oil`}
                  loading="lazy"
                  className="aspect-4/5 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              </Link>
              <p className="label-xs mt-6 text-muted-foreground">{product.category}</p>
              <h3 className="display-3 mt-3">{product.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {product.description}
              </p>

              <dl className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
                <div className="flex gap-4">
                  <dt className="label-xs w-28 shrink-0 pt-0.5 text-muted-foreground">Packaging</dt>
                  <dd>{product.packaging.join(" · ")}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="label-xs w-28 shrink-0 pt-0.5 text-muted-foreground">Ideal for</dt>
                  <dd>{product.idealFor}</dd>
                </div>
              </dl>

              <div className="mt-auto pt-7">
                <Link
                  to="/our-oil/$slug"
                  params={{ slug: product.slug }}
                  className="label-xs inline-flex items-center gap-2 border-b border-olive/40 pb-1 text-olive transition-colors hover:border-olive"
                >
                  Request product information <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14">
          <Button asChild variant="olive" size="xl">
            <Link to="/request-quote">Request Product Information</Link>
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
