import { auth } from '@/auth';

/**
 * Admin = a signed-in user whose email is in the ADMIN_EMAILS allowlist
 * (comma-separated env var, defaulting to the owner). Used to gate /admin.
 */
const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || 'seph@algogroup.io')
  .split(',')
  .map((s) => s.trim().toLowerCase())
  .filter(Boolean);

export function isAdminEmail(email?: string | null): boolean {
  return Boolean(email && ADMIN_EMAILS.includes(email.toLowerCase()));
}

export async function getAdmin(): Promise<{ email: string } | null> {
  try {
    const session = await auth();
    const email = session?.user?.email;
    if (isAdminEmail(email)) return { email: email as string };
  } catch {
    /* auth not configured */
  }
  return null;
}
