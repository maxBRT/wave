"use client"
import { SubscriptionForm } from "@/components/subscription-form";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";


export default function Dashboard() {
  const user = useQuery(api.users.currentUser)
  const subscriptions = useQuery(api.subscriptions.listAllSubscription)
  return (
    <>
      <h1>Dashboard {user?.name}</h1>
      <div className="max-w-150">
        <SubscriptionForm />
      </div>
      <div>
        <ul>
          {subscriptions?.map((s) => (
            <li key={s._id}>{s.name}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
