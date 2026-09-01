import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

/**
 * Animated counter. Falls back to rendering the raw string when the value is a
 * placeholder (e.g. "[X]+") so no invented statistic is ever displayed.
 */
export function Counter({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const numeric = Number(value.replace(/[^0-9]/g, ""));
  const isNumeric = /\d/.test(value);
  const [display, setDisplay] = useState(isNumeric ? "0" : value);

  useEffect(() => {
    if (!inView || !isNumeric) return;
    const duration = 1200;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(value.replace(/\d+/, String(Math.round(numeric * eased))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, isNumeric, numeric, value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
