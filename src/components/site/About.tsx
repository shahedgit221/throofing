import aboutImg from "@/assets/about-crew.jpg";
import { Parallax, Reveal, Section, SplitHeading } from "./primitives";

const points = [
  {
    title: "Diamond Steel Roofing",
    body: "Certified installers of durable, weather-resistant Diamond Steel Roofing systems.",
  },
  {
    title: "Seniors Discount",
    body: "A customer-focused discount for seniors in the Labrador City community.",
  },
  {
    title: "In-House Payment Plans",
    body: "Flexible payment support for customers who need it, arranged directly with us.",
  },
];

export function About() {
  return (
    <Section id="about" className="overflow-hidden">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-20">
        <Reveal variant="mask" duration={1.2}>
          <div className="relative">
            <Parallax distance={36} className="aspect-[4/5] w-full">
              <img
                src={aboutImg}
                alt="Roofer installing dark metal roofing panels"
                width={1200}
                height={1504}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </Parallax>
            <div className="border-primary/40 pointer-events-none absolute -right-3 -bottom-3 hidden h-28 w-28 border-r border-b sm:block" />
          </div>
        </Reveal>

        <div>
          <Reveal variant="up">
            <div className="flex items-center gap-4">
              <span className="hairline w-10 shrink-0" />
              <span className="eyebrow">About TH Roofing</span>
            </div>
          </Reveal>

          <h2 className="mt-6 text-[clamp(2rem,5.2vw,3.9rem)] leading-[0.98] font-extrabold">
            <SplitHeading text="Roofing Expertise You Can Rely On." />
          </h2>

          <Reveal variant="up" delay={0.12}>
            <p className="text-muted-foreground mt-7 text-base leading-relaxed sm:text-lg">
              TH Roofing provides professional residential, commercial, and industrial
              roofing across Labrador City. Every roof we install is chosen and detailed
              for one purpose: to hold up against demanding northern weather, season
              after season.
            </p>
          </Reveal>
          <Reveal variant="up" delay={0.2}>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed sm:text-lg">
              As certified Diamond Steel Roofing installers, we specialise in durable,
              weather-resistant steel systems — and we back that work with a
              customer-first approach to pricing and scheduling.
            </p>
          </Reveal>

          <div className="mt-10 space-y-px">
            {points.map((p, i) => (
              <Reveal key={p.title} variant="up" delay={0.1 + i * 0.1}>
                <div className="border-border/60 group border-t py-6">
                  <div className="flex items-baseline gap-5">
                    <span className="text-primary/60 font-display text-[0.7rem] font-bold tracking-[0.28em]">
                      0{i + 1}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-lg font-bold">{p.title}</h3>
                      <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
