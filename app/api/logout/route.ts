// api/logout.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
    cookies().delete("authToken")
    cookies().delete("user")
    return NextResponse.json({ message: "Logout sucessfully" }, { status: 200 })
}