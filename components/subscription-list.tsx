"use client"

import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { SubscriptionCard } from "./subscription-card"
import { Spinner } from "@/components/ui/spinner"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Receipt } from "lucide-react"

export function SubscriptionList() {
  const subscriptions = useQuery(api.subscriptions.listAllSubscription)

  if (subscriptions === undefined) {
    return (
      <div className="flex items-center justify-center py-12">
        <Spinner className="h-8 w-8" />
      </div>
    )
  }

  if (subscriptions.length === 0) {
    return (
      <Card className="rotate-1 border-dashed">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted mb-4">
            <Receipt className="size-6 text-muted-foreground" />
          </div>
          <p className="font-display text-lg font-bold uppercase tracking-wide">
            No subscriptions yet
          </p>
          <p className="font-mono text-sm text-muted-foreground mt-2 max-w-xs mx-auto">
            Add your first subscription using the form on the left to start tracking your recurring charges.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <span className="font-mono text-3xl font-bold text-accent/80">02</span>
        <div className="flex-1">
          <h2 className="font-display text-lg font-bold uppercase tracking-wide">
            Your Subscriptions
          </h2>
          <p className="font-mono text-xs text-muted-foreground mt-1">
            {subscriptions.length} active {subscriptions.length === 1 ? 'subscription' : 'subscriptions'}
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {subscriptions.map((subscription, index) => (
          <SubscriptionCard
            key={subscription._id}
            subscription={subscription}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}
