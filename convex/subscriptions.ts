import { getAuthUserId } from "@convex-dev/auth/server";
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createSub = mutation({
  args: {
    name: v.string(),
    price: v.number(),
    currency: v.string(),
    appUrl: v.string(),
    renewalDate: v.string(),
    frequency: v.union(v.literal("yearly"), v.literal("monthly")),
  },
  handler: async (ctx, args) => {

    const userId = await getAuthUserId(ctx)
    if (userId === null) {
      throw new Error("Not authenticated");
    }

    const newSubscriptionId = await ctx.db.insert("subscriptions", { userId: userId, ...args });
    return newSubscriptionId;
  },
});

export const listAllSubscription = query({
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx)

    if (userId === null) {
      throw new Error("Not authenticated")
    }

    const subscriptions = await ctx.db.query("subscriptions").collect()
    return subscriptions
  }
})

export const deleteSubscription = mutation({
  args: {
    id: v.id("subscriptions")
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx)
    const subscription = await ctx.db.get(args.id)
    if (userId !== subscription?.userId) {
      throw new Error("Unauthorized")
    }
    ctx.db.delete("subscriptions", subscription._id)
  }
})

export const getSubscriptionById = query({
  args: {
    id: v.id("subscriptions")
  },
  handler: async (ctx, args) => {
    const subscription = await ctx.db.get(args.id)
    return subscription
  }
})
