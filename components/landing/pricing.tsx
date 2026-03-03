import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const pricingFeatures = [
  "Unlimited subscriptions",
  "Renewal reminders",
  "Spending overview",
  "Cancel anytime",
];

export function LandingPricing({ onSignIn }: { onSignIn: () => void }) {
  return (
    <section id="pricing" className="px-6 py-20 scale-125">
      <div className="mx-auto max-w-2xl">
        <Card className="mx-auto max-w-xs -rotate-1">
          <CardHeader className="text-center">
            <Badge
              variant="outline"
              className="mx-auto w-fit font-mono text-[10px] font-bold uppercase tracking-widest"
            >
              one plan
            </Badge>
            <CardTitle className="font-mono mt-3 text-6xl font-black tracking-tight">
              $1.99
              <span className="ml-1 text-lg font-normal text-muted-foreground">
                /mo
              </span>
            </CardTitle>
            <CardDescription className="font-mono text-xs">
              No tiers. No upsells. No nonsense.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="border-b border-dashed border-rule" />
            <ul className="mt-4 space-y-2.5">
              {pricingFeatures.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 font-mono text-sm text-muted-foreground"
                >
                  <Check className="size-3.5 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </CardContent>

          <CardFooter className="pb-6">
            <Button size="cta" className="w-full" onClick={onSignIn}>
              Get Started <ArrowRight className="size-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
