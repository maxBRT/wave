import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import HeroBackDrop from "./hero-backdrop";

export function LandingHero({ onSignIn }: { onSignIn: () => void }) {

  return (
    <div>
      <HeroBackDrop />
      <section className="relative px-6 pt-10 transform md:pt-10 scale-150">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-mono drop-shadow-[6px_6px_0px_rgba(0,0,0,1)] mt-6 animate-fade-up text-[clamp(5rem,20vw,13rem)] text-secondary leading-[0.8] font-black tracking-tighter [animation-delay:100ms]">
            wave~
          </h1>
          <div className="flex flex-row gap-20 justify-between">
            <div className="flex flex-col">
              <Badge
                variant={"secondary"}
                className="mt-6 max-w-sm rotate-2 animate-fade-up font-mono text-base leading-relaxed [animation-delay:200ms]"
              >
                Simple Subscription Tracking.
              </Badge>
              <Badge
                variant={"accent"}
                className="mt-4 max-w-sm -rotate-2 animate-fade-up font-mono text-base leading-relaxed [animation-delay:200ms]"
              >
                No Bull$#!t
              </Badge>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:300ms]">
              <Button size="cta" onClick={onSignIn}>
                Get Started <ArrowRight className="size-4" />
              </Button>
              <span className="font-mono text-xs text-foreground">
                $1.99/mo · unlimited everything
              </span>
            </div>

          </div>
        </div>

      </section >
    </div>
  );
}
