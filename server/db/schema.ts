import {
  integer,
  boolean,
  pgTable,
  uuid,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: uuid().primaryKey().defaultRandom(),
  title: varchar({ length: 500 }).notNull(),
  description: varchar({ length: 1000 }),
  completed: boolean().default(false),
  createdAt: timestamp({ withTimezone: true }).defaultNow(),
  updatedAt: timestamp({ withTimezone: true }).defaultNow(),
});
