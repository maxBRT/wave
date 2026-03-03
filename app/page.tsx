"use client";

import { useAuthActions } from "@convex-dev/auth/react";
import { LandingNav } from "@/components/landing/nav";
import { LandingHero } from "@/components/landing/hero";
import { LandingFeatures } from "@/components/landing/features";
import { LandingPricing } from "@/components/landing/pricing";
import { LandingCTA } from "@/components/landing/cta";
import { LandingFooter } from "@/components/landing/footer";
import { LandingPreview } from "@/components/landing/preview";
import { LandingQuote } from "@/components/landing/quote";

export default function Home() {
  const { signIn } = useAuthActions();
  const onSignIn = () => void signIn("google");

  return (
    <div className="paper-texture relative min-h-screen bg-background text-foreground selection:bg-accent/20">
      <div className="pointer-events-none fixed inset-0 z-0" />
      <LandingNav onSignIn={onSignIn} />
      <LandingHero onSignIn={onSignIn} />
      <div className="pt-70 pb-10 text-center font-mono text-2xl tracking-[0.5em]">
        ~~~
      </div>
      <LandingFeatures />
      <LandingPreview />
      <LandingPricing onSignIn={onSignIn} />
      <LandingQuote />
      <LandingCTA onSignIn={onSignIn} />
      <LandingFooter />
    </div>
  );
}
