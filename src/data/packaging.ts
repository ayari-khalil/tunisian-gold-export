import bottle from "@/assets/product-bottle.jpg";
import tin from "@/assets/product-tin.jpg";
import mill from "@/assets/mill.jpg";
import port from "@/assets/export-port.jpg";
import type { PackagingCategory, PackagingFormat } from "@/types";

export const packagingCategories: PackagingCategory[] = [
  "Retail",
  "Food Service",
  "Bulk",
  "Private Label",
];

export const packagingFormats: PackagingFormat[] = [
  {
    id: "glass",
    name: "Glass bottles",
    categories: ["Retail", "Private Label"],
    material: "Dark glass, screw or pourer cap",
    formats: "250 ml · 500 ml · 750 ml · 1 L",
    description:
      "Shelf-ready presentation for supermarkets and specialty retail, with label artwork adapted to the destination market.",
    image: bottle,
  },
  {
    id: "tin",
    name: "Metal tins",
    categories: ["Retail", "Food Service", "Private Label"],
    material: "Food-grade tinplate, light-proof",
    formats: "500 ml · 1 L · 3 L · 5 L",
    description:
      "Excellent light protection and shipping resilience — the format most requested by long-distance importers.",
    image: tin,
  },
  {
    id: "foodservice",
    name: "Food-service containers",
    categories: ["Food Service"],
    material: "Food-grade PET or tinplate",
    formats: "3 L · 5 L · 10 L",
    description:
      "Practical volumes for restaurant groups, hotels and catering suppliers with high daily consumption.",
    image: mill,
  },
  {
    id: "bulk",
    name: "Bulk formats",
    categories: ["Bulk", "Private Label"],
    material: "IBC, drums or flexitank",
    formats: "Per container / per pallet — specification on request",
    description:
      "For buyers filling and branding locally. Loading configuration and documentation are agreed before shipment.",
    image: port,
  },
];
