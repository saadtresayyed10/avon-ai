"use client";

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { User2 } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";

const hyperlinks = [
  {
    name: "Model",
    link: "https://deepmind.google/technologies/gemini/",
  },
  {
    name: "Socials",
    link: "https://www.linkedin.com/in/saad-sayyed-trev/",
  },
  {
    name: "Portfolio",
    link: "https://sayyedsaad.vercel.app",
  },
];

const Navbar = () => {
  return (
    <div className="lg:flex hidden justify-between items-center px-20 py-6 bg-white text-black">
      <div className="flex justify-center items-center gap-x-16">
        <Link href="/">
          <motion.h1
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
            className="font-bold uppercase text-4xl"
          >
            Avon
          </motion.h1>
        </Link>
        <motion.ul
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
          className="flex items-center gap-x-4"
        >
          {hyperlinks.map((list, idx) => (
            <li
              key={idx}
              className="text-sm uppercase hover:underline hover:mx-4 duration-300 hover:underline-offset-2 font-medium"
            >
              <Link target="_blank" href={list.link}>
                {list.name}
              </Link>
            </li>
          ))}
          <SignedIn>
            <li className="text-sm uppercase hover:underline hover:mx-4 duration-300 hover:underline-offset-2 font-medium">
              <Link href="/feedback">Thoughts</Link>
            </li>
          </SignedIn>
        </motion.ul>
      </div>
      <SignedOut>
        <SignInButton mode="modal">
          <motion.button
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
            className="lg:text-sm bg-neutral-900 px-4 py-2 rounded-md shadow text-white font-semibold uppercase flex items-center gap-x-2 hover:bg-white hover:text-black duration-300 border-black border-2"
          >
            Login
            <span>
              <User2 className="w-4 h-4" />
            </span>
          </motion.button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <Button variant="ghost">
          <UserButton userProfileMode="modal" />
        </Button>
      </SignedIn>
    </div>
  );
};

export const NavbarPhone = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4 lg:hidden w-full bg-white text-black">
      <Link href="/">
        <h1 className="font-bold uppercase lg:text-4xl text-3xl">Avon</h1>
      </Link>
      <div className="flex items-center gap-x-3">
        <UserButton />
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
