import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenerativeAIStream, StreamingTextResponse } from "ai";

export async function POST(req: Request) {
  const reqBody = await req.json();
  const prompt = reqBody.data.prompt;

  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY!);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const streamingResponse = await model.generateContentStream(prompt);

  return new StreamingTextResponse(GoogleGenerativeAIStream(streamingResponse));
}
