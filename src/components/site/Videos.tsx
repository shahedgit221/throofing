import { Play } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./primitives";

/**
 * TO ADD A REEL:
 * Replace the <VideoPlaceholder /> body with your embed, e.g.
 *   <iframe src="https://www.facebook.com/plugins/video.php?href=REEL_URL"
 *           className="absolute inset-0 h-full w-full" allowFullScreen />
 * The 9:16 frame and styling stay the same.
 */

const slots = [
  { label: "Facebook Reel", caption: "Reel 01" },
  { label: "Facebook Reel", caption: "Reel 02" },
  { label: "Facebook Reel", caption: "Reel 03" },
];

function VideoPlaceholder({ label, caption }: { label: string; caption: string }) {
  return (
    <div className="group border-border/70 hover:border-primary/60 relative border p-2 transition-colors duration-700">
      {/* 9:16 vertical video frame — replace the inner content with an embed */}
      <div className="bg-card relative aspect-[9/16] w-full overflow-hidden">
        <div className="absolute inset-0 grid place-items-center">
          <div className="flex flex-col items-center gap-5">
            <span className="border-primary/50 text-primary group-hover:bg-primary group-hover:text-primary-foreground grid h-16 w-16 place-items-center rounded-full border transition-all duration-500 group-hover:scale-110">
              <Play className="ml-0.5 h-5 w-5" />
            </span>
            <span className="text-muted-foreground text-[0.62rem] tracking-[0.3em] uppercase">
              {label}
            </span>
          </div>
        </div>
        <div className="border-primary/30 pointer-events-none absolute top-3 left-3 h-6 w-6 border-t border-l" />
        <div className="border-primary/30 pointer-events-none absolute right-3 bottom-3 h-6 w-6 border-r border-b" />
      </div>
      <div className="flex items-center justify-between px-2 pt-4 pb-2">
        <span className="font-display text-xs font-bold tracking-[0.2em] uppercase">
          {caption}
        </span>
        <span className="text-muted-foreground text-[0.6rem] tracking-[0.24em] uppercase">
          Coming soon
        </span>
      </div>
    </div>
  );
}

export function Videos() {
  return (
    <Section id="videos" tone="surface">
      <SectionHeading
        eyebrow="On Site"
        title="TH Roofing in Action"
        intro="Short vertical clips from active job sites around Labrador City."
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {slots.map((s, i) => (
          <Reveal
            key={s.caption}
            variant="up"
            delay={i * 0.12}
            className={i === 2 ? "sm:col-span-2 sm:mx-auto sm:max-w-[calc(50%-0.75rem)] lg:col-span-1 lg:max-w-none" : ""}
          >
            <VideoPlaceholder {...s} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
