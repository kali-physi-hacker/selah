import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

/**
 * Auth.js (NextAuth v5) — Google sign-in with JWT sessions (no database adapter
 * needed; the first Google login *is* registration). The user's stable id is
 * exposed on the session and used to key their cloud profile.
 *
 * IMPORTANT: without a DB adapter, NextAuth otherwise assigns a fresh random id
 * per sign-in, so every login created a brand-new account. The jwt callback
 * pins token.sub to Google's permanent subject id (profile.sub /
 * account.providerAccountId), so re-logging in always lands on the same account.
 *
 * Reads AUTH_SECRET, AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET from the environment.
 * trustHost is on for Vercel (host inferred from the request).
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  session: { strategy: 'jwt' },
  trustHost: true,
  callbacks: {
    jwt({ token, account, profile }) {
      // On sign-in, key the account to Google's stable subject id.
      if (account) {
        const stableId = profile?.sub ?? account.providerAccountId;
        if (stableId) token.sub = stableId;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
});
