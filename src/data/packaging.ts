import bottle from "@/assets/product-bottle.jpg";
import tin from "@/assets/product-tin.jpg";
import mill from "@/assets/mill.jpg";
import port from "@/assets/export-port.jpg";
import type { PackagingCategory, PackagingFormat, BottleSizeFormat } from "@/types";

export const packagingCategories: PackagingCategory[] = [
  "Retail",
  "Food Service",
  "Bulk",
  "Private Label",
];

export const BOTTLE_SIZES: BottleSizeFormat[] = [
  {
    id: "1l-bottle",
    name: "1 Litre Standard Glass Bottle",
    volume: "1000 ml (1.0 L)",
    image: "https://res.cloudinary.com/ht7xfett/image/upload/f_auto,q_auto/zitouna_1l_bottle",
    category: "Retail & Family Format",
    idealFor: "Supermarket chains, retail hypermarkets, and high-frequency family dining.",
    description:
      "Our maximum capacity retail glass bottle format. Engineered with heavy UV-shielded dark glass and anti-drip tamper-evident closure, providing optimal shelf protection and high volume value.",
    dimensions: "Height: 310 mm • Base: 85 mm",
    cartonQuantity: "12 bottles per export master carton",
    palletQuantity: "720 bottles (60 cartons) per Euro-pallet",
    capType: "Anti-drip Non-Refillable Pourer (NOP) or Aluminium Pilfer-Proof",
    containerMoq: "1 x 20ft Container (approx. 10,800 L)",
  },
  {
    id: "500ml-bottle",
    name: "500 ml Marasca / Dorica Glass Bottle",
    volume: "500 ml (0.5 L)",
    image: "https://res.cloudinary.com/ht7xfett/image/upload/f_auto,q_auto/zitouna_500ml_bottle",
    category: "Gourmet & Organic Retail",
    idealFor: "Organic specialty stores, delicatessens, and standard retail grocery shelves.",
    description:
      "The international gold-standard format for premium Extra Virgin Olive Oil. Sleek dark green glass shields fragile antioxidants while delivering a sophisticated aesthetic on retail shelves.",
    dimensions: "Height: 265 mm • Base: 68 mm",
    cartonQuantity: "12 bottles per export master carton",
    palletQuantity: "1,080 bottles (90 cartons) per Euro-pallet",
    capType: "Precision flow anti-drip pourer cap",
    containerMoq: "1 x 20ft Container (approx. 15,120 bottles)",
  },
  {
    id: "250ml-bottle",
    name: "250 ml Specialty Reserve Glass Bottle",
    volume: "250 ml (0.25 L)",
    image: "https://res.cloudinary.com/ht7xfett/image/upload/f_auto,q_auto/zitouna_250ml_bottle",
    category: "Specialty & Fine Dining",
    idealFor: "Restaurant table service, luxury hotel amenities, gift sets & boutique retail.",
    description:
      "A compact, elegant presentation bottle designed for table service in high-end restaurants, hotel dining rooms, and gourmet gift sets. Preserves peak organoleptic freshness.",
    dimensions: "Height: 215 mm • Base: 52 mm",
    cartonQuantity: "24 bottles per export master carton",
    palletQuantity: "1,920 bottles (80 cartons) per Euro-pallet",
    capType: "Drip-free precision silicone flow regulator cap",
    containerMoq: "5 Pallets / 1 x 20ft FCL Container",
  },
  {
    id: "250ml-spray",
    name: "250 ml Eco Culinary Spray Bottle",
    volume: "250 ml Misting Spray",
    image: "https://res.cloudinary.com/ht7xfett/image/upload/f_auto,q_auto/zitouna_250ml_spray",
    category: "Culinary Innovation & Healthy Kitchen",
    idealFor: "Air fryer cooking, salad dressing misting, pan coating, and calorie-controlled dining.",
    description:
      "An innovative non-aerosol eco-spray bottle delivering a uniform fine mist of extra virgin olive oil. Eliminates waste, reduces oil consumption by up to 60%, and offers modern kitchen convenience.",
    dimensions: "Height: 220 mm • Base: 54 mm",
    cartonQuantity: "24 spray bottles per export master carton",
    palletQuantity: "1,920 spray bottles per Euro-pallet",
    capType: "High-pressure fine misting trigger pump with protective cap",
    containerMoq: "5 Pallets / Custom private label branding",
  },
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
