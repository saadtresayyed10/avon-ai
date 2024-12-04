"use client";

import { useChat } from "ai/react";
import { Send } from "lucide-react";

const HomePage = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({ api: "api/genai" });
  return (
    <div className="flex flex-col items-center w-full min-h-screen lg:gap-y-10 p-20">
      {RenderForm()}
    </div>
  );

  function RenderForm() {
    return (
      <form>
        <input type="text" className="border-2 border-black" />
        <button type="submit">
          <Send />
        </button>
      </form>
    );
  }
  function RenderMessage() {
    return <div>rm</div>;
  }
};

export default HomePage;
