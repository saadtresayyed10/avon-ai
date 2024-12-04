"use client";

import { useChat } from "ai/react";
import { Loader2, Send } from "lucide-react";

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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e, {
            data: {
              prompt: input,
            },
          });
        }}
      >
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder={isLoading ? "Generating..." : "Ask me something..."}
          disabled={isLoading}
          className="border-2 border-black"
        />
        <button type="submit">
          {isLoading ? (
            <Loader2 onClick={stop} className="animate-spin" />
          ) : (
            <Send />
          )}
        </button>
      </form>
    );
  }
  function RenderMessage() {
    return <div>rm</div>;
  }
};

export default HomePage;
