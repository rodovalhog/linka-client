import {  desc, gte } from "drizzle-orm";
import { db } from './index';
import { productTable } from './schema';


export type Product = typeof productTable.$inferSelect;

export async function listProducts(): Promise<Product[]> {
  return db.select().from(productTable).orderBy(desc(productTable.createdAt));
}



export async function listProductsLast24h(): Promise<Product[]> {
  const now = new Date();
  const last24h = new Date(now.getTime() - 24 * 60 * 60 * 1000);

  return db
    .select()
    .from(productTable)
    .where(gte(productTable.createdAt, last24h))
    .orderBy(desc(productTable.createdAt));
}