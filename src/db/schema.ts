import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";

// Role Enum
export const roleEnum = pgEnum("role", ["CUSTOMER", "STAFF", "ADMIN"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),

  // Clerk user ID
  clerkId: varchar("clerk_id", { length: 191 }).notNull().unique(),

  // Optional fields (since Clerk manages auth)
  email: varchar("email", { length: 191 }).unique(),

  firstName: varchar("first_name", { length: 100 }),
  lastName: varchar("last_name", { length: 100 }),
  phone: varchar("phone", { length: 32 }),

  role: roleEnum("role").default("CUSTOMER").notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});