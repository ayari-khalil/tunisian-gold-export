import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { BOTTLE_SIZES } from "@/data/packaging";
import { Section, SectionHeading } from "@/components/common/Section";
import { Button } from "@/components/ui/button";
import { Package, ShieldCheck, ArrowRight, Sparkles, Layers, Box, Check } from "lucide-react";

export function BottleSizesShowcase() {
  const [activeBottleId, setActiveBottleId] = useState<string>("1l-bottle");
  const selectedBottle = BOTTLE_SIZES.find((b) => b.id === activeBottleId) || BOTTLE_SIZES[0];

  return (
    <Section tone="sand" className="relative py-16 md:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Product Packaging Range"
          title="Bottle Sizes & Retail Formats"
          intro="Explore our official range of extra virgin olive oil bottles—engineered for retail shelves, fine dining tables, and modern culinary misting."
        />

        {/* Top 4 Quick Size Cards Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BOTTLE_SIZES.map((bottle) => {
            const isSelected = bottle.id === activeBottleId;
            return (
              <motion.div
                key={bottle.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                onClick={() => setActiveBottleId(bottle.id)}
                className={`cursor-pointer group flex flex-col justify-between rounded-2xl border p-5 transition-all duration-300 ${
                  isSelected
                    ? "border-gold bg-card shadow-medium ring-2 ring-gold/40"
                    : "border-border/80 bg-background/80 hover:border-gold/50 hover:bg-card"
                }`}
              >
                <div>
                  {/* Volume Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                      isSelected ? "bg-gold text-gold-foreground" : "bg-muted text-muted-foreground"
                    }`}>
                      {bottle.volume}
                    </span>
                    {isSelected && (
                      <span className="flex size-6 items-center justify-center rounded-full bg-olive text-olive-foreground">
                        <Check className="size-3.5" />
                      </span>
                    )}
                  </div>

                  {/* Bottle Photo Preview */}
                  <div className="relative my-4 flex h-52 w-full items-center justify-center rounded-xl bg-gradient-to-b from-muted/30 to-muted/80 p-3 overflow-hidden">
                    <img
                      src={bottle.image}
                      alt={bottle.name}
                      className="h-full max-h-44 w-auto object-contain transition-transform duration-500 group-hover:scale-105 filter drop-shadow-md"
                      loading="lazy"
                    />
                  </div>

                  {/* Title & Category */}
                  <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-olive transition-colors">
                    {bottle.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    {bottle.category}
                  </p>
                </div>

                <div className="mt-4 border-t border-border/50 pt-3 flex items-center justify-between text-xs font-medium text-olive">
                  <span>View Full Specs</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Inspection Panel for Selected Bottle */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedBottle.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
            className="mt-12 rounded-3xl border border-border bg-card p-6 md:p-10 shadow-soft"
          >
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              {/* Product Image Column (5 cols) */}
              <div className="relative flex flex-col items-center justify-center rounded-2xl border border-border/60 bg-gradient-to-b from-background to-muted/40 p-8 shadow-inner lg:col-span-5">
                <span className="absolute top-4 left-4 rounded-full bg-olive/10 px-3 py-1 text-xs font-semibold text-olive border border-olive/20">
                  {selectedBottle.volume} Format
                </span>

                <img
                  src={selectedBottle.image}
                  alt={selectedBottle.name}
                  className="h-72 md:h-80 w-auto object-contain filter drop-shadow-xl transition-transform duration-700 hover:scale-105"
                />

                <div className="mt-6 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <ShieldCheck className="size-4 text-gold" />
                  Dark UV-Shielded Glass • Food-Grade Sealed
                </div>
              </div>

              {/* Details & Commercial Specs Column (7 cols) */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                  <div>
                    <span className="label-xs text-gold uppercase tracking-widest font-semibold">
                      {selectedBottle.category}
                    </span>
                    <h3 className="font-serif text-3xl font-semibold text-foreground md:text-4xl mt-1">
                      {selectedBottle.name}
                    </h3>
                  </div>
                  <span className="rounded-xl border border-gold/40 bg-gold/10 px-4 py-2 font-serif text-lg font-bold text-gold-foreground">
                    {selectedBottle.volume}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {selectedBottle.description}
                </p>

                {/* Ideal Use Case */}
                <div className="mt-6 rounded-xl border border-border/70 bg-background/80 p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                    <Sparkles className="size-3.5 text-accent" /> Recommended Target Markets & Uses
                  </div>
                  <p className="mt-1 text-sm font-medium text-foreground">
                    {selectedBottle.idealFor}
                  </p>
                </div>

                {/* Export Packaging & Dimensions Table */}
                <div className="mt-6 grid gap-3 sm:grid-cols-2 text-xs">
                  <div className="rounded-xl border border-border/60 bg-background/50 p-3.5">
                    <div className="flex items-center gap-1.5 font-semibold text-foreground">
                      <Box className="size-3.5 text-olive" /> Dimensions & Closure
                    </div>
                    <p className="mt-1 text-muted-foreground">{selectedBottle.dimensions}</p>
                    <p className="mt-1 text-muted-foreground">Cap: {selectedBottle.capType}</p>
                  </div>

                  <div className="rounded-xl border border-border/60 bg-background/50 p-3.5">
                    <div className="flex items-center gap-1.5 font-semibold text-foreground">
                      <Layers className="size-3.5 text-olive" /> Export Logistics
                    </div>
                    <p className="mt-1 text-muted-foreground">{selectedBottle.cartonQuantity}</p>
                    <p className="mt-1 text-muted-foreground">{selectedBottle.palletQuantity}</p>
                  </div>
                </div>

                {/* MOQ Badge & Call to Action */}
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                  <div>
                    <span className="text-xs text-muted-foreground">Minimum Order Quantity:</span>
                    <p className="text-sm font-semibold text-foreground">{selectedBottle.containerMoq}</p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button asChild variant="gold" size="lg">
                      <Link to="/request-sample">
                        Request Sample <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link to="/request-quote">Request Commercial Quote</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}
