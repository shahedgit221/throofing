import { ArrowUpRight } from "lucide-react";
import residential from "@/assets/service-residential.jpg";
import commercial from "@/assets/service-commercial.jpg";
import industrial from "@/assets/service-industrial.jpg";
import diamond from "@/assets/service-diamond.jpg";
import { Reveal, Section, SectionHeading } from "./primitives";

const services = [
  {
    n: "01",
    title: "Residential Roofing",
    body: "Professional roofing solutions designed to protect homes and provide long-term durability.",
    img: residential,
  },
  {
    n: "02",
    title: "Commercial Roofing",
    body: "Reliable roofing solutions for commercial properties with a focus on performance and longevity.",
    img: commercial,
  },
  {
    n: "03",
    title: "Industrial Roofing",
    body: "Durable roofing solutions for demanding industrial environments.",
    img: industrial,
  },
  {
    n: "04",
    title: "Diamond Steel Roofing",
    body: "Specialised installation of durable, weather-resistant Diamond Steel Roofing systems.",
    img: diamond,
  },
];

export function Services() {
  return (
    <Section id="services" tone="surface">
      <SectionHeading
        eyebrow="What We Do"
        title="Four disciplines. One standard of work."
        intro="From single-family homes to industrial envelopes, every project is scoped, installed, and inspected by the same crew."
      />

      <div className="mt-16 grid gap-px md:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.n} variant="up" delay={(i % 2) * 0.12}>
            <article className="group bg-card/40 hover:bg-card relative h-full overflow-hidden transition-colors duration-700">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  width={1200}
                  height={900}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-60 transition-[transform,opacity] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07] group-hover:opacity-85"
                />
                <div className="from-background/95 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
                <span className="font-display text-foreground/25 absolute top-6 right-7 text-[clamp(3rem,7vw,5rem)] leading-none font-extrabold transition-colors duration-700 group-hover:text-primary/50">
                  {s.n}
                </span>
              </div>

              <div className="relative px-7 pt-7 pb-9 sm:px-9">
                <span className="bg-primary absolute top-0 left-7 block h-px w-12 origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-[3.2] sm:left-9" />
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-5">
                  <h3 className="text-[clamp(1.35rem,2.6vw,1.9rem)] leading-tight font-extrabold transition-transform duration-700 group-hover:translate-x-1.5">
                    {s.title}
                  </h3>
                  <span className="border-border/80 text-muted-foreground group-hover:border-primary group-hover:text-primary grid h-11 w-11 shrink-0 place-items-center border transition-all duration-500">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
                <p className="text-muted-foreground mt-4 max-w-md text-sm leading-relaxed sm:text-[0.95rem]">
                  {s.body}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
