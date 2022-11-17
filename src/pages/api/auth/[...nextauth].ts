import NextAuth, { type NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';
// Prisma adapter for NextAuth, optional and can be removed
import { env } from "../../../env/server.mjs";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prisma";


// export const authOptions: NextAuthOptions = {
//   // Include user.id on session
//   callbacks: {
//     session({ session, user }) {
//       if (session.user) {
//         session.user.id = user.id;
//       }
//       return session;
//     },
//   },
//   // Configure one or more authentication providers
  
// };

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID,
      clientSecret: env.DISCORD_CLIENT_SECRET,
    }),
    EmailProvider({
      server: process.env.MAIL_SERVER,
      from: process.env.EMAIL_FROM
      //from: 'NextAuth.js <no-reply@example.com>'
    }),
    //There are better ways of doing this, but I'm not sure how. Without casting as string, Google throws me an error telling me clientId and clientSecret are undefined.
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
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

  }
});