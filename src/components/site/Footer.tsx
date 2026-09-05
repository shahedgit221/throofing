const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why TH Roofing", href: "#why" },
  { label: "Projects", href: "#projects" },
  { label: "Videos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Residential Roofing",
  "Commercial Roofing",
  "Industrial Roofing",
  "Diamond Roofing",
];

export function Footer() {
  return (
    <footer className="bg-surface border-border border-t px-5 pt-20 pb-10 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-[1320px]">
        <div className="grid gap-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#home" className="text-2xl font-extrabold tracking-tight">
              TH<span className="text-primary">.</span>Roofing
            </a>
            <p className="text-muted-foreground mt-6 max-w-sm text-sm leading-relaxed">
              Residential, commercial, and industrial roofing built for Labrador weather.
              Proudly serving Labrador City, Wabush, and Western Labrador.
            </p>
          </div>

          <div>
            <h3 className="eyebrow">Explore</h3>
            <ul className="mt-6 space-y-3">
              {nav.map((n) => (
                <li key={n.label}>
                  <a
                    href={n.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow">Services</h3>
            <ul className="text-muted-foreground mt-6 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="mt-8 space-y-2 text-sm">
              <a href="tel:+17099440000" className="hover:text-primary block transition-colors">
                (709) 944-0000
              </a>
              <a
                href="mailto:info@throofing.ca"
                className="hover:text-primary block transition-colors"
              >
                info@throofing.ca
              </a>
            </div>
          </div>
        </div>

        <div className="border-border text-muted-foreground mt-16 flex flex-col gap-3 border-t pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} TH Roofing. All rights reserved.</span>
          <span>Labrador City · Newfoundland &amp; Labrador</span>
        </div>
      </div>
    </footer>
  );
}
