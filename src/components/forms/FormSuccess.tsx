import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FormSuccess({
  title,
  description,
  reference,
  onReset,
}: {
  title: string;
  description: string;
  reference?: string;
  onReset: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="border border-border bg-card p-10 text-center"
      role="status"
    >
      <span className="mx-auto flex size-12 items-center justify-center rounded-full border border-accent text-accent">
        <Check className="size-5" />
      </span>
      <h3 className="display-3 mt-6">{title}</h3>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
      {reference ? (
        <p className="label-xs mt-6 text-muted-foreground">Reference · {reference}</p>
      ) : null}
      <Button variant="quiet" size="lg" className="mt-8" onClick={onReset}>
        Send another request
      </Button>
    </motion.div>
  );
}
