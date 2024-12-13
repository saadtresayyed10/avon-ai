"use client";

import { useChat } from "ai/react";
import { Loader2, Send, Trash } from "lucide-react";
import Markdown from "./Markdown";
import { Input } from "@/components/ui/input";

const AIPage = () => {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({ api: "api/genai" });

  const resetPage = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center w-full lg:gap-y-10 p-20">
      {RenderMessage()}
      {RenderForm()}
    </div>
  );

  function RenderForm() {
    return (
      <form
        className="bottom-6 absolute flex justify-center items-center gap-x-4 w-full border px-6 py-0.5 shadow-md rounded-lg lg:w-[90%]"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e, {
            data: {
              prompt: input,
            },
          });
        }}
      >
        <Input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder={isLoading ? "Generating..." : "Ask me something..."}
          disabled={isLoading}
          className="text-left border-none focus:border-none focus:outline-none focus:ring-0 focus:border-transparent"
        />
        <div className="flex items-center gap-x-2">
          <button type="submit">
            {isLoading ? (
              <Loader2
                onClick={stop}
                className="animate-spin w-6 h-6 stroke-[1]"
              />
            ) : (
              <Send className="w-6 h-6 stroke-[1]" />
            )}
          </button>
          <button onClick={resetPage}>
            <Trash className="w-6 h-6 stroke-[1]" />
          </button>
        </div>
      </form>
    );
  }
  function RenderMessage() {
    return (
      <div className="flex flex-col-reverse w-full text-left mt-4 gap-4 whitespace-pre-wrap">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`p-4 shadow-md rounded-md ml-10 relative ${
              m.role === "user" ? "bg-blue-400" : "bg-purple-400"
            }`}
          >
            <Markdown text={m.content} />
          </div>
        ))}
      </div>
    );
  }
};

export default AIPage;
