import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    company: v.optional(v.string()),
    message: v.string(),
    productInterest: v.optional(v.string()),
  }),
  
  products: defineTable({
    name: v.string(),
    category: v.string(),
    description: v.string(),
    specifications: v.array(v.string()),
    features: v.array(v.string()),
    imageUrl: v.optional(v.string()),
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
