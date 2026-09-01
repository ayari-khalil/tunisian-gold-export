import { motion } from "motion/react";
import { Eyebrow } from "./Section";

export function PageHeader({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image?: string;
}) {
  return (
    <header className="relative isolate overflow-hidden bg-olive-deep pt-36 pb-20 md:pt-44 md:pb-28">
      {image ? (
        <>
          <img
            src={image}
            alt=""
            aria-hidden
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
          />
          <div className="hero-scrim absolute inset-0 -z-10" aria-hidden />
        </>
      ) : null}
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <Eyebrow className="text-olive-foreground/70">{eyebrow}</Eyebrow>
          <h1 className="display-1 mt-6 text-olive-foreground">{title}</h1>
          {intro ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-olive-foreground/75 md:text-lg">
              {intro}
            </p>
          ) : null}
        </motion.div>
      </div>
    </header>
  );
}
