import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("label-xs inline-flex items-center gap-3 text-muted-foreground", className)}>
      <span className="h-px w-6 bg-accent" aria-hidden />
      {children}
    </span>
  );
}

export function Section({
  children,
  className,
  id,
  tone = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "default" | "sand" | "olive" | "card";
}) {
  const tones = {
    default: "bg-background text-foreground",
    sand: "bg-sand text-foreground",
    card: "bg-card text-card-foreground",
    olive: "bg-olive-deep text-olive-foreground",
  } as const;
  return (
    <section id={id} className={cn("py-20 md:py-28", tones[tone], className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  invert = false,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <Eyebrow className={cn(invert && "text-olive-foreground/70", align === "center" && "justify-center")}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2 className={cn("display-2 mt-5", invert && "text-olive-foreground")}>{title}</h2>
      {intro ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-muted-foreground md:text-lg",
            invert && "text-olive-foreground/75",
          )}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
