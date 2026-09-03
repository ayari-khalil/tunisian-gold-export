import { Reveal } from "@/components/common/Reveal";
import { buyerSegments } from "@/data/buyers";

export function BuyerSegments() {
  return (
    <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
      {buyerSegments.map((seg, i) => (
        <Reveal
          key={seg.title}
          delay={(i % 4) * 0.07}
          className="group bg-background p-8 transition-colors duration-500 hover:bg-sand"
        >
          <span className="label-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="mt-4 font-serif text-2xl">{seg.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{seg.description}</p>
        </Reveal>
      ))}
    </div>
  );
}
