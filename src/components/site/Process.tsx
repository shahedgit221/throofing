import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Reveal, Section, SectionHeading } from "./primitives";

const steps = [
  { n: "01", title: "Consultation", body: "We talk through the property, the problem, and the timeline." },
  { n: "02", title: "Roof Assessment", body: "A hands-on look at the existing roof, structure, and weak points." },
  { n: "03", title: "Recommendation", body: "A clear plan with the right system and materials for the building." },
  { n: "04", title: "Professional Installation", body: "Installed by our crew with careful detailing throughout." },
  { n: "05", title: "Final Inspection", body: "A last walkthrough to confirm the work is finished properly." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0, 1]);

  return (
    <Section id="process">
      <SectionHeading eyebrow="Our Process" title="How a TH Roofing job runs." />

      <div ref={ref} className="relative mt-16">
        <div className="bg-border/70 absolute top-0 left-[13px] h-full w-px lg:top-[13px] lg:left-0 lg:h-px lg:w-full" />
        <motion.div
          style={{ scaleY: scaleX, scaleX }}
          className="bg-primary absolute top-0 left-[13px] h-full w-px origin-top lg:top-[13px] lg:left-0 lg:h-px lg:w-full lg:origin-left"
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} variant="up" delay={i * 0.1}>
              <div className="relative pl-12 lg:pt-12 lg:pl-0 lg:pr-6">
                <span className="bg-background border-primary absolute top-1.5 left-0 block h-[27px] w-[27px] rounded-full border lg:top-0 lg:left-0" />
                <span className="bg-primary absolute top-[15px] left-[9px] block h-2.5 w-2.5 rounded-full lg:top-[8.5px] lg:left-[8.5px]" />
                <span className="text-primary/60 font-display text-[0.7rem] font-bold tracking-[0.3em]">
                  {s.n}
                </span>
                <h3 className="mt-3 text-xl leading-tight font-extrabold">{s.title}</h3>
                <p className="text-muted-foreground mt-2.5 text-sm leading-relaxed">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
