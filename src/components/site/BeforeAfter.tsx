import { useCallback, useEffect, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import ba1Before from "@/assets/ba1-before.jpg";
import ba1After from "@/assets/ba1-after.jpg";
import ba2Before from "@/assets/ba2-before.jpg";
import ba2After from "@/assets/ba2-after.jpg";
import { Reveal, Section, SectionHeading } from "./primitives";

function Compare({
  before,
  after,
  caption,
}: {
  before: string;
  after: string;
  caption: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const next = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      update(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [update]);

  return (
    <figure>
      <div
        ref={ref}
        onPointerDown={(e) => {
          dragging.current = true;
          update(e.clientX);
        }}
        className="group relative aspect-[16/10] w-full touch-none overflow-hidden select-none"
      >
        <img
          src={after}
          alt="After — new roof installed"
          width={1400}
          height={900}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={before}
            alt="Before — existing worn roof"
            width={1400}
            height={900}
            loading="lazy"
            className="h-full w-full object-cover"
            draggable={false}
          />
        </div>

        <span className="bg-background/70 text-foreground absolute top-4 left-4 px-3 py-1.5 text-[0.62rem] font-semibold tracking-[0.24em] uppercase backdrop-blur-sm">
          Before
        </span>
        <span className="bg-primary/90 text-primary-foreground absolute top-4 right-4 px-3 py-1.5 text-[0.62rem] font-semibold tracking-[0.24em] uppercase">
          After
        </span>

        <div
          className="pointer-events-none absolute inset-y-0"
          style={{ left: `${pos}%` }}
        >
          <span className="bg-primary absolute inset-y-0 -left-px w-0.5" />
          <button
            type="button"
            aria-label="Drag to compare before and after"
            onPointerDown={(e) => {
              e.stopPropagation();
              dragging.current = true;
            }}
            className="bg-background/85 border-primary text-primary pointer-events-auto absolute top-1/2 left-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border backdrop-blur-md transition-transform duration-300 hover:scale-110"
          >
            <MoveHorizontal className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>
      <figcaption className="text-muted-foreground mt-4 flex items-center gap-3 text-xs tracking-[0.16em] uppercase">
        <span className="hairline w-6 shrink-0" />
        {caption}
      </figcaption>
    </figure>
  );
}

export function BeforeAfter() {
  return (
    <Section id="before-after" tone="surface">
      <SectionHeading
        eyebrow="Before &amp; After"
        title="Drag to see the difference."
        intro="Two examples of what a full roof replacement changes — pull the handle across each frame."
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-10">
        <Reveal variant="up">
          <Compare
            before={ba1Before}
            after={ba1After}
            caption="Residential — shingle to steel replacement"
          />
        </Reveal>
        <Reveal variant="up" delay={0.14}>
          <Compare
            before={ba2Before}
            after={ba2After}
            caption="Commercial — corroded panel replacement"
          />
        </Reveal>
      </div>
    </Section>
  );
}
