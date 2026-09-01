import type { Article } from "@/types";

export const insightCategories = [
  "Tunisian Olive Oil",
  "Export",
  "Mediterranean Agriculture",
  "Market Insights",
  "Product Knowledge",
];

/** DEMO CONTENT — placeholder editorial to be replaced with real articles. */
export const articles: Article[] = [
  {
    slug: "why-tunisian-olive-oil-deserves-global-attention",
    title: "Why Tunisian Olive Oil Deserves Global Attention",
    category: "Tunisian Olive Oil",
    excerpt:
      "Tunisia has cultivated olives for millennia, yet much of its oil reaches consumers under other flags. That is beginning to change.",
    readingTime: "5 min read",
    date: "Demo content",
    body: [
      "Tunisia's olive-growing tradition stretches back to antiquity, when groves planted across the Sahel supplied the Mediterranean basin. The climate — long dry summers, mild winters, and coastal humidity — remains well suited to olive cultivation.",
      "For decades a large share of Tunisian production has travelled in bulk and been bottled elsewhere. Buyers who source directly gain visibility over the origin of what they sell, and a story their customers can actually follow.",
      "This article is demo content. Replace it with your own editorial before publishing.",
    ],
  },
  {
    slug: "understanding-extra-virgin-olive-oil",
    title: "Understanding Extra Virgin Olive Oil",
    category: "Product Knowledge",
    excerpt:
      "What separates extra virgin from other grades, and which questions professional buyers should be asking their supplier.",
    readingTime: "6 min read",
    date: "Demo content",
    body: [
      "Extra virgin is defined by how the oil is produced and by analytical and sensory criteria. Mechanical extraction, controlled temperature and short delays between harvest and milling all matter.",
      "Professional buyers should expect documentation per batch rather than general assurances. Ask which parameters are measured, when, and by whom.",
      "This article is demo content. Replace it with your own editorial before publishing.",
    ],
  },
  {
    slug: "from-tunisian-olive-groves-to-international-markets",
    title: "From Tunisian Olive Groves to International Markets",
    category: "Export",
    excerpt:
      "A practical look at how a consignment moves from grove to destination port, and where importers should plan ahead.",
    readingTime: "4 min read",
    date: "Demo content",
    body: [
      "Between the grove and the destination shelf sit selection, extraction, packaging, documentation and shipment. Each stage adds either confidence or risk.",
      "Aligning Incoterms, labelling requirements and lead times early avoids the two most common delays: artwork approval and destination-market compliance.",
      "This article is demo content. Replace it with your own editorial before publishing.",
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
