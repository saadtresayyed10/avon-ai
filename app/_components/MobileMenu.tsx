"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SignedIn } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeSheet = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Menu
            className="w-6 h-6 stroke-[2] cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-white flex text-center flex-col justify-center items-center w-full h-[100%] text-black lg:gap-y-16 gap-y-10"
        >
          <Link
            href="https://deepmind.google/technologies/gemini/"
            target="_blank"
            onClick={closeSheet}
          >
            <h1 className="text-2xl uppercase font-medium">Model</h1>
          </Link>
          <Link
            href="https://www.linkedin.com/in/saad-sayyed-trev/"
            target="_blank"
            onClick={closeSheet}
          >
            <h1 className="text-2xl uppercase font-medium">Socials</h1>
          </Link>
          <Link
            href="https://sayyedsaad.vercel.app/"
            target="_blank"
            onClick={closeSheet}
          >
            <h1 className="text-2xl uppercase font-medium">Portfolio</h1>
          </Link>
          <SignedIn>
            <Link href="/feedback" onClick={closeSheet}>
              <h1 className="text-2xl uppercase font-medium">Thoughts</h1>
            </Link>
          </SignedIn>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MobileMenu;
