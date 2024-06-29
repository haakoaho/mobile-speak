import NextAuth, { Session } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getDeployments } from '../../../util/getBackendUrl';
import { CustomSession, CustomToken, CustomUser } from './typing';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        const url = (await getDeployments()).backendUrl;
        const basicAuth = `Basic ${Buffer.from(`${credentials.username}:${credentials.password}`).toString('base64')}`;

        const response = await fetch(`${url}/api/users/userInfo`, {
          method: 'GET',
          headers: {
            Authorization: basicAuth,
            'Content-Type': 'application/json',
            'ngrok-skip-browser-warning': 'y',
          },
          credentials: 'include',
        });

        if (response.ok) {
          const user: any = await response.json();
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
    strategy: 'jwt'
  },
  secret: "abc",
  callbacks: {
    async jwt({ token, user }) {
      const customUser = user as CustomUser;
      if (user) {
        token.id = customUser.id;
        token.name = customUser.name;
        token.email = customUser.email;
        token.jsessionId = customUser.jsessionId;
      }
      return token;
    },
    async session({ session, token }) {
      const customToken = token as CustomToken
      const customSession = session as CustomSession;
      customSession.user.name = customToken.name;
      customSession.user.email = customToken.email;
      customSession.user.jsessionId = customToken.jsessionId;
      return session;
    },
  },
  pages: {
    signIn: '/signin',
  },
});

