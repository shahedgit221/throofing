import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import ctaBg from "@/assets/cta-bg.jpg";
import { MagneticLink, Reveal, SplitHeading } from "./primitives";

export function CtaBand() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-12%", "12%"]);

  return (
    <section ref={ref} className="grain relative overflow-hidden">
      <div aria-hidden className="absolute inset-0">
        <motion.img
          src={ctaBg}
          alt=""
          loading="lazy"
          className="h-[124%] w-full object-cover"
          style={{ y }}
        />
      </div>
      <div aria-hidden className="bg-background/78 absolute inset-0" />

      <div className="relative mx-auto w-full max-w-[1320px] px-5 py-28 text-center sm:px-8 md:py-40 lg:px-12">
        <Reveal variant="up">
          <span className="eyebrow">Free, no-obligation estimate</span>
        </Reveal>
        <h2 className="mx-auto mt-7 max-w-4xl text-[clamp(2.1rem,6vw,4.6rem)] leading-[0.96] font-extrabold">
          <SplitHeading text="Let's get your roof done right." />
        </h2>
        <Reveal variant="up" delay={0.2}>
          <p className="text-muted-foreground mx-auto mt-7 max-w-xl text-base leading-relaxed sm:text-lg">
            Tell us about your property and we'll come out, assess the roof honestly, and give
            you a clear written quote.
          </p>
        </Reveal>
        <Reveal variant="up" delay={0.3}>
          <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <MagneticLink href="#contact">Request Your Estimate</MagneticLink>
            <MagneticLink href="tel:+17099440000" tone="ghost">
              Call (709) 944-0000
            </MagneticLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
