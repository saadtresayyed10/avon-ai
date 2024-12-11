import { useUser } from "@clerk/nextjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const user = useUser();
  const res = await request.json();

  const { message } = res;
  console.log({ res });

  const result = await prisma.feedback.create({
    data: {
      id: user.user?.id as string,
      fullname: user.user?.fullName as string,
      email: user.user?.emailAddresses[0].emailAddress as string,
      message,
    },
  });
  console.log("Feedback created", result);

  return new Response(JSON.stringify(result), { status: 201 });
}

export async function GET(request: Request) {
  const checkingFetch = {
    message: "O Salma!",
  };

  return Response.json(checkingFetch);
}
