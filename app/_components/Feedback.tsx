"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUser } from "@clerk/nextjs";
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
    <div className="flex flex-col  justify-center items-center w-full bg-white text-black">
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
          <button
            type="submit"
            className="bg-black text-cyan-500 font-semibold uppercase px-6 py-2 rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
