export const site = {
  brand: "Dar Zitouna",
  brandFull: "Dar Zitouna Gold Export SARL",
  tagline: "Premium Tunisian Extra Virgin Olive Oil — Crafted in Tunisia, Delivered Globally.",
  email: "export@darzitouna-gold.com",
  phone: "+216 51 300 906",
  address: "Tunis & Bizerte Export Logistics Hub, Tunisia",
  addressDetail: "Avenue Habib Bourguiba, Tunis 1001 / Zone Portuaire FCL Export, Radès & Bizerte, Tunisia",
  hours: "Monday – Friday, 08:00 – 18:00 (GMT+1)",
  social: {
    linkedin: "https://linkedin.com/company/darzitouna-export",
    instagram: "https://instagram.com/darzitouna.oil",
    facebook: "https://facebook.com/darzitouna.export",
  },
} as const;

export const mainNav = [
  { label: "Our Oil", to: "/our-oil" },
  { label: "Bottle Sizes", to: "/packaging" },
  { label: "Our Story", to: "/our-story" },
  { label: "Quality", to: "/quality" },
  { label: "Export", to: "/export" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];
