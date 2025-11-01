import { NextResponse } from "next/server";
export async function GET(request: Request) {
  const data = { message: "Hello from the API route!" };
  return NextResponse.json(data);
}