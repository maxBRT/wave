"use client"

import { useState } from "react"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Spinner } from "@/components/ui/spinner"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"

interface SubscriptionFormProps {
  onSuccess?: () => void
  className?: string
}

export function SubscriptionForm({ onSuccess, className }: SubscriptionFormProps) {
  const createSub = useMutation(api.subscriptions.createSub)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      await createSub({
        name: formData.get("name") as string,
        price: parseFloat(formData.get("price") as string),
        currency: formData.get("currency") as string,
        appUrl: formData.get("appUrl") as string,
        renewalDate: formData.get("renewalDate") as string,
        frequency: formData.get("frequency") as "yearly" | "monthly",
      })

      onSuccess?.()
      form.reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create subscription")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="rotate-1">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-3xl font-bold text-accent/80">01</span>
          <div className="flex-1">
            <CardTitle className="font-display text-lg font-bold uppercase tracking-wide">
              Add Subscription
            </CardTitle>
            <p className="font-mono text-xs text-muted-foreground mt-1">
              Track a new recurring charge
            </p>
          </div>
          <Badge
            variant="outline"
            className="font-mono text-[10px] font-bold uppercase tracking-widest hidden sm:inline-flex"
          >
            new
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className={cn("space-y-5", className)}>
          {error && (
            <div className="rounded-lg border-2 border-destructive bg-destructive/10 px-4 py-3 text-sm text-destructive font-mono">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="name" className="font-mono text-xs uppercase tracking-wide">
              Subscription Name
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Netflix, Spotify, etc."
              className="font-mono"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="price" className="font-mono text-xs uppercase tracking-wide">
                Price
              </Label>
              <Input
                id="price"
                name="price"
                type="number"
                step="0.01"
                min="0"
                required
                placeholder="9.99"
                className="font-mono"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="currency" className="font-mono text-xs uppercase tracking-wide">
                Currency
              </Label>
              <Select name="currency" required>
                <SelectTrigger id="currency" className="font-mono w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CAD" className="font-mono">CAD ($)</SelectItem>
                  <SelectItem value="USD" className="font-mono">USD ($)</SelectItem>
                  <SelectItem value="EUR" className="font-mono">EUR (€)</SelectItem>
                  <SelectItem value="GBP" className="font-mono">GBP (£)</SelectItem>
                  <SelectItem value="JPY" className="font-mono">JPY (¥)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="frequency" className="font-mono text-xs uppercase tracking-wide">
                Frequency
              </Label>
              <Select name="frequency" required>
                <SelectTrigger id="frequency" className="font-mono w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monthly" className="font-mono">Monthly</SelectItem>
                  <SelectItem value="yearly" className="font-mono">Yearly</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="renewalDate" className="font-mono text-xs uppercase tracking-wide">
                Renewal Date
              </Label>
              <Input
                id="renewalDate"
                name="renewalDate"
                type="date"
                required
                className="font-mono"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="appUrl" className="font-mono text-xs uppercase tracking-wide">
              App URL
            </Label>
            <Input
              id="appUrl"
              name="appUrl"
              type="url"
              required
              placeholder="https://example.com"
              className="font-mono"
            />
          </div>

          <div className="pt-2 border-t border-dashed border-rule">
            <Button 
              type="submit" 
              disabled={isSubmitting} 
              className="w-full"
              size="cta"
            >
              {isSubmitting ? (
                <>
                  <Spinner className="mr-2" />
                  Creating...
                </>
              ) : (
                <>
                  <Plus className="size-4 mr-2" />
                  Add Subscription
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
