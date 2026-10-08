import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { BrandLogo } from "@/components/common/BrandLogo";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" as const },
      { label: "Our Oil", to: "/our-oil" as const },
      { label: "Quality", to: "/quality" as const },
      { label: "Export", to: "/export" as const },
      { label: "Packaging", to: "/packaging" as const },
    ],
  },
  {
    title: "Business",
    links: [
      { label: "Request a Quote", to: "/request-quote" as const },
      { label: "Request a Sample", to: "/request-sample" as const },
      { label: "Private Label", to: "/private-label" as const },
      { label: "Become a Distributor", to: "/contact" as const },
      { label: "Insights", to: "/insights" as const },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-olive-deep text-olive-foreground">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <Link to="/" className="inline-block">
            <BrandLogo variant="footer" />
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-olive-foreground/70">
            Premium Tunisian Extra Virgin Olive Oil, prepared for importers, distributors and
            private-label partners worldwide.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.social.linkedin}
              aria-label="LinkedIn"
              className="flex size-9 items-center justify-center border border-olive-foreground/25 transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={site.social.instagram}
              aria-label="Instagram"
              className="flex size-9 items-center justify-center border border-olive-foreground/25 transition-colors hover:border-accent hover:text-accent"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={site.social.facebook}
              aria-label="Facebook"
              className="flex size-9 items-center justify-center border border-olive-foreground/25 transition-colors hover:border-accent hover:text-accent"
            >
              <Facebook className="size-4" />
            </a>
          </div>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="label-xs text-olive-foreground/55">{col.title}</h2>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to}
                    className="text-sm text-olive-foreground/80 transition-colors hover:text-accent"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="label-xs text-olive-foreground/55">Contact</h2>
          <ul className="mt-5 space-y-4 text-sm text-olive-foreground/80">
            <li className="flex items-start gap-3">
              <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{site.phone}</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-olive-foreground/12">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-olive-foreground/55 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {site.brandFull}. All rights reserved.</p>
          <p>Company details and certifications: [TO BE PROVIDED]</p>
        </div>
      </div>
    </footer>
  );
}
