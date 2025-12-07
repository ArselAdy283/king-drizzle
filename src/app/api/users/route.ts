import { NextResponse } from "next/server";
import { db } from "@/src/db";
import { usersTable } from "@/src/db/schema";
import { eq } from "drizzle-orm";

// GET all users
export async function GET() {
  const users = await db.select().from(usersTable);
  return NextResponse.json(users);
}

// CREATE user
export async function POST(req: Request) {
  const body = await req.json();

  await db.insert(usersTable).values({
    name: body.name,
    age: Number(body.age),
    email: body.email,
  });

  return NextResponse.json({ message: "Created!" });
}
