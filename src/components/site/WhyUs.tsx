import { Reveal, Section, SectionHeading } from "./primitives";

const reasons = [
  { title: "Durable Solutions", body: "Built with long-term performance in mind." },
  {
    title: "Weather-Resistant Roofing",
    body: "Solutions designed to handle demanding weather conditions.",
  },
  {
    title: "Residential, Commercial & Industrial",
    body: "Experience across different roofing needs.",
  },
  {
    title: "Diamond Steel Roofing Installers",
    body: "Specialised installation expertise.",
  },
  { title: "Seniors Discount", body: "A customer-focused discount for seniors." },
  {
    title: "In-House Payment Plans",
    body: "Flexible payment support for customers in need.",
  },
];

export function WhyUs() {
  return (
    <Section id="why">
      <SectionHeading
        eyebrow="Why TH Roofing"
        title="The reasons people call us back."
      />

      <div className="border-border/60 mt-16 grid border-t md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r, i) => (
          <Reveal key={r.title} variant="up" delay={(i % 3) * 0.1}>
            <div className="group border-border/60 relative h-full border-b px-1 py-10 md:px-8 md:[&:nth-child(odd)]:border-l lg:border-l lg:px-9">
              <span className="text-primary/50 font-display text-[0.68rem] font-bold tracking-[0.3em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-[1.35rem] leading-tight font-extrabold transition-transform duration-700 group-hover:translate-x-1">
                {r.title}
              </h3>
              <p className="text-muted-foreground mt-3 max-w-sm text-sm leading-relaxed">
                {r.body}
              </p>
              <span className="bg-primary mt-7 block h-px w-8 origin-left transition-transform duration-700 group-hover:scale-x-[4]" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
