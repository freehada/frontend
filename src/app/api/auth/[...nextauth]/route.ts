import axios from 'axios';
import NextAuth, { NextAuthOptions } from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import { redirect } from 'next/navigation';

export const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  debug: true,
  providers: [
    KakaoProvider({
      clientId: process.env.AUTH_KAKAO_CLIENT_ID!,
      clientSecret: process.env.AUTH_KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      return session;
    },
  },
};
// export default NextAuth(authOptions);

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
