import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-grove.jpg";

const fade = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-olive-deep">
      <motion.img
        src={hero}
        alt="Ancient Tunisian olive grove at golden hour"
        width={1920}
        height={1088}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="hero-scrim absolute inset-0 -z-10" aria-hidden />

      <div className="container-x pb-20 md:pb-28">
        <motion.p
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="label-xs text-olive-foreground/75"
        >
          Tunisian Origin • Premium Quality • International Export
        </motion.p>

        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="display-1 mt-6 max-w-4xl text-olive-foreground"
        >
          The Taste of Tunisia,
          <br />
          Delivered to the World.
        </motion.h1>

        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-7 max-w-xl text-base leading-relaxed text-olive-foreground/80 md:text-lg"
        >
          Premium Tunisian Extra Virgin Olive Oil, carefully selected and prepared for international
          markets.
        </motion.p>

        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-wrap gap-3"
        >
          <Button asChild variant="gold" size="xl">
            <Link to="/request-sample">
              Request a Sample <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="onDark" size="xl">
            <Link to="/our-oil">Explore Our Oil</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
