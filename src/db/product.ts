import { desc } from 'drizzle-orm';
import { db } from './index';
import { productTable } from './schema';


export type Product = typeof productTable.$inferSelect;

export async function listProducts(): Promise<Product[]> {
  return db.select().from(productTable).orderBy(desc(productTable.createdAt));
}

