import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";

export function CtaBanner({
  eyebrow = "Next step",
  title,
  intro,
  primary = { label: "Request a Sample", to: "/request-sample" as const },
  secondary = { label: "Request a Quote", to: "/request-quote" as const },
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  primary?: { label: string; to: "/request-sample" | "/request-quote" | "/contact" | "/private-label" };
  secondary?: { label: string; to: "/request-sample" | "/request-quote" | "/contact" | "/private-label" };
}) {
  return (
    <section className="bg-olive-deep py-20 text-olive-foreground md:py-24">
      <div className="container-x">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="label-xs text-olive-foreground/60">{eyebrow}</span>
            <h2 className="display-2 mt-4">{title}</h2>
            {intro ? (
              <p className="mt-4 text-base leading-relaxed text-olive-foreground/75">{intro}</p>
            ) : null}
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button asChild variant="gold" size="xl">
              <Link to={primary.to}>{primary.label}</Link>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <Link to={secondary.to}>{secondary.label}</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
