import { listProductsLast24h } from "@/src/db/product";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const products = await listProductsLast24h();
    return NextResponse.json(products);
  } catch (error) {
    console.error('Failed to list products', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}