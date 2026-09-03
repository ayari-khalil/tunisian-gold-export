import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { packagingCategories, packagingFormats } from "@/data/packaging";
import type { PackagingCategory } from "@/types";
import { cn } from "@/lib/utils";

const filters = ["All", ...packagingCategories] as const;

export function PackagingShowcase() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible =
    active === "All"
      ? packagingFormats
      : packagingFormats.filter((f) => f.categories.includes(active as PackagingCategory));

  return (
    <div className="mt-12">
      <div className="flex flex-wrap gap-2 border-b border-border pb-5">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            aria-pressed={active === f}
            className={cn(
              "label-xs border px-4 py-2.5 transition-colors",
              active === f
                ? "border-olive bg-olive text-olive-foreground"
                : "border-border text-muted-foreground hover:border-olive hover:text-olive",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-12 grid gap-10 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((format) => (
            <motion.article
              key={format.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className="overflow-hidden bg-muted">
                <img
                  src={format.image}
                  alt={`${format.name} for Tunisian olive oil export`}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {format.categories.map((c) => (
                  <span key={c} className="label-xs border border-border px-2.5 py-1 text-muted-foreground">
                    {c}
                  </span>
                ))}
              </div>
              <h3 className="display-3 mt-4">{format.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {format.description}
              </p>
              <dl className="mt-5 space-y-2 border-t border-border pt-5 text-sm">
                <div className="flex gap-4">
                  <dt className="label-xs w-24 shrink-0 pt-0.5 text-muted-foreground">Material</dt>
                  <dd>{format.material}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="label-xs w-24 shrink-0 pt-0.5 text-muted-foreground">Formats</dt>
                  <dd>{format.formats}</dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {visible.length === 0 ? (
        <p className="py-20 text-center text-sm text-muted-foreground">
          No packaging format matches this filter yet.
        </p>
      ) : null}
    </div>
  );
}
