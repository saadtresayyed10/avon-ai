"use client";

import { useChat } from "ai/react";
import { Loader2, Send } from "lucide-react";
import Markdown from "./_components/Markdown";

const HomePage = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({ api: "api/genai" });
  return (
    <div className="flex flex-col items-center w-full min-h-screen lg:gap-y-10 p-20">
      {RenderForm()}
      {RenderMessage()}
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
    return (
      <div className="flex flex-col-reverse w-full text-left mt-4 gap-4 whitespace-pre-wrap">
        {messages.map((m, idx) => (
          <div
            className={`p-4 shadow-md rounded-md ml-10 relative ${
              m.role === "user" ? "bg-blue-400" : ""
            }`}
          >
            <Markdown text={m.content} />
          </div>
        ))}
      </div>
    );
  }
};

export default HomePage;
