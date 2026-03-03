"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Trash2 } from "lucide-react"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Button } from "./ui/button"
import { Id } from "@/convex/_generated/dataModel"

interface Subscription {
  _id: Id<"subscriptions">
  name: string
  price: number
  currency: string
  appUrl: string
  renewalDate: string
  frequency: "yearly" | "monthly"
}

interface SubscriptionCardProps {
  subscription: Subscription
  index?: number
}

const currencySymbols: Record<string, string> = {
  CAD: "$",
  USD: "$",
  EUR: "€",
  GBP: "£",
  JPY: "¥",
}

function getTimeUntilRenewal(renewalDate: string): { text: string; urgent: boolean } {
  const now = new Date()
  const renewal = new Date(renewalDate)
  const diffTime = renewal.getTime() - now.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays < 0) {
    return { text: "overdue", urgent: true }
  } else if (diffDays === 0) {
    return { text: "today", urgent: true }
  } else if (diffDays === 1) {
    return { text: "tomorrow", urgent: true }
  } else if (diffDays < 7) {
    return { text: `in ${diffDays} days`, urgent: true }
  } else if (diffDays < 30) {
    return { text: `in ${diffDays} days`, urgent: false }
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30)
    return { text: `in ${months} month${months > 1 ? "s" : ""}`, urgent: false }
  } else {
    const years = Math.floor(diffDays / 365)
    return { text: `in ${years} year${years > 1 ? "s" : ""}`, urgent: false }
  }
}

// Generate consistent rotation based on index
function getRotation(index: number = 0): string {
  const rotations = ["-rotate-1", "rotate-1", "rotate-0", "-rotate-1", "rotate-0", "rotate-1"]
  return rotations[index % rotations.length]
}

export function SubscriptionCard({ subscription, index = 0 }: SubscriptionCardProps) {
  const { name, price, currency, appUrl, renewalDate, frequency } = subscription

  const currencySymbol = currencySymbols[currency] || currency
  const formattedPrice = `${currencySymbol}${price.toFixed(2)}`
  const deleteSub = useMutation(api.subscriptions.deleteSubscription)
  const renewal = getTimeUntilRenewal(renewalDate)
  const rotation = getRotation(index)

  return (
    <Card className={`${rotation} transition-all hover:shadow-[6px_6px_0_var(--foreground)] group`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="font-display text-lg font-bold uppercase tracking-wide">
            {name}
          </CardTitle>
          <Badge
            variant={frequency === "monthly" ? "outline" : "secondary"}
            className="font-mono text-[10px] font-bold uppercase tracking-wider"
          >
            {frequency}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-baseline gap-1">
          <span className="font-mono text-3xl font-bold">{formattedPrice}</span>
          <span className="font-mono text-sm text-muted-foreground">
            /{frequency === "monthly" ? "mo" : "yr"}
          </span>
        </div>

        <div className="border-t border-dashed border-rule pt-3">
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide mb-1">
            Renews
          </p>
          <p className={`font-mono text-sm font-bold ${renewal.urgent ? 'text-destructive' : 'text-foreground'}`}>
            {renewal.text}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center pt-2 border-t border-dashed border-rule">
          <a
            href={appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:underline underline-offset-2"
          >
            Open app
            <ExternalLink className="h-3 w-3" />
          </a>
          <Button
            onClick={() => deleteSub({ id: subscription._id })}
            variant="ghost"
            size="icon-xs"
            className="text-muted-foreground hover:text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="size-3.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
