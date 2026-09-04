import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-roof.jpg";
import { MagneticLink } from "./primitives";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 90]);

  const line = "Professional Roofing. Built for the Long Run.".split(" ");

  return (
    <section
      id="home"
      ref={ref}
      className="grain relative flex min-h-[100svh] flex-col justify-end overflow-hidden"
    >
      <motion.div
        aria-hidden
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.18, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease }}
      >
        <motion.img
          src={heroImg}
          alt="Metal roof on a modern northern home at dusk"
          width={1920}
          height={1088}
          fetchPriority="high"
          className="h-full w-full object-cover"
          style={{ y, scale }}
        />
      </motion.div>

      <motion.div
        aria-hidden
        className="veil absolute inset-0"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.6, delay: 0.35, ease }}
      />
      <div
        aria-hidden
        className="from-background/80 absolute inset-0 bg-gradient-to-r via-transparent to-transparent"
      />

      <motion.div
        style={{ y: textY }}
        className="relative mx-auto w-full max-w-[1320px] px-5 pt-32 pb-16 sm:px-8 md:pb-24 lg:px-12"
      >
        <motion.div
          className="flex items-center gap-3"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9, ease }}
        >
          <MapPin className="text-primary h-3.5 w-3.5" />
          <span className="eyebrow">Labrador City · Newfoundland &amp; Labrador</span>
        </motion.div>

        <h1 className="mt-7 max-w-5xl text-[clamp(2.6rem,8.4vw,6.4rem)] leading-[0.92] font-extrabold">
          {line.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <motion.span
                className="inline-block"
                initial={reduce ? false : { y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1.1, delay: 1.05 + i * 0.07, ease }}
              >
                {word}
                {i < line.length - 1 ? "\u00A0" : ""}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="text-muted-foreground mt-7 max-w-xl text-base leading-relaxed sm:text-lg"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7, ease }}
        >
          Residential, commercial, and industrial roofing solutions in Labrador City —
          built for durability and designed to withstand demanding weather.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.95, ease }}
        >
          <MagneticLink href="#contact">Get a Free Estimate</MagneticLink>
          <MagneticLink href="#services" tone="ghost">
            Explore Our Services
          </MagneticLink>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to next section"
        className="text-muted-foreground hover:text-primary relative mx-auto mb-8 hidden items-center gap-3 text-[0.62rem] tracking-[0.3em] uppercase transition-colors md:flex"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.3 }}
      >
        Scroll
        <motion.span
          animate={reduce ? {} : { y: [0, 7, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
