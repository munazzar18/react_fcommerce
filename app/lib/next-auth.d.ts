import NextAuth from "next-auth/next";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {

        access_token: string;
        user: {
            email: string,
            id: number,
            username: string,
            role: string,
        }

    }
}

declare module "next-auth/jwt" {
    interface JWT {

        access_token: string;
        user: {
            email: string,
            id: number,
            username: string,
            role: string,

        }
    }
}