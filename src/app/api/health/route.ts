// app/api/health/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const mustHave = [
    'NEXT_PUBLIC_BASE_URL',
    'MELI_ACCESS_TOKEN',
    process.env.DATABASE_URL
    // adicione as que você realmente usa
  ];
  const status = Object.fromEntries(
    mustHave.map(k => [k, process.env[k] ? 'ok' : 'MISSING'])
  );
  return NextResponse.json({ env: status, node: process.version });
}
