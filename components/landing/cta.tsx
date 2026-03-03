import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWindowDimension } from "@/hooks/useWindowDimentions";

export function LandingCTA({ onSignIn }: { onSignIn: () => void }) {
  return (
    <section className="px-6 py-20 text-center md:py-28 scale-125">
      <h2 className="font-mono text-3xl font-black tracking-tight md:text-5xl">
        It&apos;s $1.99.
      </h2>
      <Button
        variant="accent"
        size="cta"
        className="mt-8"
        onClick={onSignIn}
      >
        Just try it <ArrowRight className="size-4" />
      </Button>
    </section>
  );
}
