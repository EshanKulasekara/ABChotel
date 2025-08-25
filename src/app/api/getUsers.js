import { NextRequest } from "next/server";
import { db } from "@/db/index";
import { users } from "@/db/schema";
import { and, eq } from "drizzle-orm";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const firstName = formData.get("first_name");
  const lastName = formData.get("last_name");

  if (!firstName || !lastName) {
    return new Response(JSON.stringify([]), { status: 200 });
  }

  const foundUsers = await db
    .select()
    .from(users)
    .where(and(eq(users.firstName, firstName), eq(users.lastName, lastName)));

  return new Response(JSON.stringify(foundUsers), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}