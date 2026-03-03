"use client"

import { ArrowLeft, LogOut, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuthActions } from "@convex-dev/auth/react"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"

export function DashboardNav() {
  const { signOut } = useAuthActions()
  const user = useQuery(api.users.currentUser)

  return (
    <nav className="sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-end px-6 py-3">
        <div className="flex items-center gap-3">
          {user?.name && (
            <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
              {user.name}
            </span>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="font-mono text-xs text-foreground hover:bg-transparent hover:text-destructive"
            onClick={() => signOut()}
          >
            <LogOut className="size-3 mr-1" />
            sign out
          </Button>
        </div>
      </div>

      {/* Ruled line under nav */}
      <div className="h-px bg-rule mx-6 max-w-6xl" />
    </nav>
  )
}
