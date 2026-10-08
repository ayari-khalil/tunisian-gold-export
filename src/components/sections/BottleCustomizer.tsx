import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Sparkles, Sliders, Box, ShieldCheck, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { BrandLogo } from "@/components/common/BrandLogo";

interface BottleOption {
  id: string;
  name: string;
  subtitle: string;
  glassColor: string;
  glassGradient: string;
  capColor: string;
  shape: "dorica" | "marasca" | "tin";
  sizes: string[];
  idealFor: string;
}

const BOTTLE_TYPES: BottleOption[] = [
  {
    id: "dorica-dark",
    name: "Dorica Emerald Dark Glass",
    subtitle: "Classic Mediterranean UV-Protected Glass",
    glassColor: "#1B3B2B",
    glassGradient: "linear-gradient(135deg, #2D5A40 0%, #152E22 60%, #0B1912 100%)",
    capColor: "#D4AF37",
    shape: "dorica",
    sizes: ["250 ml", "500 ml", "750 ml"],
    idealFor: "Gourmet retail, delicatessens, premium organic olive oil lines",
  },
  {
    id: "marasca-square",
    name: "Marasca Square Antique Glass",
    subtitle: "Modern Square Silhouette for Supermarket Shelves",
    glassColor: "#2A402D",
    glassGradient: "linear-gradient(135deg, #3A583F 0%, #203323 60%, #101B12 100%)",
    capColor: "#8B0000",
    shape: "marasca",
    sizes: ["250 ml", "500 ml", "750 ml", "1 L"],
    idealFor: "Retail grocery chains, private label export, everyday Extra Virgin",
  },
  {
    id: "tin-gold",
    name: "Heritage Metal Tin Packaging",
    subtitle: "Maximum Light Barrier & Ocean Freight Protection",
    glassColor: "#C59B27",
    glassGradient: "linear-gradient(135deg, #E6C158 0%, #B88E1E 60%, #7A5B0B 100%)",
    capColor: "#111111",
    shape: "tin",
    sizes: ["1 L", "3 L", "5 L"],
    idealFor: "Restaurants, hotel dining, food service, long-distance maritime export",
  },
];

