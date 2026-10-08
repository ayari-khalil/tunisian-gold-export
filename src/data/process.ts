import type { ProcessStep } from "@/types";

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Olive grove",
    description:
      "Groves are identified before the season so each lot can be linked back to where it grew.",
  },
  {
    step: "02",
    title: "Harvest",
    description: "Fruit is picked and moved quickly to limit the delay between grove and mill.",
  },
  {
    step: "03",
    title: "Selection",
    description: "Lots are sorted on arrival; anything outside our grade standard is separated.",
  },
  {
    step: "04",
    title: "Extraction",
    description: "Mechanical extraction under controlled conditions to protect the profile.",
  },
  {
    step: "05",
    title: "Quality control",
    description:
      "Each batch is checked before release. Official IOC-accredited laboratory parameters provided with COA per shipment.",
  },
  {
    step: "06",
    title: "Packaging",
    description: "Filling in the agreed format, with labelling prepared for the destination market.",
  },
  {
    step: "07",
    title: "Export",
    description: "Loading, documentation and dispatch under the Incoterm agreed with the buyer.",
  },
];

export const traceabilityDocuments = [
  { title: "Laboratory analysis", status: "IOC Certified COA per batch" },
  { title: "Technical sheet", status: "Full product specification" },
  { title: "Certificate of origin", status: "Official Tunisian Chamber Certificate" },
  { title: "Batch information", status: "Available per consignment" },
  { title: "Quality documentation", status: "Available on request" },
];

export const heritageStats = [
  { value: "3+", label: "Generations of expertise" },
  { value: "1,200+", label: "Hectares sourced" },
  { value: "5", label: "Northern operational states" },
  { value: "15+", label: "Target export destinations" },
];

export const oliveRegions = [
  { name: "Bizerte", note: "Northern coastal groves" },
  { name: "Béja", note: "Fertile northern hills" },
  { name: "Zaghouan", note: "Zaghouan mountain valleys" },
  { name: "Le Kef", note: "Highland olive groves" },
  { name: "Tunis", note: "Port & export logistics hub" },
];
