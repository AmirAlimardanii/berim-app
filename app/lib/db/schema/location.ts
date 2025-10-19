import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from 'drizzle-zod';

import { user } from "./auth";
import { unique } from "drizzle-orm/gel-core";

export const location = sqliteTable("location", {
  id: int().primaryKey({ autoIncrement: true }),
  userId: int().notNull().references(() => user.id),
  name: text().notNull(),
  slug: text().notNull().unique(),
  description: text().notNull(),
  lat: real().notNull(),
  long: real().notNull(),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now())
}, 
table => [
  unique().on(table.name, table.userId),
]);

 

export const InsertLocation = createInsertSchema(location, 
  {
    name: (field) => field.min(1).max(100),
    description: (field) => field.max(100),
    lat: (field) => field.min(-90).max(90),
    long: (field) => field.min(-180).max(180),
  }
).omit({
  id: true,
  userId: true,
  slug: true,
  createdAt: true,
  updatedAt:true

})