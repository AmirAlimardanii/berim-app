import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { user } from "./auth";

export const location = sqliteTable("location", {
  id: int().primaryKey({ autoIncrement: true }),
  userId: int().notNull().references(() => user.id),
  name: text().notNull(),
  slug: text().notNull().unique(),
  description: text().notNull(),
  lat: real().notNull(),
  long: real().notNull(),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt:  int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now())

 
});
 