import React from "react";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "navbar" | "footer" | "standalone" | "badge";
  solid?: boolean; // Controls whether header is scrolled (solid) or transparent on dark
  className?: string;
  showTagline?: boolean;
}

export function BrandLogo({
  variant = "navbar",
  solid = true,
  className,
  showTagline = true,
}: BrandLogoProps) {
  const isFooter = variant === "footer";
  const isStandalone = variant === "standalone";
  const isBadge = variant === "badge";

  return (
    <div
      className={cn(
        "group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.015]",
        isFooter && "gap-4",
        isStandalone && "flex-col items-center text-center gap-4",
        isBadge && "flex-col items-center text-center gap-3 p-6 rounded-2xl bg-card border border-border shadow-soft",
        className
      )}
    >
      {/* SVG Emblem: Golden Drop & Mediterranean Olive Branch */}
      <div className="relative flex shrink-0 items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className={cn(
            "transition-all duration-500",
            variant === "navbar" ? "size-9 md:size-10" : "size-12 md:size-14",
            isStandalone && "size-20 md:size-24",
            isBadge && "size-16"
          )}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Liquid Gold Gradient */}
            <linearGradient id="goldDropGrad" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.84 0.16 85)" />
              <stop offset="45%" stopColor="oklch(0.72 0.15 75)" />
              <stop offset="100%" stopColor="oklch(0.55 0.14 62)" />
            </linearGradient>

            {/* Deep Olive Leaf Gradient */}
            <linearGradient id="oliveLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="oklch(0.48 0.08 125)" />
              <stop offset="100%" stopColor="oklch(0.28 0.05 120)" />
            </linearGradient>

            {/* Highlight Glow Filter */}
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Ornamental Ring */}
          <circle
            cx="50"
            cy="50"
            r="46"
            stroke="currentColor"
            strokeOpacity={solid ? "0.2" : "0.35"}
            strokeWidth="1.2"
            strokeDasharray="3 3"
            className={cn(
              "transition-all duration-700 group-hover:rotate-45 group-hover:stroke-opacity-50",
              solid ? "stroke-olive" : "stroke-amber-300"
            )}
          />

          {/* Sunburst Rays / Star Accents (4 points) */}
          <circle cx="50" cy="4" r="1.8" fill="currentColor" className={solid ? "fill-gold" : "fill-amber-300"} />
          <circle cx="50" cy="96" r="1.8" fill="currentColor" className={solid ? "fill-gold" : "fill-amber-300"} />
          <circle cx="4" cy="50" r="1.8" fill="currentColor" className={solid ? "fill-gold" : "fill-amber-300"} />
          <circle cx="96" cy="50" r="1.8" fill="currentColor" className={solid ? "fill-gold" : "fill-amber-300"} />

          {/* Left Olive Branch & Leaf */}
          <path
            d="M 28 65 C 24 50, 32 32, 44 26 C 40 38, 38 52, 28 65 Z"
            fill="url(#oliveLeafGrad)"
            className="transition-transform duration-500 origin-bottom-left group-hover:-rotate-3"
          />
          <path
            d="M 31 52 C 20 44, 18 32, 26 24 C 30 34, 31 44, 31 52 Z"
            fill="url(#oliveLeafGrad)"
            opacity="0.85"
            className="transition-transform duration-500 origin-bottom-left group-hover:-rotate-6"
          />

          {/* Right Olive Branch & Leaf */}
          <path
            d="M 72 65 C 76 50, 68 32, 56 26 C 60 38, 62 52, 72 65 Z"
            fill="url(#oliveLeafGrad)"
            className="transition-transform duration-500 origin-bottom-right group-hover:rotate-3"
          />
          <path
            d="M 69 52 C 80 44, 82 32, 74 24 C 70 34, 69 44, 69 52 Z"
            fill="url(#oliveLeafGrad)"
            opacity="0.85"
            className="transition-transform duration-500 origin-bottom-right group-hover:rotate-6"
          />

          {/* Central Golden Olive Oil Drop */}
          <path
            d="M 50 20 C 50 20, 33 45, 33 60 C 33 69.38 40.62 77 50 77 C 59.38 77 67 69.38 67 60 C 67 45, 50 20, 50 20 Z"
            fill="url(#goldDropGrad)"
            filter="url(#goldGlow)"
            className="transition-transform duration-500 group-hover:scale-105 origin-center"
          />

          {/* Golden Drop Inner Specular Highlight */}
          <path
            d="M 44 50 C 42 54, 42 62, 45 66 C 43 64, 43 56, 46 50 Z"
            fill="#FFFFFF"
            opacity="0.6"
          />

          {/* Small Golden Olive Fruit Accent */}
          <ellipse
            cx="50"
            cy="84"
            rx="4"
            ry="2.8"
            fill="url(#goldDropGrad)"
          />
        </svg>
      </div>

      {/* Typography Section */}
      <div className={cn("flex flex-col leading-none", isStandalone && "items-center")}>
        <div className="flex items-center gap-1.5">
          <span
            className={cn(
              "font-serif tracking-tight transition-colors duration-300",
              variant === "navbar" && "text-xl md:text-2xl",
              isFooter && "text-2xl md:text-3xl text-olive-foreground",
              isStandalone && "text-3xl md:text-4xl text-foreground",
              isBadge && "text-2xl text-foreground",
              !isFooter && !isStandalone && !isBadge && (solid ? "text-foreground" : "text-olive-foreground")
            )}
          >
            Dar Zitouna
          </span>
          <span
            className={cn(
              "inline-block rounded px-1 py-0.5 text-[0.625rem] font-semibold uppercase tracking-widest transition-colors",
              solid
                ? "bg-gold/15 text-gold-foreground border border-gold/30"
                : "bg-amber-400/20 text-amber-200 border border-amber-300/40"
            )}
          >
            Gold
          </span>
        </div>

        {showTagline && (
          <span
            className={cn(
              "label-xs mt-1 transition-colors duration-300 font-sans tracking-widest",
              isFooter && "text-olive-foreground/60 text-[0.65rem]",
              isStandalone && "text-muted-foreground text-xs mt-1.5",
              isBadge && "text-muted-foreground text-xs mt-1",
              !isFooter && !isStandalone && !isBadge && (solid ? "text-muted-foreground" : "text-olive-foreground/75")
            )}
          >
            Tunisian Extra Virgin Export
          </span>
        )}
      </div>
    </div>
  );
}
