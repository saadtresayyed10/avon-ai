"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useUser } from "@clerk/nextjs";
import { ArrowRight, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Feedback = () => {
  const user = useUser();
  const [message, setMessage] = useState("");
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const feedbackData = {
      message,
    };

    setIsLoading(true);

    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(feedbackData),
    });

    if (response.ok) {
      toast({
        description: "Feedback sent!",
      });
    } else {
      toast({
        description: `${user.user?.fullName}, you have already sent a feedback.`,
      });
    }

    setMessage("");
    router.push("/#thoughts");
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full bg-white text-black min-h-screen gap-y-10">
      <h1 className="font-bold mt-10 text-6xl text-center uppercase tracking-wide">
        Share your thoughts
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex justify-start items-start flex-col lg:gap-y-6 lg:p-8 border-2 border-black rounded-lg"
      >
        <Input
          type="text"
          className="hidden"
          value={user.user?.id as string}
          hidden
        />
        <div className="flex items-center gap-x-2">
          <Label className="font-semibold">Name:</Label>
          <Input
            type="text"
            className="shadow-md"
            placeholder={user.user?.fullName as string}
            value={user.user?.fullName as string}
            disabled
            readOnly
          />
        </div>
        <div className="flex items-center gap-x-2">
          <Label className="font-semibold">Email:</Label>
          <Input
            type="text"
            className="shadow-md"
            placeholder={user.user?.emailAddresses[0].emailAddress as string}
            value={user.user?.emailAddresses[0].emailAddress as string}
            disabled
            readOnly
          />
        </div>

        <Textarea
          cols={25}
          rows={6}
          className="shadow-md"
          placeholder="You message"
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
        ></Textarea>
        <div className="flex justify-center items-center w-full">
          {isLoading ? (
            <button className="lg:text-sm bg-neutral-900 px-6 py-2 rounded-md shadow text-white font-semibold uppercase flex items-center gap-x-2 hover:bg-white hover:text-black hover:gap-x-4 duration-300 border-black border-2">
              Please Wait
              <span>
                <Loader2 className="w-4 h-4 animate-spin" />
              </span>
            </button>
          ) : (
            <button className="lg:text-sm bg-neutral-900 px-6 py-2 rounded-md shadow text-white font-semibold uppercase flex items-center gap-x-2 hover:bg-white hover:text-black hover:gap-x-4 duration-300 border-black border-2">
              Submit
              <span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Feedback;
