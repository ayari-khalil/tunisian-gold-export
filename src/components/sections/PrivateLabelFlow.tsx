import { Reveal } from "@/components/common/Reveal";
import { privateLabelSteps } from "@/data/buyers";

export function PrivateLabelFlow({ invert = false }: { invert?: boolean }) {
  return (
    <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
      {privateLabelSteps.map((step, i) => (
        <Reveal
          key={step.title}
          delay={(i % 3) * 0.08}
          className={invert ? "bg-olive-deep p-8" : "bg-background p-8"}
        >
          <span className={`label-xs ${invert ? "text-accent" : "text-accent"}`}>
            Step {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className={`mt-4 font-serif text-2xl ${invert ? "text-olive-foreground" : ""}`}>
            {step.title}
          </h3>
          <p
            className={`mt-3 text-sm leading-relaxed ${invert ? "text-olive-foreground/70" : "text-muted-foreground"}`}
          >
            {step.description}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
