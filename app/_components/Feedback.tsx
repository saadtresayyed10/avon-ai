"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const Feedback = () => {
  const user = useUser();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const feedbackData = {
      message,
    };

    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedbackData),
    });

    if (response.ok) {
      alert("Feedback added");
    } else {
      alert(`${user.user?.fullName}, you have already sent a feedback.`);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full bg-white text-black min-h-screen gap-y-10">
      <h1 className="font-bold mt-10 text-6xl text-center uppercase tracking-wide">
        Share your thoughts
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex justify-start items-start flex-col lg:gap-y-6 lg:p-8"
      >
        <Input
          type="text"
          className="hidden"
          value={user.user?.id as string}
          hidden
        />
        <Input
          type="text"
          placeholder={user.user?.fullName as string}
          value={user.user?.fullName as string}
          disabled
          readOnly
        />
        <Input
          type="text"
          placeholder={user.user?.emailAddresses[0].emailAddress as string}
          value={user.user?.emailAddresses[0].emailAddress as string}
          disabled
          readOnly
        />
        <Textarea
          cols={25}
          rows={6}
          placeholder="You message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></Textarea>
        <div className="flex justify-center items-center w-full">
          <button className="lg:text-sm bg-neutral-900 px-6 py-2 rounded-md shadow text-white font-semibold uppercase flex items-center gap-x-2 hover:bg-white hover:text-black hover:gap-x-4 duration-300 border-black border-2">
            Submit
            <span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
