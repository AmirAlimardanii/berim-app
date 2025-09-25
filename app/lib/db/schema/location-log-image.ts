import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";
import {locationLog} from './location-log'
import { user } from "./auth";


export const locationLogImage = sqliteTable("locationLogImage", {
  id: int().primaryKey({ autoIncrement: true }),
  userId: int().notNull().references(() => user.id),
  key: text().notNull(),
  locationLogId:int().notNull().references(() => locationLog.id),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt:  int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now())
});
 