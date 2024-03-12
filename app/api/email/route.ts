import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const isEmailExists = await prisma.email.findFirst({
      where: {
        email: data.email,
      },
    });

    if (isEmailExists) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 200 }
      );
    }

    const newEmail = await prisma.email.create({
      data: {
        email: data.email,
      },
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Failed to send email" },
      {
        status: 500,
      }
    );
  }
}
