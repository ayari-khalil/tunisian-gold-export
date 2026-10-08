import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section, SectionHeading } from "@/components/common/Section";
import { ShieldCheck, MapPin, Award, Anchor, Sparkles, Navigation, Mountain } from "lucide-react";

export interface RegionDetail {
  id: string;
  name: string;
  frenchName: string;
  arabicName: string;
  pin: { x: number; y: number };
  variety: string;
  terroir: string;
  acidity: string;
  polyphenols: string;
  sensoryNotes: string[];
  exportRole: string;
  description: string;
}

export const OPERATIONAL_REGIONS: RegionDetail[] = [
  {
    id: "bizerte",
    name: "Bizerte",
    frenchName: "Bizerte",
    arabicName: "بنزرت",
    pin: { x: 96, y: 18 },
    variety: "Chétoui & Coastal Clones",
    terroir: "Northernmost African Mediterranean coastline",
    acidity: "< 0.25%",
    polyphenols: "High (450+ mg/kg)",
    sensoryNotes: ["Fresh green leaf", "Artichoke", "Sweet almond finish"],
    exportRole: "Coastal estate groves & direct maritime dispatch via Port of Bizerte",
    description:
      "Tunisia's northernmost maritime olive peninsula. The sea breeze and temperate winter rainfall preserve olive moisture, yielding extra virgin oils with crisp green fruitiness and delicate floral aroma.",
  },
  {
    id: "beja",
    name: "Béja",
    frenchName: "Béja",
    arabicName: "باجة",
    pin: { x: 68, y: 44 },
    variety: "100% Chétoui (High Antioxidant)",
    terroir: "Fertile Tell Atlas mountain slopes & Medjerda valley",
    acidity: "< 0.20% Ultra-Low",
    polyphenols: "Very High (> 550 mg/kg)",
    sensoryNotes: ["Green tomato", "Intense bitterness", "Peppery throat kick"],
    exportRole: "Specialty organic & high-polyphenol gourmet bottling",
    description:
      "World-renowned capital of the Chétoui olive. High altitude and rich limestone soils create intense, peppery extra virgin olive oils loaded with natural polyphenols.",
  },
  {
    id: "tunis",
    name: "Tunis",
    frenchName: "Tunis",
    arabicName: "تونس",
    pin: { x: 114, y: 36 },
    variety: "Northern Reserve Export Blends",
    terroir: "Gulf of Tunis coastal plains & commercial shipping hub",
    acidity: "< 0.30% Export Standard",
    polyphenols: "Balanced (380+ mg/kg)",
    sensoryNotes: ["Smooth golden fruitiness", "Mild grassy notes", "Clean finish"],
    exportRole: "Primary Commercial HQ, Quality Control Lab & Port of Radès FCL Terminal",
    description:
      "The administrative and logistical heart of Dar Zitouna. Manages IOC-accredited quality testing, customs clearance, express sample airfreight, and FCL container shipping from Port of Radès.",
  },
  {
    id: "zaghouan",
    name: "Zaghouan",
    frenchName: "Zaghouan",
    arabicName: "زغوان",
    pin: { x: 104, y: 64 },
    variety: "Chétoui & Oueslati",
    terroir: "Mount Zaghouan spring water & Roman aqueduct valleys",
    acidity: "< 0.22%",
    polyphenols: "High (480+ mg/kg)",
    sensoryNotes: ["Wild Mediterranean herbs", "Green apple", "Refined peppery touch"],
    exportRole: "Single-origin reserve lots & private label bottling",
    description:
      "Historic olive groves fed by pure mountain mineral springs. Produces exceptionally smooth, aromatic extra virgin olive oil ideal for gourmet retail lines.",
  },
  {
    id: "kef",
    name: "Le Kef",
    frenchName: "Le Kef",
    arabicName: "الكاف",
    pin: { x: 52, y: 88 },
    variety: "Highland Mountain Chétoui",
    terroir: "High-elevation inland plateau & limestone cliffs",
    acidity: "< 0.24%",
    polyphenols: "High (> 500 mg/kg)",
    sensoryNotes: ["Robust bitterness", "Dark green olive", "Herbaceous complexity"],
    exportRole: "Highland smallholder cooperative sourcing & organic lots",
    description:
      "Cool mountain climate at high elevation slows fruit ripening, creating dense, complex oils with extraordinary oxidative stability and extended shelf life.",
  },
];