export function BottleCustomizer() {
  const [selectedBottle, setSelectedBottle] = useState<BottleOption>(BOTTLE_TYPES[0]);
  const [selectedSize, setSelectedSize] = useState<string>(BOTTLE_TYPES[0].sizes[1]);
  const [customBrand, setCustomBrand] = useState<string>("Dar Zitouna Gold");
  const [customSubline, setCustomSubline] = useState<string>("Tunisian Extra Virgin Olive Oil");
  const [variety, setVariety] = useState<string>("Chemlali & Chétoui Blend");
  const [capStyle, setCapStyle] = useState<string>("Gold Foil");

  const handleBottleChange = (bottle: BottleOption) => {
    setSelectedBottle(bottle);
    if (!bottle.sizes.includes(selectedSize)) {
      setSelectedSize(bottle.sizes[0]);
    }
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-6 md:p-10 shadow-lift">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-border">
        <div>
          <div className="flex items-center gap-2 text-accent font-semibold text-xs uppercase tracking-widest">
            <Sparkles className="size-4" />
            <span>Interactive Branding Studio</span>
          </div>
          <h3 className="font-serif text-3xl md:text-4xl mt-1 text-foreground">
            Custom Bottle & Label Designer
          </h3>
          <p className="text-muted-foreground text-sm mt-1 max-w-xl">
            Visualize your private label or retail packaging on authentic Tunisian Extra Virgin Olive Oil bottles.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="quiet" size="sm" onClick={() => {
            setCustomBrand("Dar Zitouna Gold");
            setCustomSubline("Tunisian Extra Virgin Olive Oil");
          }}>
            Reset Studio
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Left Studio Controls */}
        <div className="lg:col-span-6 space-y-6">
          {/* 1. Bottle Format Selection */}
          <div>
            <Label className="text-xs uppercase tracking-wider text-muted-foreground mb-3 block font-semibold">
              1. Select Packaging Format
            </Label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {BOTTLE_TYPES.map((b) => {
                const active = b.id === selectedBottle.id;
                return (
                  <button
                    key={b.id}
                    onClick={() => handleBottleChange(b)}
                    className={`relative text-left p-4 rounded-xl border transition-all text-xs flex flex-col justify-between gap-2 ${
                      active
                        ? "border-olive bg-olive/10 shadow-sm ring-1 ring-olive"
                        : "border-border bg-background/50 hover:bg-muted/40"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-medium text-sm text-foreground">{b.name.split(" ")[0]}</span>
                      {active && <Check className="size-4 text-olive shrink-0" />}
                    </div>
                    <span className="text-[0.7rem] text-muted-foreground line-clamp-2">{b.subtitle}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Volume Size Selection */}
          <div>
            <Label className="text-xs uppercase tracking-wider text-muted-foreground mb-3 block font-semibold">
              2. Select Volume Size
            </Label>
            <div className="flex flex-wrap gap-2">
              {selectedBottle.sizes.map((sz) => (
                <button
                  key={sz}
                  onClick={() => setSelectedSize(sz)}
                  className={`px-4 py-2 rounded-lg border text-xs font-medium transition-all ${
                    selectedSize === sz
                      ? "border-olive bg-olive text-olive-foreground shadow-sm"
                      : "border-border bg-background hover:bg-muted"
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Label Text Branding */}
          <div className="p-4 rounded-2xl bg-muted/30 border border-border/70 space-y-4">
            <Label className="text-xs uppercase tracking-wider text-muted-foreground block font-semibold flex items-center gap-1.5">
              <Sliders className="size-3.5 text-accent" />
              3. Private Label Customization
            </Label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground block mb-1">Brand Name</label>
                <Input
                  value={customBrand}
                  onChange={(e) => setCustomBrand(e.target.value)}
                  placeholder="Your Brand Name"
                  className="bg-background text-sm"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground block mb-1">Subline / Descriptor</label>
                <Input
                  value={customSubline}
                  onChange={(e) => setCustomSubline(e.target.value)}
                  placeholder="Extra Virgin Olive Oil"
                  className="bg-background text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground block mb-1">Olive Variety Blend</label>
                <select
                  value={variety}
                  onChange={(e) => setVariety(e.target.value)}
                  aria-label="Select olive variety blend"
                  className="w-full h-9 rounded-md border border-input bg-background px-3 text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-olive"
                >
                  <option value="Chemlali & Chétoui Blend">Chemlali & Chétoui (Smooth & Fruity)</option>
                  <option value="100% Single Origin Chétoui">100% Single Origin Chétoui (Peppery & Robust)</option>
                  <option value="100% Organic Chemlali">100% Organic Chemlali (Golden & Mild)</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-muted-foreground block mb-1">Cap / Seal Finish</label>
                <select
                  value={capStyle}
                  onChange={(e) => setCapStyle(e.target.value)}
                  aria-label="Select cap or seal finish"
                  className="w-full h-9 rounded-md border border-input bg-background px-3 text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-olive"
                >
                  <option value="Gold Foil">Royal Gold Foil Seal</option>
                  <option value="Deep Matte Black">Deep Matte Black Screw Cap</option>
                  <option value="Vintage Crimson">Vintage Crimson Wax Seal</option>
                </select>
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <ShieldCheck className="size-4 text-emerald-600" />
              BRCGS & ISO 22000 Bottling Standards
            </span>
            <span className="flex items-center gap-1">
              <Box className="size-4 text-amber-600" />
              Palletized for Container Export
            </span>
          </div>
        </div>

        {/* Right Preview Canvas */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl bg-gradient-to-b from-charcoal/95 to-olive-deep text-olive-foreground relative overflow-hidden min-h-[420px]">
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-transparent opacity-60 pointer-events-none" />

          {/* Rendered Bottle SVG Graphic */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="relative w-44 md:w-52 h-80 flex items-center justify-center">
              {/* Bottle Cap */}
              <div
                className="absolute top-2 w-8 h-8 rounded-t-sm shadow-md z-20 transition-all duration-500"
                style={{
                  backgroundColor:
                    capStyle === "Deep Matte Black"
                      ? "#1A1A1A"
                      : capStyle === "Vintage Crimson"
                      ? "#8B0000"
                      : "#D4AF37",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
                }}
              />

              {/* Bottle Body */}
              <div
                className="w-36 md:w-44 h-68 rounded-t-3xl rounded-b-xl border border-white/20 relative overflow-hidden flex flex-col items-center justify-center shadow-2xl transition-all duration-500"
                style={{
                  background: selectedBottle.glassGradient,
                  boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
                }}
              >
                {/* Liquid Highlight Shimmer */}
                <div className="absolute inset-y-0 left-3 w-4 bg-white/10 blur-sm pointer-events-none" />

                {/* Printed Label Container */}
                <div className="w-28 md:w-34 py-5 px-3 rounded bg-ivory text-charcoal border border-amber-200/80 shadow-lg flex flex-col items-center text-center relative z-10 my-auto">
                  {/* Small Emblem */}
                  <div className="w-6 h-6 rounded-full bg-olive-deep flex items-center justify-center text-gold mb-1">
                    <span className="text-[10px] font-serif font-bold">DZ</span>
                  </div>

                  <span className="font-serif text-sm font-semibold tracking-tight text-charcoal leading-tight max-w-[100px] truncate">
                    {customBrand || "Your Brand"}
                  </span>
                  <span className="text-[8px] uppercase tracking-widest text-muted-foreground mt-0.5 max-w-[100px] truncate">
                    {customSubline || "Extra Virgin Olive Oil"}
                  </span>

                  <div className="w-8 h-px bg-gold my-1.5" />

                  <span className="text-[7px] text-emerald-900 font-medium uppercase tracking-wider">
                    {variety.split(" ")[0]} Blend
                  </span>
                  <span className="text-[7px] font-bold text-amber-800 mt-0.5">
                    {selectedSize} — Origin Tunisia
                  </span>
                </div>
              </div>
            </div>

            {/* Packaging Badge Sub-info */}
            <div className="mt-4 text-center">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-serif bg-gold/20 text-gold border border-gold/30">
                {selectedBottle.name} ({selectedSize})
              </span>
              <p className="text-xs text-olive-foreground/75 mt-1.5">
                {selectedBottle.idealFor}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
