import { motion } from "motion/react";
import { Reveal } from "@/components/common/Reveal";
import { processSteps } from "@/data/process";

export function ProcessJourney({ invert = false }: { invert?: boolean }) {
  return (
    <ol className="relative mt-16 space-y-0">
      <span
        aria-hidden
        className={`absolute top-2 bottom-2 left-[7px] w-px ${invert ? "bg-olive-foreground/20" : "bg-border"}`}
      />
      {processSteps.map((step, i) => (
        <li key={step.step} className="relative pl-10 pb-12 last:pb-0">
          <motion.span
            aria-hidden
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="absolute top-1.5 left-0 block size-[15px] rounded-full border border-accent bg-accent/25"
          />
          <Reveal delay={i * 0.04} className="grid gap-3 md:grid-cols-[9rem_1fr] md:gap-8">
            <div>
              <span className={`label-xs ${invert ? "text-olive-foreground/50" : "text-muted-foreground"}`}>
                {step.step}
              </span>
              <h3 className={`display-3 mt-1 ${invert ? "text-olive-foreground" : ""}`}>
                {step.title}
              </h3>
            </div>
            <p
              className={`max-w-xl self-center text-sm leading-relaxed ${invert ? "text-olive-foreground/70" : "text-muted-foreground"}`}
            >
              {step.description}
            </p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