/** Geographically accurate SVG vector contour of Tunisia */
const TUNISIA_MAP_PATH =
  "M 70 20 C 80 12, 95 10, 110 14 C 120 16, 125 22, 128 30 C 134 32, 148 34, 155 42 C 162 50, 158 60, 146 66 C 138 70, 134 78, 138 88 C 144 100, 146 114, 140 128 C 136 138, 134 148, 138 160 C 142 172, 146 182, 136 196 C 128 208, 122 216, 125 228 C 128 240, 120 250, 116 260 C 110 275, 100 290, 92 310 C 84 330, 75 350, 68 375 C 64 388, 56 395, 48 390 C 42 385, 40 370, 46 350 C 52 328, 56 305, 52 285 C 48 265, 38 250, 42 235 C 46 220, 56 210, 52 195 C 48 180, 36 170, 38 150 C 40 130, 48 115, 44 95 C 40 78, 48 60, 54 44 C 60 30, 64 22, 70 20 Z";

/** Island Vector Silhouettes */
const DJERBA_ISLAND = "M 132 208 C 138 206, 144 212, 140 220 C 134 222, 128 216, 132 208 Z";
const KERKENNAH_ISLANDS = "M 148 154 C 156 150, 160 156, 152 160 Z";

export function TunisiaMap() {
  const [selectedId, setSelectedId] = useState<string>("beja");
  const selectedRegion = OPERATIONAL_REGIONS.find((r) => r.id === selectedId) || OPERATIONAL_REGIONS[1];

  return (
    <Section tone="ivory" className="relative overflow-hidden py-16 md:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Terroir & Origin"
          title="Northern Sourcing & Export Map"
          intro="Our operations are strictly concentrated across Tunisia's 5 premier northern agricultural states—from high-polyphenol mountain groves to our export terminal in Tunis."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Authentic Cartographic Map (5 cols) */}
          <div className="relative mx-auto flex w-full max-w-[26rem] flex-col items-center rounded-2xl border border-border/80 bg-background/90 p-6 shadow-soft backdrop-blur-md lg:col-span-5">
            {/* Top Bar Cartographic Header */}
            <div className="flex w-full items-center justify-between border-b border-border/60 pb-3 text-xs font-medium text-muted-foreground">
              <div className="flex items-center gap-1.5 text-olive font-semibold">
                <Navigation className="size-3.5 text-gold animate-pulse" />
                Republic of Tunisia Map
              </div>
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground/70">
                37°N 10°E
              </span>
            </div>

            <div className="relative w-full py-4 flex justify-center">
              <svg
                viewBox="20 0 160 410"
                className="h-auto w-full max-w-[240px] filter drop-shadow-lg"
                role="img"
                aria-label="Geographically accurate map of Tunisia with 5 operational states"
              >
                <defs>
                  {/* Subtle Topographic Terrain Fill */}
                  <linearGradient id="tunisiaTerrainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--olive)" stopOpacity="0.22" />
                    <stop offset="40%" stopColor="var(--gold)" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="var(--olive-deep)" stopOpacity="0.06" />
                  </linearGradient>

                  {/* Active Pin Glow Effect */}
                  <filter id="goldGlowPin" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Country Outline (Mainland Tunisia) */}
                <motion.path
                  d={TUNISIA_MAP_PATH}
                  fill="url(#tunisiaTerrainGrad)"
                  stroke="var(--olive)"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                />

                {/* Djerba Island */}
                <path d={DJERBA_ISLAND} fill="var(--olive)" fillOpacity={0.25} stroke="var(--olive)" strokeWidth={1} />
                
                {/* Kerkennah Islands */}
                <path d={KERKENNAH_ISLANDS} fill="var(--olive)" fillOpacity={0.25} stroke="var(--olive)" strokeWidth={1} />

                {/* Geographic Sea Labels */}
                <text x="146" y="28" fontSize="7" fill="var(--olive)" fillOpacity="0.45" fontStyle="italic" letterSpacing="0.5">
                  Cap Bon
                </text>
                <text x="130" y="110" fontSize="6.5" fill="var(--olive)" fillOpacity="0.35" fontStyle="italic">
                  Gulf of Hammamet
                </text>
                <text x="120" y="180" fontSize="6.5" fill="var(--olive)" fillOpacity="0.35" fontStyle="italic">
                  Gulf of Gabès
                </text>

                {/* Mountain Ridge Accent Lines (Tell Atlas / Dorsale) */}
                <path d="M 50 35 Q 70 45 95 38" fill="none" stroke="var(--olive)" strokeOpacity={0.25} strokeWidth={1} strokeDasharray="2 2" />
                <path d="M 45 75 Q 70 80 100 70" fill="none" stroke="var(--olive)" strokeOpacity={0.25} strokeWidth={1} strokeDasharray="2 2" />

                {/* Interactive Operational State Pins */}
                {OPERATIONAL_REGIONS.map((region) => {
                  const isSelected = region.id === selectedId;
                  return (
                    <g
                      key={region.id}
                      className="cursor-pointer group"
                      onClick={() => setSelectedId(region.id)}
                      onMouseEnter={() => setSelectedId(region.id)}
                    >
                      {/* Outer Pulsing Aura Ring */}
                      {isSelected && (
                        <motion.circle
                          cx={region.pin.x}
                          cy={region.pin.y}
                          r={14}
                          fill="none"
                          stroke="var(--gold)"
                          strokeWidth={1.2}
                          initial={{ scale: 0.4, opacity: 1 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          transition={{ duration: 1.6, repeat: Infinity }}
                        />
                      )}

                      {/* Pin Connection Line to Label */}
                      <line
                        x1={region.pin.x}
                        y1={region.pin.y}
                        x2={region.pin.x + (region.pin.x > 90 ? 12 : -12)}
                        y2={region.pin.y}
                        stroke={isSelected ? "var(--gold)" : "var(--olive)"}
                        strokeWidth={isSelected ? 1.2 : 0.8}
                        strokeOpacity={isSelected ? 0.9 : 0.4}
                      />

                      {/* Outer Pin Circle */}
                      <circle
                        cx={region.pin.x}
                        cy={region.pin.y}
                        r={isSelected ? 5.5 : 4}
                        fill={isSelected ? "var(--gold)" : "var(--olive)"}
                        filter={isSelected ? "url(#goldGlowPin)" : undefined}
                        className="transition-all duration-300 group-hover:scale-125"
                      />

                      {/* Inner Pin White Dot */}
                      <circle cx={region.pin.x} cy={region.pin.y} r={1.8} fill="#FFFFFF" />

                      {/* Text Label */}
                      <text
                        x={region.pin.x + (region.pin.x > 90 ? 15 : -14)}
                        y={region.pin.y + 3}
                        textAnchor={region.pin.x > 90 ? "start" : "end"}
                        fontSize={isSelected ? 8.5 : 7.5}
                        fontWeight={isSelected ? "700" : "500"}
                        fill={isSelected ? "var(--olive-deep)" : "currentColor"}
                        className="transition-all duration-300 pointer-events-none"
                      >
                        {region.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* State Selector Buttons */}
            <div className="mt-4 flex flex-wrap justify-center gap-1.5 border-t border-border/60 pt-4 w-full">
              {OPERATIONAL_REGIONS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedId(r.id)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                    r.id === selectedId
                      ? "bg-olive text-olive-foreground shadow-sm scale-105"
                      : "bg-muted/70 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {r.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive State Info Card (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRegion.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft"
              >
                {/* Header Badge & Names */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
                  <div>
                    <div className="flex items-center gap-2">
                      <MapPin className="size-4 text-gold" />
                      <span className="label-xs text-gold uppercase tracking-widest">
                        State of Operation
                      </span>
                    </div>
                    <div className="mt-1 flex items-baseline gap-3">
                      <h3 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
                        {selectedRegion.name}
                      </h3>
                      <span className="text-sm font-medium text-muted-foreground font-serif">
                        {selectedRegion.frenchName} • {selectedRegion.arabicName}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-olive/10 px-3.5 py-1.5 text-xs font-semibold text-olive border border-olive/20">
                    <ShieldCheck className="size-4" /> Verified Terroir
                  </span>
                </div>

                {/* Region Description */}
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  {selectedRegion.description}
                </p>

                {/* Key Specifications Grid */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border/70 bg-background/70 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                      <Sparkles className="size-3.5 text-accent" /> Olive Variety
                    </div>
                    <p className="mt-1 font-serif text-lg font-medium text-foreground">
                      {selectedRegion.variety}
                    </p>
                  </div>

                  <div className="rounded-xl border border-border/70 bg-background/70 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                      <Award className="size-3.5 text-accent" /> Chemical Profile
                    </div>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      Acidity {selectedRegion.acidity} • {selectedRegion.polyphenols}
                    </p>
                  </div>
                </div>

                {/* Terroir & Export Role */}
                <div className="mt-4 space-y-3 rounded-xl border border-border/70 bg-background/70 p-4">
                  <div className="flex items-start gap-2 text-xs">
                    <Mountain className="size-3.5 text-olive shrink-0 mt-0.5" />
                    <span className="font-semibold text-foreground min-w-[70px]">Terroir:</span>
                    <span className="text-muted-foreground">{selectedRegion.terroir}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs border-t border-border/40 pt-3">
                    <Anchor className="size-3.5 text-gold shrink-0 mt-0.5" />
                    <span className="font-semibold text-foreground min-w-[70px]">Logistics:</span>
                    <span className="text-muted-foreground">{selectedRegion.exportRole}</span>
                  </div>
                </div>

                {/* Sensory Notes Badges */}
                <div className="mt-6">
                  <span className="text-xs font-semibold text-muted-foreground">Sensory Profile:</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedRegion.sensoryNotes.map((note) => (
                      <span
                        key={note}
                        className="rounded-lg border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-foreground"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
}
