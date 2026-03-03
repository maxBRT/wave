"use client"

import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const currencySymbols: Record<string, string> = {
  CAD: "$",
  USD: "$",
  EUR: "€",
  GBP: "£",
  JPY: "¥",
}

export function DashboardStats() {
  const subscriptions = useQuery(api.subscriptions.listAllSubscription)

  if (subscriptions === undefined) {
    return (
      <div className="grid gap-4 sm:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="h-24 animate-pulse bg-muted" />
        ))}
      </div>
    )
  }

  const totalSubscriptions = subscriptions.length
  
  // Calculate monthly total (convert yearly to monthly)
  const monthlyTotal = subscriptions.reduce((acc, sub) => {
    const monthlyPrice = sub.frequency === "yearly" ? sub.price / 12 : sub.price
    return acc + monthlyPrice
  }, 0)

  // Calculate yearly total (convert monthly to yearly)
  const yearlyTotal = subscriptions.reduce((acc, sub) => {
    const yearlyPrice = sub.frequency === "monthly" ? sub.price * 12 : sub.price
    return acc + yearlyPrice
  }, 0)

  // Get most common currency or default to $
  const currencyCounts = subscriptions.reduce((acc, sub) => {
    acc[sub.currency] = (acc[sub.currency] || 0) + 1
    return acc
  }, {} as Record<string, number>)
  
  const primaryCurrency = Object.entries(currencyCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || "USD"
  const currencySymbol = currencySymbols[primaryCurrency] || "$"

  const stats = [
    {
      label: "Active Subscriptions",
      value: totalSubscriptions.toString(),
      badge: "total",
      rotation: "-rotate-1",
    },
    {
      label: "Monthly Spend",
      value: `${currencySymbol}${monthlyTotal.toFixed(0)}`,
      badge: "/mo",
      rotation: "rotate-1",
    },
    {
      label: "Yearly Spend",
      value: `${currencySymbol}${yearlyTotal.toFixed(0)}`,
      badge: "/yr",
      rotation: "-rotate-1",
    },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat, index) => (
        <Card
          key={stat.label}
          className={`${stat.rotation} hover:shadow-[6px_6px_0_var(--foreground)] transition-shadow`}
        >
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-mono text-xs text-muted-foreground uppercase tracking-wide">
                  {stat.label}
                </p>
                <p className="font-mono text-4xl font-bold mt-2">
                  {stat.value}
                </p>
              </div>
              <Badge
                variant="outline"
                className="font-mono text-[10px] font-bold uppercase"
              >
                {stat.badge}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
