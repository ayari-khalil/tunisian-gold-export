import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, Check, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { mainNav, site } from "@/lib/site";
import { languages, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage, isTranslated } = useI18n();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid
          ? "border-b border-border bg-background/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container-x flex h-18 items-center justify-between gap-6 py-4">
        <Link to="/" className="group flex flex-col leading-none">
          <span
            className={cn(
              "font-serif text-2xl transition-colors",
              solid ? "text-foreground" : "text-olive-foreground",
            )}
          >
            {site.brand}
          </span>
          <span
            className={cn(
              "label-xs mt-1 transition-colors",
              solid ? "text-muted-foreground" : "text-olive-foreground/70",
            )}
          >
            Tunisian Olive Oil Export
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {mainNav.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={cn(
                  "label-xs relative py-2 transition-colors",
                  solid
                    ? "text-muted-foreground hover:text-olive"
                    : "text-olive-foreground/80 hover:text-olive-foreground",
                )}
                activeProps={{
                  className: solid ? "text-olive" : "text-olive-foreground",
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                aria-label="Select language"
                className={cn(
                  "label-xs flex items-center gap-2 px-2 py-2 transition-colors",
                  solid
                    ? "text-muted-foreground hover:text-olive"
                    : "text-olive-foreground/80 hover:text-olive-foreground",
                )}
              >
                <Globe className="size-4" />
                <span className="hidden sm:inline">{language.toUpperCase()}</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onSelect={() => setLanguage(lang.code)}
                  className="flex items-center justify-between gap-3 text-sm"
                >
                  <span className="flex items-center gap-2">
                    <span aria-hidden>{lang.flag}</span>
                    {lang.label}
                  </span>
                  {language === lang.code ? (
                    <Check className="size-3.5" />
                  ) : !isTranslated(lang.code) ? (
                    <span className="label-xs text-muted-foreground">soon</span>
                  ) : null}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            asChild
            variant={solid ? "quiet" : "onDark"}
            size="default"
            className="hidden md:inline-flex"
          >
            <Link to="/request-sample">Request a Sample</Link>
          </Button>
          <Button asChild variant="olive" size="default" className="hidden sm:inline-flex">
            <Link to="/request-quote">Request a Quote</Link>
          </Button>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={cn(
              "flex size-10 items-center justify-center lg:hidden",
              solid ? "text-foreground" : "text-olive-foreground",
            )}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <ul className="container-x flex flex-col py-4">
              {mainNav.map((item, i) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.35 }}
                  className="border-b border-border/60 last:border-0"
                >
                  <Link to={item.to} className="block py-4 font-serif text-2xl text-foreground">
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="container-x flex flex-col gap-3 pb-8">
              <Button asChild variant="olive" size="xl">
                <Link to="/request-quote">Request a Quote</Link>
              </Button>
              <Button asChild variant="quiet" size="xl">
                <Link to="/request-sample">Request a Sample</Link>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
