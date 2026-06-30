import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

// TEMPORARY one-off maintenance endpoint (removed right after use).
// Gated by the MAINT_SECRET env var; returns 404 to anyone without it.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SECRET = process.env.MAINT_SECRET || '';
const CONN = process.env.DATABASE_URL || process.env.POSTGRES_URL || '';

function ok(req: Request): boolean {
  return SECRET.length > 0 && req.headers.get('x-maint-secret') === SECRET;
}

export async function GET(req: Request) {
  if (!ok(req)) return NextResponse.json({ error: 'not found' }, { status: 404 });
  const sql = neon(CONN);
  const rows = (await sql`
    SELECT user_id,
           data->>'_name'  AS name,
           data->>'_email' AS email,
           updated_at
    FROM profiles
    ORDER BY updated_at DESC
  `) as Record<string, unknown>[];
  return NextResponse.json({ count: rows.length, profiles: rows });
}

export async function POST(req: Request) {
  if (!ok(req)) return NextResponse.json({ error: 'not found' }, { status: 404 });
  const url = new URL(req.url);
  if (url.searchParams.get('confirm') !== 'DELETE') {
    return NextResponse.json({ error: 'pass ?confirm=DELETE' }, { status: 400 });
  }
  const sql = neon(CONN);
  const deleted = (await sql`
    DELETE FROM profiles
    WHERE COALESCE(data->>'_name', '') NOT ILIKE 'Manuela%'
    RETURNING user_id, data->>'_name' AS name
  `) as Record<string, unknown>[];
  const remaining = (await sql`
    SELECT user_id, data->>'_name' AS name FROM profiles
  `) as Record<string, unknown>[];
  return NextResponse.json({ deleted: deleted.length, deletedRows: deleted, remaining });
}
