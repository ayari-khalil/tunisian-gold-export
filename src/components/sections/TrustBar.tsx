import { Award, Globe2, MapPin, PackageCheck, Route } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";

const items = [
  { icon: MapPin, label: "Tunisian Origin" },
  { icon: Award, label: "Extra Virgin Quality" },
  { icon: Route, label: "Full Traceability" },
  { icon: PackageCheck, label: "Export Ready" },
  { icon: Globe2, label: "International Distribution" },
];

export function TrustBar() {
  return (
    <div className="border-y border-border bg-sand">
      <div className="container-x">
        <ul className="grid grid-cols-2 divide-border md:grid-cols-3 lg:grid-cols-5 lg:divide-x">
          {items.map((item, i) => (
            <li key={item.label} className="border-b border-border last:border-b-0 lg:border-b-0">
              <Reveal delay={i * 0.06} className="flex items-center gap-3 px-2 py-6 lg:justify-center">
                <item.icon className="size-4 shrink-0 text-accent" strokeWidth={1.5} />
                <span className="label-xs text-foreground/80">{item.label}</span>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
