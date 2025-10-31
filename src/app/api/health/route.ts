// app/api/health/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const mustHave = [
    'NEXT_PUBLIC_BASE_URL',
    'MELI_ACCESS_TOKEN',
    'DATABASE_URL',
    // adicione as que você realmente usa
  ] as const;

  const status = Object.fromEntries(
    mustHave.map((name) => [name, process.env[name] ? 'ok' : 'MISSING'])
  );

  const missing = mustHave.filter((name) => !process.env[name]);
  const httpStatus = missing.length ? 500 : 200;

  return NextResponse.json({ env: status, node: process.version }, { status: httpStatus });
}
