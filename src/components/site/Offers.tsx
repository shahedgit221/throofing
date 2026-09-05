import { BadgePercent, CalendarClock, ShieldCheck } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./primitives";

const offers = [
  {
    icon: BadgePercent,
    title: "Seniors Discount",
    body: "A standing discount for seniors on every residential roofing job — applied automatically to your written estimate, no negotiation required.",
    tag: "Always available",
  },
  {
    icon: CalendarClock,
    title: "Flexible Payment Plans",
    body: "Spread the cost of a new roof across manageable installments. We'll structure a schedule around your budget before a single shingle is lifted.",
    tag: "Zero surprises",
  },
  {
    icon: ShieldCheck,
    title: "Workmanship Guarantee",
    body: "Every installation is backed by our own guarantee alongside the manufacturer's warranty. If something isn't right, we come back.",
    tag: "Written coverage",
  },
];

export function Offers() {
  return (
    <Section id="offers" tone="surface">
      <SectionHeading
        eyebrow="Value & Assurance"
        title="Fair pricing, honest terms."
        intro="A roof is a major investment. We make it easier to say yes — and easier to live with afterwards."
      />

      <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {offers.map((o, i) => (
          <Reveal key={o.title} variant="up" delay={i * 0.1}>
            <div className="group bg-background hover:bg-card relative h-full p-10 transition-colors duration-500 lg:p-12">
              <div className="text-primary flex items-center justify-between">
                <o.icon className="h-7 w-7" strokeWidth={1.3} />
                <span className="eyebrow text-[0.6rem]">{o.tag}</span>
              </div>
              <h3 className="mt-10 text-2xl font-extrabold">{o.title}</h3>
              <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{o.body}</p>
              <span className="hairline mt-10 block w-0 transition-all duration-700 group-hover:w-full" />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
