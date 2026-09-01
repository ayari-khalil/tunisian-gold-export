import bottle from "@/assets/product-bottle.jpg";
import tin from "@/assets/product-tin.jpg";
import harvest from "@/assets/harvest.jpg";
import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "extra-virgin-olive-oil",
    name: "Extra Virgin Olive Oil",
    category: "Everyday & food service",
    tagline: "Our core export grade, built for consistency at volume.",
    description:
      "A balanced Tunisian extra virgin olive oil prepared for retail shelves and professional kitchens that need dependable quality across repeat orders.",
    longDescription:
      "Selected from Tunisian groves and prepared for international shipment, this is our reference grade for importers and food-service buyers. Every consignment is documented so quality can be verified batch by batch.",
    image: bottle,
    packaging: ["Glass bottle", "Metal tin", "PET (food service)", "Bulk"],
    volumes: ["250 ml", "500 ml", "750 ml", "1 L", "3 L", "5 L", "Bulk"],
    idealFor: "Importers, distributors, supermarkets, restaurants",
    tasteProfile: ["Balanced fruitiness", "Gentle bitterness", "Clean finish"],
    moq: "[MOQ TO BE PROVIDED]",
    harvest: "According to batch — harvest data supplied with each consignment",
    storage: "Store between 14–18 °C, away from light and heat sources",
    specs: [
      { label: "Origin", value: "Tunisia" },
      { label: "Product", value: "Extra Virgin Olive Oil" },
      { label: "Packaging", value: "Bottle / Tin / Bulk" },
      { label: "Available formats", value: "250 ml – 5 L, bulk on request" },
      { label: "Harvest", value: "According to batch" },
      { label: "Traceability", value: "Available on request" },
      { label: "Certifications", value: "[TO BE PROVIDED]" },
      { label: "Laboratory analysis", value: "[TO BE PROVIDED]" },
    ],
  },
  {
    slug: "premium-selection",
    name: "Premium Selection",
    category: "Specialty & gourmet retail",
    tagline: "A higher-tier selection for specialty retailers and gifting.",
    description:
      "A restricted selection presented in premium packaging for delicatessens, gourmet retailers and hospitality groups building a signature offer.",
    longDescription:
      "Our Premium Selection is intended for buyers whose customers read the label before the price. Presentation, batch documentation and packaging finish are all handled to specialty-retail standards.",
    image: tin,
    packaging: ["Glass bottle", "Premium metal tin", "Gift carton"],
    volumes: ["250 ml", "500 ml", "750 ml"],
    idealFor: "Specialty food retailers, hotels, gifting programmes",
    tasteProfile: ["Green fruit aromatics", "Structured bitterness", "Peppery finish"],
    moq: "[MOQ TO BE PROVIDED]",
    harvest: "According to batch — early harvest lots on request",
    storage: "Store between 14–18 °C, away from light and heat sources",
    specs: [
      { label: "Origin", value: "Tunisia" },
      { label: "Product", value: "Extra Virgin Olive Oil — Premium Selection" },
      { label: "Packaging", value: "Bottle / Premium tin / Gift carton" },
      { label: "Available formats", value: "250 ml – 750 ml" },
      { label: "Harvest", value: "According to batch" },
      { label: "Traceability", value: "Available on request" },
      { label: "Certifications", value: "[TO BE PROVIDED]" },
      { label: "Laboratory analysis", value: "[TO BE PROVIDED]" },
    ],
  },
  {
    slug: "private-label",
    name: "Private Label",
    category: "Custom brand programmes",
    tagline: "Your brand, our origin — produced and shipped to your specification.",
    description:
      "Custom packaging, labelling and formats for distributors, retail chains and brand owners developing their own olive oil range.",
    longDescription:
      "We work with international partners to develop private-label olive oil programmes: format selection, label artwork, sample approval, production and export documentation, managed as a single project.",
    image: harvest,
    packaging: ["Client-specified bottle", "Client-specified tin", "Bulk for local filling"],
    volumes: ["Defined per programme"],
    idealFor: "Retail chains, distributors, brand owners",
    tasteProfile: ["Profile agreed with the buyer during sampling"],
    moq: "[MOQ TO BE PROVIDED]",
    harvest: "According to batch and programme schedule",
    storage: "Store between 14–18 °C, away from light and heat sources",
    specs: [
      { label: "Origin", value: "Tunisia" },
      { label: "Product", value: "Private-label Extra Virgin Olive Oil" },
      { label: "Packaging", value: "Defined with the partner" },
      { label: "Available formats", value: "Various" },
      { label: "Harvest", value: "According to batch" },
      { label: "Traceability", value: "Available on request" },
      { label: "Artwork & compliance", value: "[TO BE PROVIDED per market]" },
      { label: "Laboratory analysis", value: "[TO BE PROVIDED]" },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
