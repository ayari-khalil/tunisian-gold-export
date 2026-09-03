import { motion } from "motion/react";
import { marketPoints, origin } from "@/data/markets";

function arc(x1: number, y1: number, x2: number, y2: number) {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - Math.abs(x2 - x1) * 0.35 - 20;
  return `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`;
}

/** Stylised route map. Destinations are target markets, not current shipments. */
export function ExportMap() {
  return (
    <div className="relative w-full overflow-hidden">
      <svg
        viewBox="380 90 240 350"
        className="h-auto w-full"
        role="img"
        aria-label="Stylised map showing Tunisia and target markets in Europe and Africa"
      >
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%">
            <stop offset="0%" stopColor="var(--gold)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {marketPoints.map((p, i) => (
          <motion.path
            key={`route-${p.name}`}
            d={arc(origin.x, origin.y, p.x, p.y)}
            fill="none"
            stroke="var(--gold)"
            strokeWidth={0.7}
            strokeOpacity={0.55}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.6, delay: i * 0.12, ease: "easeInOut" }}
          />
        ))}

        <circle cx={origin.x} cy={origin.y} r={26} fill="url(#glow)" />
        <circle cx={origin.x} cy={origin.y} r={4} fill="var(--gold)" />
        <text
          x={origin.x + 9}
          y={origin.y + 3}
          fontSize={7}
          fill="currentColor"
          className="font-sans tracking-[0.2em] uppercase"
        >
          Tunisia
        </text>

        {marketPoints.map((p, i) => (
          <motion.g
            key={p.name}
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
            style={{ transformOrigin: `${p.x}px ${p.y}px` }}
          >
            <circle cx={p.x} cy={p.y} r={2.6} fill="currentColor" fillOpacity={0.85} />
            <text
              x={p.x + 6}
              y={p.y + 2.5}
              fontSize={5.6}
              fill="currentColor"
              fillOpacity={0.7}
              className="font-sans"
            >
              {p.name}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
