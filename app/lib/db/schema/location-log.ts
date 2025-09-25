import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";
import {location} from './location'
import { user } from "./auth";

export const locationLog = sqliteTable("locationLog", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  userId: int().notNull().references(() => user.id),
  startedAt: int().notNull(),
  endedAt:  int().notNull(),
  lat: real().notNull(),
  long: real().notNull(),
  locationId: int().notNull().references(() => location.id),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt:  int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now())
});
 