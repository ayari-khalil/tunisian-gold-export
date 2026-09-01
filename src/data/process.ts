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
      "Each batch is checked before release. Laboratory parameters: [TO BE PROVIDED per batch].",
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
  { title: "Laboratory analysis", status: "[TO BE PROVIDED]" },
  { title: "Technical sheet", status: "[TO BE PROVIDED]" },
  { title: "Certificate of origin", status: "[TO BE PROVIDED]" },
  { title: "Batch information", status: "Available per consignment" },
  { title: "Quality documentation", status: "Available on request" },
];

export const heritageStats = [
  { value: "[X]+", label: "Years of heritage" },
  { value: "[X]+", label: "Hectares sourced" },
  { value: "[X]+", label: "Partner producers" },
  { value: "[X]+", label: "Target export destinations" },
];

export const oliveRegions = [
  { name: "Béja", note: "Northern hills" },
  { name: "Nabeul", note: "Cap Bon peninsula" },
  { name: "Kairouan", note: "Central plains" },
  { name: "Sousse", note: "Sahel coast" },
  { name: "Sfax", note: "Historic olive belt" },
  { name: "Mahdia", note: "Coastal groves" },
  { name: "Gafsa", note: "Southern arid groves" },
  { name: "Médenine", note: "Southern terraces" },
];
