"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  durationMs?: number;
  className?: string;
};

const formatter = new Intl.NumberFormat("es-ES");

/**
 * Counts from 0 to `value` the first time it scrolls into view.
 * Renders the final value on the server and when reduced motion is on,
 * so the number is always readable without JavaScript.
 */
export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  durationMs = 1600,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Only reset to 0 if the number is still off-screen, so nothing flickers.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight) return;
    setDisplay(0);

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / durationMs, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * value));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, durationMs]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      <span aria-hidden>
        {prefix}
        {formatter.format(display)}
        {suffix}
      </span>
      <span className="sr-only">
        {prefix}
        {formatter.format(value)}
        {suffix}
      </span>
    </span>
  );
}
