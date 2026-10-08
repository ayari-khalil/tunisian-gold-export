export type BuyerSegment =
  | "Importers"
  | "Distributors"
  | "Supermarkets"
  | "Restaurants"
  | "Hotels"
  | "Wholesalers"
  | "Specialty Retail"
  | "Private Label";

export type PackagingCategory = "Retail" | "Food Service" | "Bulk" | "Private Label";

export interface SpecRow {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  packaging: string[];
  volumes: string[];
  idealFor: string;
  tasteProfile: string[];
  moq: string;
  harvest: string;
  storage: string;
  specs: SpecRow[];
}

export interface PackagingFormat {
  id: string;
  name: string;
  categories: PackagingCategory[];
  material: string;
  formats: string;
  description: string;
  image: string;
}

export interface BottleSizeFormat {
  id: string;
  name: string;
  volume: string;
  image: string;
  category: string;
  idealFor: string;
  description: string;
  dimensions: string;
  cartonQuantity: string;
  palletQuantity: string;
  capType: string;
  containerMoq: string;
}

export interface MarketRegion {
  region: string;
  countries: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  readingTime: string;
  date: string;
  body: string[];
}
