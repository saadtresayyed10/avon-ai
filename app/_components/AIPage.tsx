"use client";

import { useChat } from "ai/react";
import { Loader2, Send, Trash } from "lucide-react";
import Markdown from "./Markdown";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import TypingAnimation from "@/components/ui/typing-animation";
import { useUser } from "@clerk/nextjs";

const AIPage = () => {
  const [activeName, setActiveName] = useState(true);
  const { user } = useUser();

  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({ api: "api/genai" });

  const resetPage = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen lg:gap-y-10 p-20">
      {activeName && (
        <TypingAnimation
          className="text-3xl text-black font-semibold capitalize mt-10 lg:mb-0 mb-10"
          duration={75}
          text={`Hello, ${user?.fullName ?? "Buddy"} how are you?`}
        />
      )}
      {RenderForm()}
      {RenderMessage()}
    </div>
  );

  function RenderForm() {
    return (
      <form
        className="flex justify-center items-center lg:gap-x-4 lg:w-full w-[340px] border lg:px-6 px-4 py-0.5 shadow-md rounded-lg"
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
          onClick={() => setActiveName(false)}
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
            className={`p-4 shadow-md rounded-md lg:ml-10 lg:mb-4 lg:mt-0 mt-4 relative text-base capitalize lg:w-full w-[230px] ${
              m.role === "user"
                ? "bg-white text-black"
                : "bg-neutral-800 text-white"
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
