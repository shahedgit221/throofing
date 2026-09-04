import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./primitives";

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return <span ref={ref}>{value}</span>;
}

const items = [
  {
    value: <Counter to={3} />,
    label: "Roofing Sectors",
    sub: "Residential • Commercial • Industrial",
  },
  {
    value: "∞",
    label: "Built for the Weather",
    sub: "Durable and weather-resistant solutions",
  },
  {
    value: "LC",
    label: "Labrador City",
    sub: "Local roofing expertise",
  },
];

export function Stats() {
  return (
    <section className="bg-surface grain border-border/60 relative border-y px-5 py-24 sm:px-8 md:py-32 lg:px-12">
      <div className="mx-auto grid w-full max-w-[1320px] gap-14 md:grid-cols-3 md:gap-8">
        {items.map((it, i) => (
          <Reveal key={it.label} variant="up" delay={i * 0.14}>
            <div className="md:border-border/60 md:px-8 md:[&:not(:first-child)]:border-l">
              <div className="text-primary font-display text-[clamp(3.4rem,9vw,6rem)] leading-[0.85] font-extrabold">
                {it.value}
              </div>
              <h3 className="mt-6 text-xl font-extrabold">{it.label}</h3>
              <p className="text-muted-foreground mt-2 text-sm tracking-wide">
                {it.sub}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
