import { motion, useReducedMotion } from "motion/react";

const items = [
  "Residential Roofing",
  "Commercial Roofing",
  "Industrial Roofing",
  "Diamond Steel Roofing Installers",
];

export function TrustStrip() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-surface border-border/60 relative border-y">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <motion.div
            key={item}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group border-border/60 relative px-6 py-9 sm:px-8 lg:border-l lg:first:border-l-0"
          >
            <span className="text-primary/70 font-display block text-[0.7rem] font-bold tracking-[0.3em]">
              0{i + 1}
            </span>
            <span className="font-display mt-3 block text-[0.95rem] leading-tight font-bold tracking-tight sm:text-base">
              {item}
            </span>
            <motion.span
              aria-hidden
              className="bg-primary mt-5 block h-px origin-left"
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.25 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
