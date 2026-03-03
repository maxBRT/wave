import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export function LandingPreview() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-baseline gap-5">
          <span className="font-mono text-3xl font-bold text-accent/80">
            05
          </span>
          <h2 className="font-display text-2xl font-black uppercase tracking-tight">
            See it in action
          </h2>
        </div>

        <p className="mt-4 ml-12 max-w-md font-mono text-sm leading-relaxed text-muted-foreground">
          Add subscriptions on the left. See them all at a glance on the right.
          No clutter, no learning curve.
        </p>

        <div className="relative mt-12">
          {/* Tape strips */}
          <div className="absolute -top-4 left-12 z-10 h-8 w-20 rotate-[-4deg] bg-tape/80" />
          <div className="absolute -top-4 right-16 z-10 h-8 w-24 rotate-[3deg] bg-tape/80" />

          {/* Screenshot frame */}
          <div className="rotate-[-0.5deg] border-2 border-foreground bg-card p-3 shadow-[6px_6px_0px_rgba(0,0,0,1)] md:p-5">
            <div className="mb-3 flex items-center gap-3 border-b border-dashed border-rule pb-3">
              <div className="flex gap-1.5">
                <div className="size-2.5 rounded-full bg-foreground/20" />
                <div className="size-2.5 rounded-full bg-foreground/20" />
                <div className="size-2.5 rounded-full bg-foreground/20" />
              </div>
              <span className="font-mono text-[10px] tracking-wider text-muted-foreground">
                wave~/dashboard
              </span>
            </div>
            <Image
              src="/example.png"
              alt="Wave dashboard showing subscription tracking — add subscriptions and view them all in one place"
              width={1200}
              height={600}
              className="w-full"
              priority={false}
            />
          </div>

          {/* Annotation callouts */}
          <Badge
            variant="secondary"
            className="absolute -bottom-4 left-8 rotate-[-2deg] font-mono text-xs shadow-[3px_3px_0px_rgba(0,0,0,1)]"
          >
            ← add in seconds
          </Badge>
          <Badge
            variant="accent"
            className="absolute -bottom-4 right-8 rotate-[2deg] font-mono text-xs shadow-[3px_3px_0px_rgba(0,0,0,1)]"
          >
            all your subs →
          </Badge>
        </div>
      </div>
    </section>
  );
}
