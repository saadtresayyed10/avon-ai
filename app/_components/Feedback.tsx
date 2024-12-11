"use client";

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
    <div className="flex justify-center items-center w-full bg-cyan-500">
      <form
        onSubmit={handleSubmit}
        className="flex justify-start items-start flex-col lg:gap-y-6 lg:p-8"
      >
        <input type="text" value={user.user?.id as string} hidden />
        <input
          type="text"
          placeholder={user.user?.fullName as string}
          value={user.user?.fullName as string}
          disabled
          readOnly
          className="px-8 py-2"
        />
        <input
          type="text"
          placeholder={user.user?.emailAddresses[0].emailAddress as string}
          value={user.user?.emailAddresses[0].emailAddress as string}
          disabled
          readOnly
          className="pr-8 pl-2 py-2"
        />
        <textarea
          cols={25}
          rows={6}
          className="border"
          placeholder="You message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
