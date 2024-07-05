// pages/api/auth/authOptions.ts
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { CustomSession, CustomToken, CustomUser } from './typing';
import { getBackendUrl } from '../../../util/getBackendUrl';


export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const basicAuth = `Basic ${Buffer.from(`${credentials?.username}:${credentials?.password}`).toString('base64')}`;
        const backendUrl = await getBackendUrl();
        const response = await fetch(`${backendUrl}/api/users/userInfo`, {
          method: 'GET',
          headers: {
            Authorization: basicAuth,
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (response.ok) {
          const user: CustomUser = await response.json();
          const setCookieHeader = response.headers.get('set-cookie');
          const jsessionId = setCookieHeader?.match(/JSESSIONID=([^;]+);/)?.[1];
          if (jsessionId) {
            user.jsessionId = jsessionId;
          }
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: "abc", // Replace with a strong secret for production
  callbacks: {
    async jwt({ token, user }) {
      const customUser = user as CustomUser;
      if (customUser) {
        token.id = customUser.id;
        token.name = customUser.name;
        token.email = customUser.email;
        token.jsessionId = customUser.jsessionId;
      }
      return token;
    },
    async session({ session, token }) {
      const customToken = token as CustomToken;
      const customSession = session as CustomSession;
      customSession.user.name = customToken.name;
      customSession.user.email = customToken.email;
      customSession.user.jsessionId = customToken.jsessionId;
      return customSession;
    },
  },
  pages: {
    signIn: '/signin',
  },
};
