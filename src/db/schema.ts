import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";

export const productTable = pgTable('product', {
  id: uuid('id').primaryKey().defaultRandom(),
  url: text('url').notNull(),
  tag: text('tag').notNull(),
  image: text('image'),
  name: text('name'),
  description: text('description'),
  price: text('price'),
  originalPrice: text('original_price'),
  discount: text('discount'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

