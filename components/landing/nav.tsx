import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LandingNav({ onSignIn }: { onSignIn: () => void }) {
  return (
    <nav className="sticky top-0 z-50">
      <div className="mx-auto flex max-w-4xl items-center justify-end px-6 py-3">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            className="font-mono text-xs text-foreground underline-offset-2 hover:bg-transparent hover:underline"
            asChild
          >
            <a href="#features">features</a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="font-mono text-xs text-foreground underline-offset-2 hover:bg-transparent hover:underline"
            asChild
          >
            <a href="#pricing">pricing</a>
          </Button>
          <Button size="sm" className="font-mono text-xs" onClick={onSignIn}>
            sign in <ArrowRight className="size-3" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
