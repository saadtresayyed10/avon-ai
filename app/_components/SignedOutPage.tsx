import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { ArrowUpRightIcon } from "lucide-react";

const SignedOutPage = () => {
  return (
    <div className="flex flex-col lg:gap-y-10 justify-center items-center w-full min-h-screen bg-white text-black">
      <div className="flex justify-center items-center flex-col gap-y-5">
        <h1 className="lg:text-6xl font-bold uppercase tracking-wide text-center">
          Your smart companion for creativity, knowledge, and problem-solving.
        </h1>
        <p className="lg:text-xl font-semibold uppercase tracking-wide text-center w-[60%]">
          An advanced AI assistant designed to enhance creativity, streamline
          problem-solving, support learning, and provide insightful, intelligent
          interactions.
        </p>
        <SignInButton mode="modal">
          <button className="lg:text-sm bg-neutral-900 px-6 py-2 rounded-md shadow text-white font-semibold uppercase flex items-center gap-x-2 hover:bg-white hover:text-black hover:gap-x-4 duration-300 border-black border-2">
            Chat with Avon
            <span>
              <ArrowUpRightIcon className="w-4 h-4" />
            </span>
          </button>
        </SignInButton>
      </div>
    </div>
  );
};

export default SignedOutPage;
