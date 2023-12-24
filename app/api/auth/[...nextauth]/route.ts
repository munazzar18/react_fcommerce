import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const url = "http://localhost:5005/api/";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "Email",
                },
                password: { lable: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                if (!credentials?.email || !credentials?.password) return null;
                const { email, password } = credentials;
                const res = await fetch(`${url}auth/login`, {
                    method: "POST",
                    body: JSON.stringify({
                        email,
                        password
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                if (res.status == 401) {
                    return null;
                }
                const user = await res.json()
                return user.data;
            },
        })
    ],

    callbacks: {
        async jwt({ token, user }) {
            if (user) return { ...token, ...user };

            return token
        },
        async session({ token, session }) {
            session.user = token.user
            session.access_token = token.access_token
            return session
        }
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };