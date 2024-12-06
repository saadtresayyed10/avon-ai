"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { User, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const hyperlinks = [
  {
    name: "About",
    linky: "/about",
  },
  {
    name: "Model",
    linky: "/model",
  },
  {
    name: "Portfolio",
    linky: "https://sayyedsaad.vercel.app/",
  },
];

const Navbar = () => {
  return (
    <div className="lg:flex hidden justify-between items-center w-full px-20 py-4 bg-black text-pink-500">
      <div className="flex items-center gap-x-1">
        <Link href="/">
          <h1 className="text-4xl font-semibold uppercase">Avon</h1>
        </Link>
        <Image src="/images/shrimp.png" alt="Logo" width={46} height={46} />
      </div>
      <ul className="flex justify-center items-center gap-x-8 text-base capitalize">
        {hyperlinks.map((h, idx) => (
          <li key={idx}>
            <Link href={h.linky}>{h.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-x-4">
        <SignedOut>
          <button>
            <SignInButton mode="modal">
              <User className="w-6 h-6 stroke-[2]" />
            </SignInButton>
          </button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
