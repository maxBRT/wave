import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export function LandingQuote() {
  return (
    <section className="flex justify-center border-b-2 border-t-2 bg-accent border-foreground px-6 py-20 text-center md:py-28">
      <h2 className="font-mono text-3xl text-secondary font-black tracking-tight max-w-[800px] md:text-5xl">
        "I built wave because I can't remember to cancel a subscription even if my life depends on it."
      </h2>
    </section>
  );
}
