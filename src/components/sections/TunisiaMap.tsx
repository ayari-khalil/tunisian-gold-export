import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section, SectionHeading } from "@/components/common/Section";
import { ShieldCheck, MapPin, Award, Anchor, Sparkles } from "lucide-react";

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
    pin: { x: 94, y: 32 },
    variety: "Chétoui & Maritime Clones",
    terroir: "Northern Mediterranean coastal microclimate",
    acidity: "< 0.25%",
    polyphenols: "High (450+ mg/kg)",
    sensoryNotes: ["Fresh green leaf", "Artichoke", "Sweet almond finish"],
    exportRole: "Coastal estate groves & direct port dispatch",
    description:
      "Tunisia's northernmost olive belt. Maritime coastal breezes preserve fruit moisture, yielding extra virgin olive oils with crisp green fruitiness and delicate floral aroma.",
  },
  {
    id: "beja",
    name: "Béja",
    frenchName: "Béja",
    arabicName: "باجة",
    pin: { x: 64, y: 68 },
    variety: "100% Chétoui (High Antioxidant)",
    terroir: "Fertile Tell Atlas hills & Medjerda river basin",
    acidity: "< 0.20% Ultra-Low",
    polyphenols: "Very High (> 550 mg/kg)",
    sensoryNotes: ["Green tomato", "Intense bitterness", "Peppery throat kick"],
    exportRole: "Specialty organic & high-polyphenol gourmet bottling",
    description:
      "Renowned worldwide for early harvest Chétoui olives. The high altitude and rich soil produce robust, intensely peppery oils packed with natural antioxidants.",
  },
  {
    id: "tunis",
    name: "Tunis",
    frenchName: "Tunis",
    arabicName: "تونس",
    pin: { x: 114, y: 58 },
    variety: "Northern Reserve Export Blends",
    terroir: "Gulf of Tunis coastal plains & commercial center",
    acidity: "< 0.30% Export Standard",
    polyphenols: "Balanced (380+ mg/kg)",
    sensoryNotes: ["Smooth golden fruitiness", "Mild grassy notes", "Clean finish"],
    exportRole: "Primary Commercial HQ, Quality Control Lab & Port of Radès FCL Terminal",
    description:
      "The administrative and logistical heart of Dar Zitouna. Manages IOC-accredited quality testing, customs compliance, sample airfreight, and FCL container shipping from Port of Radès.",
  },
  {
    id: "zaghouan",
    name: "Zaghouan",
    frenchName: "Zaghouan",
    arabicName: "زغوان",
    pin: { x: 102, y: 104 },
    variety: "Chétoui & Oueslati",
    terroir: "Mount Zaghouan spring water & Roman aqueduct valleys",
    acidity: "< 0.22%",
    polyphenols: "High (480+ mg/kg)",
    sensoryNotes: ["Wild Mediterranean herbs", "Green apple", "Refined peppery touch"],
    exportRole: "Single-origin reserve lots & private label bottling",
    description:
      "Historic olive groves irrigated by mountain mineral springs. Produces exceptionally smooth, aromatic extra virgin olive oil ideal for gourmet retail lines.",
  },
  {
    id: "kef",
    name: "Le Kef",
    frenchName: "Le Kef",
    arabicName: "الكاف",
    pin: { x: 48, y: 118 },
    variety: "Highland Mountain Chétoui",
    terroir: "High-elevation inland plateau & limestone soils",
    acidity: "< 0.24%",
    polyphenols: "High (> 500 mg/kg)",
    sensoryNotes: ["Robust bitterness", "Dark green olive", "Complex herbaceous depth"],
    exportRole: "Highland smallholder cooperative sourcing & organic lots",
    description:
      "Cool mountain climate at high elevation slows fruit ripening, creating dense, complex oils with extraordinary oxidative stability and extended shelf life.",
  },
];

/** Detailed SVG path silhouette of Tunisia */
const TUNISIA_OUTLINE =
  "M 92 14 C 104 14, 116 18, 126 26 C 132 32, 138 42, 130 54 C 124 62, 136 74, 138 86 C 140 98, 128 112, 126 128 C 124 144, 128 160, 118 178 C 110 194, 102 216, 96 242 C 90 268, 80 292, 70 318 C 62 338, 48 348, 38 344 C 32 340, 26 318, 32 292 C 38 266, 44 240, 42 212 C 40 184, 46 156, 44 130 C 42 104, 52 78, 58 54 C 64 36, 76 14, 92 14 Z";

