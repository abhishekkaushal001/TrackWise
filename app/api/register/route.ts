import { userSchema } from "@/app/validationSchema";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { name, email, password } = data;

  const validation = await userSchema.safeParseAsync(data);
  if (!validation.success)
    return NextResponse.json(
      { error: validation.error.errors[0].message },
      { status: 400 }
    );

  let user = await prisma.user.findUnique({
    where: { email },
  });
  if (user)
    return NextResponse.json(
      { error: "User already registered." },
      { status: 400 }
    );

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await prisma.user.create({
    data: { name, email, password: hashedPassword },
  });
  return NextResponse.json({ success: "Successfully submitted." });
}
