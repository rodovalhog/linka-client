import { NextResponse } from 'next/server';
import { listProducts } from '@/src/db/product';

export async function GET() {
  try {
    const products = await listProducts();
    return NextResponse.json(products);
  } catch (error) {
    console.error('Failed to list products', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


