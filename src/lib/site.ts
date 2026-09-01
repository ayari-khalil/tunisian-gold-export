export const site = {
  brand: "Dar Zitouna",
  brandFull: "Dar Zitouna Export",
  tagline: "Premium Tunisian Extra Virgin Olive Oil — From Tunisia to the World.",
  email: "contact@darzitouna-export.com",
  phone: "[TO BE PROVIDED]",
  address: "Tunis, Tunisia",
  addressDetail: "[Full address TO BE PROVIDED]",
  hours: "Monday – Friday, 08:30 – 17:30 (GMT+1)",
  social: {
    linkedin: "#",
    instagram: "#",
    facebook: "#",
  },
} as const;

export const mainNav = [
  { label: "Our Oil", to: "/our-oil" },
  { label: "Our Story", to: "/our-story" },
  { label: "Quality", to: "/quality" },
  { label: "Export", to: "/export" },
  { label: "Packaging", to: "/packaging" },
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
