import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import { Reveal, Section, SectionHeading } from "./primitives";

const projects = [
  {
    img: project1,
    w: 1200,
    h: 1500,
    category: "Residential",
    title: "Steel roof installation",
    body: "Full tear-off, underlayment, and steel panel installation on a family home.",
    location: "Labrador City",
    span: "lg:row-span-2",
    ratio: "aspect-[4/5]",
  },
  {
    img: project2,
    w: 1400,
    h: 900,
    category: "Neighbourhood work",
    title: "Roofs across town",
    body: "Ongoing residential roofing throughout the Labrador City area.",
    location: "Labrador City",
    span: "",
    ratio: "aspect-[16/10]",
  },
  {
    img: project3,
    w: 1200,
    h: 1000,
    category: "Detail work",
    title: "Ridge caps & flashing",
    body: "Precise ridge, valley, and flashing detailing that keeps water out.",
    location: "Labrador City",
    span: "",
    ratio: "aspect-[6/5]",
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Selected Work"
        title="A closer look at the craft."
        intro="Representative examples of the roofing work TH Roofing carries out."
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            key={p.title}
            variant="up"
            delay={i * 0.1}
            className={p.span}
          >
            <article className="group relative h-full overflow-hidden">
              <div className={`${p.ratio} w-full overflow-hidden`}>
                <img
                  src={p.img}
                  alt={p.title}
                  width={p.w}
                  height={p.h}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
              </div>
              <div className="from-background absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <span className="eyebrow">{p.category}</span>
                <h3 className="mt-3 text-[clamp(1.4rem,2.6vw,2rem)] leading-tight font-extrabold">
                  {p.title}
                </h3>
                <p className="text-muted-foreground mt-2 max-w-md text-sm leading-relaxed opacity-0 transition-all duration-700 group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0">
                  {p.body}
                </p>
                <span className="text-muted-foreground mt-4 block text-[0.66rem] tracking-[0.26em] uppercase">
                  {p.location}
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
