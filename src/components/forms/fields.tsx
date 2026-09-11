import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Field({
  label,
  htmlFor,
  error,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string | undefined;
  required?: boolean | undefined;
  className?: string | undefined;
  children: ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="label-xs text-muted-foreground">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const fieldClass =
  "h-11 w-full border border-input bg-background px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-olive focus:ring-1 focus:ring-ring";

export const areaClass =
  "min-h-32 w-full border border-input bg-background p-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-olive focus:ring-1 focus:ring-ring";
