import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/common/PageHeader";
import { Section, SectionHeading } from "@/components/common/Section";
import { Reveal } from "@/components/common/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { site } from "@/lib/site";
import port from "@/assets/export-port.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — Start a Business Conversation | ${site.brand}` },
      {
        name: "description",
        content:
          "Contact our export team in Tunisia to discuss olive oil supply, packaging, private label and shipping terms.",
      },
      { property: "og:title", content: `Contact | ${site.brand}` },
      { property: "og:description", content: "Start a business conversation with our export team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start a Business Conversation."
        intro="Tell us about your market, your volumes and your timeline. We reply during Tunisian business hours."
        image={port}
      />

      <Section>
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Company" title="Get in touch" />
            <Reveal delay={0.1} className="mt-8 space-y-6 text-sm">
              <p className="flex items-start gap-4">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-olive">
                  {site.email}
                </a>
              </p>
              <p className="flex items-start gap-4">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <span className="text-muted-foreground">{site.phone}</span>
              </p>
              <p className="flex items-start gap-4">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <span>
                  {site.address}
                  <br />
                  <span className="text-muted-foreground">{site.addressDetail}</span>
                </span>
              </p>
              <p className="flex items-start gap-4">
                <Clock className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <span>{site.hours}</span>
              </p>
            </Reveal>

            <Reveal delay={0.2} className="mt-10">
              <div
                role="img"
                aria-label="Map placeholder — location map to be added"
                className="flex aspect-[4/3] items-center justify-center border border-dashed border-border bg-muted"
              >
                <span className="label-xs text-muted-foreground">Map — [TO BE PROVIDED]</span>
              </div>
            </Reveal>
          </div>

          <div>
            <SectionHeading eyebrow="Message" title="Send us a message" />
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
