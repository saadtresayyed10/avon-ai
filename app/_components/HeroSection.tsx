"use client";

import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import { ArrowRight, ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-y-5 mt-10">
      <motion.h1
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "backOut", delay: 0.8 }}
        className="lg:text-6xl text-4xl font-bold uppercase tracking-wide text-center"
      >
        Your smart companion for creativity, knowledge, and problem-solving.
      </motion.h1>
      <motion.p
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "backOut", delay: 0.8 }}
        className="lg:text-xl text-lg font-semibold uppercase tracking-wide text-center lg:w-[60%] w-[80%]"
      >
        An advanced AI assistant designed to enhance creativity, streamline
        problem-solving, support learning, and provide insightful, intelligent
        interactions.
      </motion.p>
      <SignedOut>
        <SignInButton mode="modal">
          <motion.button
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "backOut", delay: 0.8 }}
            className="text-sm bg-neutral-900 px-6 py-2 rounded-md shadow text-white font-semibold uppercase flex items-center gap-x-2 hover:bg-white hover:text-black hover:gap-x-4 duration-300 border-black border-2"
          >
            Try Avon
            <span>
              <ArrowUpRightIcon className="w-4 h-4" />
            </span>
          </motion.button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Link href="/avon">
          <motion.button
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "backOut", delay: 0.8 }}
            className="lg:text-sm bg-neutral-900 px-6 py-2 rounded-md shadow text-white font-semibold uppercase flex items-center gap-x-2 hover:bg-white hover:text-black hover:gap-x-4 duration-300 border-black border-2"
          >
            Chat with Avon
            <span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </motion.button>
        </Link>
      </SignedIn>
    </div>
  );
};

export default HeroSection;
