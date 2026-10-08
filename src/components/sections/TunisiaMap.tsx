import { motion } from "motion/react";
import { oliveRegions } from "@/data/process";

/** Stylised, non-cartographic outline of Tunisia used as a design element. */
const TUNISIA_PATH =
  "M96 12 L118 20 L128 44 L120 66 L128 88 L116 112 L118 140 L104 168 L96 200 L86 236 L74 268 L62 300 L54 336 L40 330 L34 300 L44 268 L38 240 L48 210 L44 178 L56 150 L52 120 L64 92 L60 62 L74 36 Z";

const pins = [
  { name: "Bizerte", x: 86, y: 22 },
  { name: "Béja", x: 58, y: 44 },
  { name: "Tunis", x: 104, y: 38 },
  { name: "Zaghouan", x: 92, y: 64 },
  { name: "Le Kef", x: 48, y: 76 },
];

export function TunisiaMap() {
  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center">
      <div className="mx-auto w-full max-w-[22rem]">
        <svg viewBox="20 0 130 350" className="h-auto w-full" role="img" aria-label="Stylised map of Tunisia with major olive-growing regions">
          <motion.path
            d={TUNISIA_PATH}
            fill="var(--olive)"
            fillOpacity={0.08}
            stroke="var(--olive)"
            strokeWidth={1.2}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
          {pins.map((pin, i) => (
            <motion.g
              key={pin.name}
              initial={{ opacity: 0, y: -6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.09 }}
            >
              <circle cx={pin.x} cy={pin.y} r={3} fill="var(--gold)" />
              <text x={pin.x + 7} y={pin.y + 3} fontSize={7.5} fill="currentColor" fillOpacity={0.75}>
                {pin.name}
              </text>
            </motion.g>
          ))}
        </svg>
      </div>

      <ul className="grid grid-cols-2 gap-x-8 gap-y-5">
        {oliveRegions.map((r) => (
          <li key={r.name} className="border-b border-border pb-4">
            <p className="font-serif text-xl">{r.name}</p>
            <p className="label-xs mt-1 text-muted-foreground">{r.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
