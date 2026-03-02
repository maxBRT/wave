import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values"

const schema = defineSchema({
  ...authTables,
  subscriptions: defineTable({
    userId: v.id("users"),
    name: v.string(),
    price: v.number(),
    currency: v.string(),
    appUrl: v.string(),
    renewalDate: v.string(),
    frequency: v.union(v.literal("yearly"), v.literal("monthly"))
  }).index("by_userId", ["userId"])
});

export default schema;
