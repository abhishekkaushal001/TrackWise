import authOptions from "@/app/auth/authOptions";
import { patchIssueSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: "unAuthorized Access" }, { status: 401 });

  const body = await request.json();
  const validation = await patchIssueSchema.safeParseAsync(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const { title, description, assignedToUserId, status } = body;

  if (assignedToUserId) {
    const user = await prisma.user.findUnique({
      where: { id: assignedToUserId },
    });
    if (!user)
      return NextResponse.json({ error: "Invalid User Id" }, { status: 400 });
  }

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue)
    return NextResponse.json({ error: "Invalid Issue" }, { status: 404 });

  const updated = await prisma.issue.update({
    where: { id: parseInt(params.id) },
    data: {
      title,
      description,
      status,
      assignedToUserId,
    },
  });

  return NextResponse.json(updated);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: "unAuthorized Access" }, { status: 401 });

  if (!params.id)
    return NextResponse.json(
      { error: "Invalid Request, No Issue found." },
      { status: 400 }
    );

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!issue)
    return NextResponse.json(
      { error: "Invalid Request, No Issue found." },
      { status: 404 }
    );

  await prisma.issue.delete({
    where: { id: parseInt(params.id) },
  });

  return NextResponse.json({ success: "Successfully Deleted." });
}
