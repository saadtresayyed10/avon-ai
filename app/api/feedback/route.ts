import { currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const user = await currentUser();
  const res = await request.json();

  const { message } = res;
  console.log({ res });

  const result = await prisma.feedback.create({
    data: {
      id: user?.id as string,
      fullname: user?.fullName as string,
      email: user?.emailAddresses[0].emailAddress as string,
      message,
    },
  });
}
