import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal, RevealImage } from "@/components/common/Reveal";
import { TunisiaMap } from "@/components/sections/TunisiaMap";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { site } from "@/lib/site";
import harvest from "@/assets/harvest.jpg";
import mill from "@/assets/mill.jpg";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: `Our Story — Tunisian Olive Growing Heritage | ${site.brand}` },
      {
        name: "description",
        content:
          "How Tunisian groves, harvest timing and controlled milling shape the olive oil we prepare for international buyers.",
      },
      { property: "og:title", content: `Our Story | ${site.brand}` },
      {
        property: "og:description",
        content: "From Tunisian soil to international tables — the story behind our olive oil.",
      },
      { property: "og:url", content: "/our-story" },
    ],
    links: [{ rel: "canonical", href: "/our-story" }],
  }),
  component: OurStoryPage,
});

function OurStoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="From the Tunisian soil to international tables."
        intro="Olive growing in Tunisia is older than most of the countries that buy its oil. Our work is to carry that fruit to your market without losing what makes it Tunisian."
        image={harvest}
      />

      <Section>
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Origins"
              title="A landscape built for olives"
              intro="Long dry summers, mild coastal winters and generations of grove knowledge give Tunisian fruit a character buyers recognise once they taste it side by side."
            />
            <Reveal delay={0.1} className="mt-8 space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Rooted in Tunisia's rich agricultural heritage across Northern regions like Bizerte, Béja, Zaghouan, and Le Kef, Dar Zitouna was established to bridge ancient olive cultivation with modern B2B international export standards.
              </p>
              <p>
                Our operational philosophy is straightforward: identify partner groves early in the season, enforce strict temperature-controlled cold extraction within 12 hours of harvesting, and provide complete chemical and organoleptic batch documentation for every consignment.
              </p>
            </Reveal>
          </div>
          <RevealImage src={mill} alt="Olive oil extraction inside a Tunisian mill" ratio="aspect-[4/5]" />
        </div>
      </Section>

      <TunisiaMap />

      <CtaBanner
        title="Come and taste the origin."
        intro="A sample says more about a grove than any page of text."
      />
    </>
  );
}
