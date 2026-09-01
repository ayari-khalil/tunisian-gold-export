import type { MarketRegion } from "@/types";

/** Target markets — not a claim of current export activity. */
export const targetMarkets: MarketRegion[] = [
  {
    region: "Europe",
    countries: ["France", "Germany", "Italy", "Belgium", "Netherlands", "Spain"],
  },
  {
    region: "Africa",
    countries: ["Morocco", "Algeria", "Senegal", "Côte d'Ivoire", "Cameroon", "South Africa"],
  },
];

/** Approximate positions on a 1000x500 equirectangular projection. */
export const marketPoints: { name: string; x: number; y: number; region: string }[] = [
  { name: "France", x: 492, y: 148, region: "Europe" },
  { name: "Germany", x: 522, y: 136, region: "Europe" },
  { name: "Italy", x: 528, y: 165, region: "Europe" },
  { name: "Belgium", x: 500, y: 137, region: "Europe" },
  { name: "Netherlands", x: 503, y: 129, region: "Europe" },
  { name: "Spain", x: 468, y: 172, region: "Europe" },
  { name: "Morocco", x: 452, y: 196, region: "Africa" },
  { name: "Algeria", x: 490, y: 198, region: "Africa" },
  { name: "Senegal", x: 432, y: 258, region: "Africa" },
  { name: "Côte d'Ivoire", x: 466, y: 282, region: "Africa" },
  { name: "Cameroon", x: 522, y: 288, region: "Africa" },
  { name: "South Africa", x: 552, y: 400, region: "Africa" },
];

export const origin = { name: "Tunisia", x: 512, y: 186 };

export const exportServices = [
  {
    title: "Pallet shipments",
    description: "Consolidated pallets for buyers testing a first order or restocking regularly.",
  },
  {
    title: "Container shipments",
    description: "FCL loading plans agreed with your forwarder before booking.",
  },
  {
    title: "Bulk export",
    description: "IBC, drum or flexitank supply for partners filling in the destination market.",
  },
  {
    title: "Packaged products",
    description: "Retail-ready bottles and tins labelled for the destination market.",
  },
  {
    title: "Distributor partnerships",
    description: "Long-term supply agreements with agreed volumes and lead times.",
  },
  {
    title: "Private label",
    description: "Custom brand programmes from artwork to export documentation.",
  },
  {
    title: "International documentation",
    description:
      "Commercial and shipping documents prepared per consignment. Specific certificates: [TO BE PROVIDED].",
  },
];

export const incoterms = ["EXW", "FCA", "FOB", "CFR", "CIF", "DAP", "DDP", "Other"];
