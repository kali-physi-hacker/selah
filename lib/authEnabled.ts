/**
 * Master switch for optional authentication. Auth + cloud sync only activate when
 * NEXT_PUBLIC_AUTH_ENABLED === 'true' (set once Google OAuth + the database are
 * configured). Until then the app runs exactly as before — fully local, no auth
 * code paths, no errors. (NEXT_PUBLIC_* is inlined at build, so toggling it
 * requires a redeploy.)
 */
export const AUTH_ENABLED = process.env.NEXT_PUBLIC_AUTH_ENABLED === 'true';
