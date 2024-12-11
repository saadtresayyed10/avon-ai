"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";

const Feedback = () => {
  const user = useUser();
  const [message, setMessage] = useState("Hey");

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
      alert("Feedback not sent");
    }
  };

  return (
    <div className="flex justify-center items-center w-full">
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-start flex-col lg:gap-y-6 lg:p-8"
      >
        <input type="text" value={user.user?.id as string} hidden />
        <input
          type="text"
          placeholder={user.user?.fullName as string}
          value={user.user?.fullName as string}
          disabled
          readOnly
        />
        <input
          type="text"
          placeholder={user.user?.emailAddresses[0].emailAddress as string}
          value={user.user?.emailAddresses[0].emailAddress as string}
          disabled
          readOnly
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
