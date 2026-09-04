import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import {
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

/* ---------------------------------- Reveal --------------------------------- */

type RevealVariant = "up" | "mask" | "clip" | "scale" | "left" | "right";

const variants: Record<RevealVariant, { hidden: object; show: object }> = {
  up: {
    hidden: { opacity: 0, y: 34 },
    show: { opacity: 1, y: 0 },
  },
  mask: {
    hidden: { opacity: 0, clipPath: "inset(0 0 100% 0)" },
    show: { opacity: 1, clipPath: "inset(0 0 0% 0)" },
  },
  clip: {
    hidden: { opacity: 1, clipPath: "inset(0 100% 0 0)" },
    show: { opacity: 1, clipPath: "inset(0 0% 0 0)" },
  },
  scale: {
    hidden: { opacity: 0, scale: 1.08 },
    show: { opacity: 1, scale: 1 },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0 },
  },
};

export function Reveal({
  children,
  variant = "up",
  delay = 0,
  duration = 0.9,
  className,
  as: _as,
}: {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  as?: never;
}) {
  const reduce = useReducedMotion();
  const v = variants[variant];

  return (
    <motion.div
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
      variants={v}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------- Split words ------------------------------- */

export function SplitHeading({
  text,
  className,
  delay = 0,
  once = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once, margin: "-10% 0px" }}
            transition={{
              duration: 1,
              delay: delay + i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* --------------------------------- Parallax -------------------------------- */

export function Parallax({
  children,
  distance = 60,
  className,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [distance, -distance],
  );

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ y }} className="h-[118%] w-full will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

/* ------------------------------ Magnetic button ---------------------------- */

type MagneticProps = ComponentPropsWithoutRef<"a"> & {
  tone?: "solid" | "ghost";
};

export function MagneticLink({
  children,
  className,
  tone = "solid",
  ...props
}: MagneticProps) {
  const reduce = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <motion.a
      {...(props as ComponentPropsWithoutRef<typeof motion.a>)}
      onMouseMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        setOffset({
          x: (e.clientX - (r.left + r.width / 2)) * 0.18,
          y: (e.clientY - (r.top + r.height / 2)) * 0.3,
        });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      animate={offset}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.4 }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-3 overflow-hidden px-8 py-4 text-[0.78rem] font-semibold tracking-[0.18em] uppercase transition-colors duration-500",
        tone === "solid"
          ? "bg-primary text-primary-foreground hover:bg-foreground"
          : "border border-border text-foreground hover:border-primary hover:text-primary",
        className,
      )}
    >
      {children}
    </motion.a>
  );
}

/* ------------------------------ Section shell ------------------------------ */

export function Section({
  id,
  children,
  className,
  tone = "base",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "base" | "surface";
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 px-5 py-24 sm:px-8 md:py-32 lg:px-12",
        tone === "surface" ? "bg-surface" : "bg-background",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1320px]">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <Reveal variant="up">
        <div
          className={cn(
            "flex items-center gap-4",
            align === "center" && "justify-center",
          )}
        >
          <span className="hairline w-10 shrink-0" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
      </Reveal>
      <h2 className="mt-6 text-[clamp(2rem,5.2vw,3.9rem)] leading-[0.98] font-extrabold">
        <SplitHeading text={title} />
      </h2>
      {intro ? (
        <Reveal variant="up" delay={0.15}>
          <p className="text-muted-foreground mt-6 text-base leading-relaxed sm:text-lg">
            {intro}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
