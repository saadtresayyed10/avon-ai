import { currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    // Fetch the current user using Clerk's server API
    const user = await currentUser();

    if (!user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    // Parse the request body
    const res = await request.json();
    const { message } = res;

    // Create a new feedback entry in the database
    const result = await prisma.feedback.create({
      data: {
        id: user.id,
        fullname: user.fullName || "Anonymous",
        email: user.emailAddresses[0]?.emailAddress || "anonymous@gmail.com",
        message,
      },
    });

    console.log("Feedback created", result);

    // Return the created feedback
    return new Response(JSON.stringify(result), { status: 201 });
  } catch (error: any) {
    console.error("Error creating feedback:", error);

    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details: error.message,
      }),
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  const feedbacks = await prisma.feedback.findMany();
  return Response.json(feedbacks);
}
