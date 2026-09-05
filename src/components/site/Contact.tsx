import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Clock, Mail, MapPin, Phone, Check } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

const details = [
  { icon: Phone, label: "Phone", value: "(709) 944-0000", href: "tel:+17099440000" },
  { icon: Mail, label: "Email", value: "info@throofing.ca", href: "mailto:info@throofing.ca" },
  { icon: MapPin, label: "Service Area", value: "Labrador City, Wabush & Western Labrador" },
  { icon: Clock, label: "Hours", value: "Mon–Sat, 7:00am – 6:00pm" },
];

const services = [
  "Residential Roofing",
  "Commercial Roofing",
  "Industrial Roofing",
  "Diamond / Specialty Roofing",
  "Repairs & Inspection",
];

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-muted-foreground text-[0.68rem] font-semibold tracking-[0.22em] uppercase">
        {label}
      </span>
      <div className="mt-3">{children}</div>
    </label>
  );
}

const inputCls =
  "w-full border-b border-border bg-transparent pb-3 text-base text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground/60 focus:border-primary";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <Section id="contact">
      <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        <div>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Request a free estimate."
            intro="Send us a few details and we'll be in touch quickly to arrange a site visit."
          />

          <div className="mt-14 space-y-8">
            {details.map((d, i) => (
              <Reveal key={d.label} variant="left" delay={i * 0.08}>
                <div className="flex items-start gap-5">
                  <d.icon className="text-primary mt-1 h-4 w-4 shrink-0" strokeWidth={1.6} />
                  <div>
                    <div className="text-muted-foreground text-[0.62rem] font-semibold tracking-[0.28em] uppercase">
                      {d.label}
                    </div>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="hover:text-primary mt-2 block text-lg font-semibold transition-colors"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <div className="mt-2 text-lg font-semibold">{d.value}</div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal variant="up" delay={0.1}>
          <div className="bg-surface border-border relative border p-8 sm:p-12">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="flex min-h-[420px] flex-col items-center justify-center text-center"
              >
                <span className="border-primary text-primary flex h-14 w-14 items-center justify-center rounded-full border">
                  <Check className="h-6 w-6" />
                </span>
                <h3 className="mt-8 text-2xl font-extrabold">Request received</h3>
                <p className="text-muted-foreground mt-3 max-w-sm text-sm leading-relaxed">
                  Thanks for reaching out. We'll get back to you shortly to schedule your
                  assessment.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-9">
                <div className="grid gap-9 sm:grid-cols-2">
                  <Field label="Full name">
                    <input required name="name" placeholder="Jane Doe" className={inputCls} />
                  </Field>
                  <Field label="Phone">
                    <input
                      required
                      name="phone"
                      type="tel"
                      placeholder="(709) 000-0000"
                      className={inputCls}
                    />
                  </Field>
                </div>
                <Field label="Email">
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="you@email.com"
                    className={inputCls}
                  />
                </Field>
                <Field label="Service needed">
                  <select required name="service" defaultValue="" className={cn(inputCls, "text-foreground")}>
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-surface">
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Project details">
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your roof, the property type, and your timeline."
                    className={cn(inputCls, "resize-none")}
                  />
                </Field>
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground hover:bg-foreground w-full px-8 py-4 text-[0.78rem] font-semibold tracking-[0.18em] uppercase transition-colors duration-500"
                >
                  Send Request
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
