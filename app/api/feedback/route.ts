import { currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const user = await currentUser();

  if (!user) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  }

  const res = await request.json();
  const { message } = res;

  const result = await prisma.feedback.create({
    data: {
      fullname: user.fullName as string,
      email: user.emailAddresses[0]?.emailAddress as string,
      message,
    },
  });

  console.log("Feedback created", result);

  return new Response(JSON.stringify(result), { status: 201 });
}

export async function GET(request: Request) {
  const feedbacks = await prisma.feedback.findMany();
  return Response.json(feedbacks);
}