export function TunisiaMap() {
  const [selectedId, setSelectedId] = useState<string>("beja");
  const selectedRegion = OPERATIONAL_REGIONS.find((r) => r.id === selectedId) || OPERATIONAL_REGIONS[1];

  return (
    <Section tone="ivory" className="relative overflow-hidden py-16 md:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Terroir & Origin"
          title="Northern Sourcing & Export Network"
          intro="Our operations are strictly concentrated across Tunisia's 5 premier northern agricultural states—from high-polyphenol mountain groves to our export terminal in Tunis."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Interactive Map Viewport (5 cols) */}
          <div className="relative mx-auto flex w-full max-w-[26rem] flex-col items-center rounded-2xl border border-border/80 bg-background/80 p-6 shadow-soft backdrop-blur-sm lg:col-span-5">
            <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <span className="inline-block size-2 rounded-full bg-olive animate-pulse" />
              Interactive Operational Map
            </div>

            <svg
              viewBox="10 0 150 360"
              className="h-auto w-full max-w-[220px] drop-shadow-md"
              role="img"
              aria-label="Map of Tunisia displaying operational states"
            >
              <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--olive)" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="var(--gold)" stopOpacity="0.06" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Tunisia Contour */}
              <motion.path
                d={TUNISIA_OUTLINE}
                fill="url(#mapGradient)"
                stroke="var(--olive)"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
              />

              {/* Mediterranean Water Label Accent */}
              <text x="110" y="30" fontSize="7" fill="var(--olive)" fillOpacity="0.4" fontStyle="italic" letterSpacing="1">
                Mediterranean Sea
              </text>

              {/* Region Pins */}
              {OPERATIONAL_REGIONS.map((region) => {
                const isSelected = region.id === selectedId;
                return (
                  <g
                    key={region.id}
                    className="cursor-pointer group"
                    onClick={() => setSelectedId(region.id)}
                    onMouseEnter={() => setSelectedId(region.id)}
                  >
                    {/* Animated Radar Pulsing Ring */}
                    {isSelected && (
                      <motion.circle
                        cx={region.pin.x}
                        cy={region.pin.y}
                        r={12}
                        fill="none"
                        stroke="var(--gold)"
                        strokeWidth={1}
                        initial={{ scale: 0.5, opacity: 1 }}
                        animate={{ scale: 1.4, opacity: 0 }}
                        transition={{ duration: 1.6, repeat: Infinity }}
                      />
                    )}

                    {/* Pin Outer Ring */}
                    <circle
                      cx={region.pin.x}
                      cy={region.pin.y}
                      r={isSelected ? 6 : 4}
                      fill={isSelected ? "var(--gold)" : "var(--olive)"}
                      filter={isSelected ? "url(#glow)" : undefined}
                      className="transition-all duration-300 group-hover:scale-125"
                    />

                    {/* Pin Inner Dot */}
                    <circle
                      cx={region.pin.x}
                      cy={region.pin.y}
                      r={2}
                      fill="#FFFFFF"
                    />

                    {/* Pin Text Label */}
                    <text
                      x={region.pin.x + 8}
                      y={region.pin.y + 3}
                      fontSize={isSelected ? 8.5 : 7.5}
                      fontWeight={isSelected ? "600" : "400"}
                      fill={isSelected ? "var(--olive-deep)" : "currentColor"}
                      className="transition-all duration-300 pointer-events-none"
                    >
                      {region.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Quick State Selector Buttons */}
            <div className="mt-6 flex flex-wrap justify-center gap-1.5 border-t border-border/60 pt-4">
              {OPERATIONAL_REGIONS.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedId(r.id)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                    r.id === selectedId
                      ? "bg-olive text-olive-foreground shadow-sm"
                      : "bg-muted/60 text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {r.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Detailed Interactive Info Card (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRegion.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
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

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-olive/10 px-3 py-1 text-xs font-semibold text-olive">
                    <ShieldCheck className="size-3.5" /> Certified Origin
                  </span>
                </div>

                {/* Region Description */}
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  {selectedRegion.description}
                </p>

                {/* Key Specifications Grid */}
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border/70 bg-background/60 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                      <Sparkles className="size-3.5 text-accent" /> Olive Variety
                    </div>
                    <p className="mt-1 font-serif text-lg font-medium text-foreground">
                      {selectedRegion.variety}
                    </p>
                  </div>

                  <div className="rounded-xl border border-border/70 bg-background/60 p-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                      <Award className="size-3.5 text-accent" /> Chemical Profile
                    </div>
                    <p className="mt-1 text-sm font-medium text-foreground">
                      Acidity {selectedRegion.acidity} • {selectedRegion.polyphenols}
                    </p>
                  </div>
                </div>

                {/* Terroir & Export Role */}
                <div className="mt-4 space-y-3 rounded-xl border border-border/70 bg-background/60 p-4">
                  <div className="flex items-start gap-2 text-xs">
                    <span className="font-semibold text-foreground min-w-[80px]">Terroir:</span>
                    <span className="text-muted-foreground">{selectedRegion.terroir}</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs border-t border-border/40 pt-3">
                    <span className="font-semibold text-foreground min-w-[80px]">Logistics:</span>
                    <span className="text-muted-foreground flex items-center gap-1">
                      <Anchor className="size-3 text-gold shrink-0" /> {selectedRegion.exportRole}
                    </span>
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
