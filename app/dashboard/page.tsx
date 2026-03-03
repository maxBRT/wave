"use client"

import { SubscriptionForm } from "@/components/subscription-form"
import { SubscriptionList } from "@/components/subscription-list"
import { DashboardNav } from "@/components/dashboard/nav"
import { DashboardStats } from "@/components/dashboard/stats"
import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import { Spinner } from "@/components/ui/spinner"

export default function Dashboard() {
  const user = useQuery(api.users.currentUser)

  return (
    <div className="min-h-screen bg-background paper-texture">
      <DashboardNav />

      <main className="mx-auto max-w-6xl px-6 py-8">
        {/* Header Section */}
        <header className="mb-10">
          <div className="flex items-start gap-4">
            <span className="font-mono text-5xl font-bold text-accent/80">~</span>
            <div className="flex-1">
              <h1 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight">
                Dashboard
              </h1>
              <p className="font-mono text-sm text-muted-foreground mt-2">
                {user?.name ? (
                  <>Welcome back, <span className="text-foreground font-bold">{user.name}</span></>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <Spinner className="size-3" />
                    Loading...
                  </span>
                )}
              </p>
            </div>
          </div>
        </header>

        {/* Stats Overview */}
        <section className="mb-12">
          <DashboardStats />
        </section>

        {/* Ruled separator */}
        <div className="border-t-2 border-dashed border-rule my-10" />

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column - Add Form */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="lg:sticky lg:top-24">
              <SubscriptionForm />
            </div>
          </div>

          {/* Right Column - Subscription List */}
          <div className="lg:col-span-7 xl:col-span-8">
            <SubscriptionList />
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-dashed border-rule">
          <p className="font-mono text-xs text-muted-foreground text-center">
            wave~
          </p>
        </footer>
      </main>
    </div>
  )
}
