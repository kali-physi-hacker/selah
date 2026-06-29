import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

/**
 * Auth.js (NextAuth v5) — Google sign-in with JWT sessions (no database adapter
 * needed; the first Google login *is* registration). The user's stable id
 * (token.sub) is exposed on the session and used to key their cloud profile.
 *
 * Reads AUTH_SECRET, AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET from the environment.
 * trustHost is on for Vercel (host inferred from the request).
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  session: { strategy: 'jwt' },
  trustHost: true,
  callbacks: {
    session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
});
