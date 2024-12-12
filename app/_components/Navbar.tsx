import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { User2 } from "lucide-react";
import Link from "next/link";

const hyperlinks = [
  {
    name: "Model",
    link: "/",
  },
  {
    name: "Socials",
    link: "/",
  },
  {
    name: "Portfolio",
    link: "/",
  },
];

const Navbar = () => {
  return (
    <div className="lg:flex hidden justify-between items-center px-20 py-6 bg-white text-black">
      <div className="flex justify-center items-center gap-x-16">
        <Link href="/">
          <h1 className="font-bold uppercase text-4xl">Avon</h1>
        </Link>
        <ul className="flex items-center gap-x-4">
          {hyperlinks.map((list, idx) => (
            <li
              key={idx}
              className="text-sm uppercase hover:underline hover:mx-4 duration-300 hover:underline-offset-2 font-medium"
            >
              <Link href={list.link}>{list.name}</Link>
            </li>
          ))}
          <SignedIn>
            <li className="text-sm uppercase hover:underline hover:mx-4 duration-300 hover:underline-offset-2 font-medium">
              <Link href="/feedback">Thoughts</Link>
            </li>
          </SignedIn>
        </ul>
      </div>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="lg:text-sm bg-neutral-900 px-4 py-2 rounded-md shadow text-white font-semibold uppercase flex items-center gap-x-2 hover:bg-white hover:text-black duration-300 border-black border-2">
            Login
            <span>
              <User2 className="w-4 h-4" />
            </span>
          </button>
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

export default Navbar;
