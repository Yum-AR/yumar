import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { env } from '../../../env/server.mjs';
import prisma from '../../../lib/prisma';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.MAIL_SERVER,
      from: process.env.EMAIL_FROM,
      // from: 'NextAuth.js <no-reply@example.com>'
    }),
    // There are better ways of doing this, but I'm not sure how. Without casting as string,
    // Google throws me an error telling me clientId and clientSecret are undefined.
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: env.NEXTAUTH_SECRET,
  session: {

  },
  jwt: {

  },
  pages: {

  },
  callbacks: {

  },
  events: {

  },
};
export default NextAuth(authOptions);
