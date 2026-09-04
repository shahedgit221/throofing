import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why TH Roofing", href: "#why" },
  { label: "Projects", href: "#projects" },
  { label: "Videos", href: "#videos" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={reduce ? false : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/90 border-border/70 border-b backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div
          className={cn(
            "mx-auto grid w-full max-w-[1320px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 transition-all duration-500 sm:px-8 lg:px-12",
            scrolled ? "py-3.5" : "py-6",
          )}
        >
          <a href="#home" className="group flex min-w-0 items-center gap-3">
            <span className="border-primary/60 text-primary grid h-9 w-9 shrink-0 place-items-center border text-[0.7rem] font-bold tracking-[0.05em]">
              TH
            </span>
            <span className="min-w-0">
              <span className="font-display block truncate text-sm leading-none font-extrabold tracking-[0.22em] uppercase">
                TH Roofing
              </span>
              <span className="text-muted-foreground mt-1 block truncate text-[0.6rem] tracking-[0.28em] uppercase">
                Labrador City
              </span>
            </span>
          </a>

          <div className="flex items-center gap-8">
            <nav className="hidden items-center gap-7 xl:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-muted-foreground hover:text-foreground relative text-[0.72rem] font-medium tracking-[0.16em] uppercase transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="bg-primary text-primary-foreground hover:bg-foreground hidden px-6 py-3 text-[0.7rem] font-semibold tracking-[0.18em] uppercase transition-colors duration-500 lg:inline-flex"
            >
              Get a Free Estimate
            </a>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="border-border text-foreground hover:border-primary hover:text-primary grid h-11 w-11 place-items-center border transition-colors duration-300 xl:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-background grain fixed inset-0 z-[60] flex flex-col xl:hidden"
          >
            <div className="flex items-center justify-between px-5 py-6 sm:px-8">
              <span className="font-display text-sm font-extrabold tracking-[0.22em] uppercase">
                TH Roofing
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="border-border text-foreground grid h-11 w-11 place-items-center border"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-1 px-5 sm:px-8">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={reduce ? false : { y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15 + i * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="border-border/50 hover:text-primary border-b py-4 text-[clamp(1.6rem,7vw,2.4rem)] leading-none font-extrabold tracking-tight transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <div className="space-y-3 px-5 pb-10 sm:px-8">
              <a
                href="tel:+17092805262"
                className="border-border text-foreground flex items-center justify-center gap-3 border py-4 text-[0.75rem] font-semibold tracking-[0.18em] uppercase"
              >
                <Phone className="h-4 w-4" /> +1 709-280-5262
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="bg-primary text-primary-foreground flex items-center justify-center py-4 text-[0.75rem] font-semibold tracking-[0.18em] uppercase"
              >
                Get a Free Estimate
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
