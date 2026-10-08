import bottle from "@/assets/product-bottle.jpg";
import tin from "@/assets/product-tin.jpg";
import harvest from "@/assets/harvest.jpg";
import type { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "extra-virgin-olive-oil",
    name: "Extra Virgin Olive Oil (Chemlali Export Grade)",
    category: "Everyday & food service",
    tagline: "Our core export grade, built for consistency at volume.",
    description:
      "A balanced Tunisian extra virgin olive oil prepared for retail shelves and professional kitchens that need dependable quality across repeat orders.",
    longDescription:
      "Selected from certified Tunisian groves in Sfax and Central Tunisia, this is our core export reference grade for international importers and food-service buyers. Cold-extracted below 27 °C within 12 hours of harvest to preserve golden aroma and low acidity.",
    image: bottle,
    packaging: ["Marasca glass bottle", "Dorica dark glass", "Metal tin", "Flexitank bulk"],
    volumes: ["250 ml", "500 ml", "750 ml", "1 L", "3 L", "5 L", "Bulk Flexitank"],
    idealFor: "Importers, distributors, supermarket chains, food service buyers",
    tasteProfile: ["Balanced fruitiness", "Mild artichoke notes", "Smooth & gentle finish"],
    moq: "1 x 20ft FCL Container (approx. 10,500 L bottled / 21,500 L flexitank)",
    harvest: "November – February harvest cycle, certified lot per batch",
    storage: "Store between 14–18 °C, away from direct sunlight and humidity",
    specs: [
      { label: "Origin", value: "Sfax & Sahel Region, Tunisia" },
      { label: "Olive Variety", value: "Chemlali (100% Pure)" },
      { label: "Free Fatty Acidity", value: "< 0.4% (Max IOC limit 0.8%)" },
      { label: "Peroxide Value", value: "< 12 meq O2/kg" },
      { label: "Extraction", value: "Cold Extracted (< 27 °C)" },
      { label: "Certifications", value: "ISO 22000, HACCP, Halal Certified, BRCGS" },
      { label: "Laboratory Analysis", value: "Full IOC certified lab analysis with COA per shipment" },
      { label: "Export Port", value: "Port of Radès / Port of Sfax, Tunisia" },
    ],
  },
  {
    slug: "premium-selection",
    name: "Chétoui High-Polyphenol Organic Selection",
    category: "Specialty & gourmet retail",
    tagline: "A high-antioxidant early harvest selection for specialty gourmet retail.",
    description:
      "A restricted early-harvest selection presented in premium dark glass for delicatessens, organic retailers and luxury hospitality groups.",
    longDescription:
      "Crafted exclusively from Northern Tunisian Chétoui olives harvested early in October. Exceptionally rich in natural polyphenols (antioxidants) providing an intense green fruitiness, peppery finish, and extended shelf-life stability.",
    image: tin,
    packaging: ["Dorica dark green glass", "UV-Shield Metal Tin", "Wooden Gift Box"],
    volumes: ["250 ml", "500 ml", "750 ml"],
    idealFor: "Specialty food stores, luxury hotels, organic retailers, premium gifting",
    tasteProfile: ["Fresh cut grass aromatics", "Structured green olive bitterness", "Intense peppery throat kick"],
    moq: "5 Pallets (approx. 2,400 bottles)",
    harvest: "October Early Harvest (First Cold Press)",
    storage: "Store between 12–16 °C in dark ambient conditions",
    specs: [
      { label: "Origin", value: "Béja & Teboursouk High Atlas, Northern Tunisia" },
      { label: "Olive Variety", value: "100% Chétoui Early Harvest" },
      { label: "Polyphenol Count", value: "> 550 mg/kg (High Antioxidant)" },
      { label: "Free Fatty Acidity", value: "< 0.2% Ultra-Low" },
      { label: "Certifications", value: "USDA Organic, EU Organic Certification, ISO 9001" },
      { label: "Traceability", value: "Single-estate QR code traceability on label" },
      { label: "Laboratory Analysis", value: "Eurofins certified chemical & organoleptic profile" },
      { label: "Export Packaging", value: "Heavyweight 5-ply export master carton with foam dividers" },
    ],
  },
  {
    slug: "private-label",
    name: "Custom Private Label Programme",
    category: "Custom brand programmes",
    tagline: "Your brand, our origin — produced, bottled and shipped to your specification.",
    description:
      "Turnkey packaging, custom labeling and regulatory compliance for distributors and supermarket chains developing their own olive oil brand.",
    longDescription:
      "We manage the entire production pipeline for your brand: bottle selection, custom multi-language label printing, cap sealing, carton design, and export customs documentation. Sample batches dispatched in 5 working days.",
    image: harvest,
    packaging: ["Client-specified bottle shape", "Custom tin embossing", "Bulk for local bottling"],
    volumes: ["Tailored per commercial contract"],
    idealFor: "Retail chains, regional distributors, food brand owners",
    tasteProfile: ["Custom sensory profile formulated to match your target consumer preference"],
    moq: "1 x 20ft Container (Custom branded packaging)",
    harvest: "Agreed according to your annual supply schedule",
    storage: "Store between 14–18 °C",
    specs: [
      { label: "Origin", value: "Tunisia (Protected Geographical Indication available)" },
      { label: "Available Varieties", value: "Chemlali, Chétoui, Oueslati or custom blend" },
      { label: "Label Printing", value: "Waterproof foil-stamped, barcode & FDA compliant" },
      { label: "Lead Time", value: "3-4 weeks from label proof approval to container loading" },
      { label: "Compliance Support", value: "FDA registration, EU food standard compliance, Barcode verification" },
      { label: "Sample Dispatch", value: "Express DHL sample airfreight available upon request" },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
