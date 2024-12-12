import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
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
              className="text-sm uppercase hover:underline duration-300 hover:underline-offset-2 font-medium"
            >
              <Link href={list.link}>{list.name}</Link>
            </li>
          ))}
          <SignedIn>
            <li className="text-sm uppercase hover:underline duration-300 hover:underline-offset-2 font-medium">
              <Link href="/feedback">Thoughts</Link>
            </li>
          </SignedIn>
        </ul>
      </div>
      <SignedOut>
        <SignInButton mode="modal">
          <Button asChild variant="default">
            <h1 className="font-medium cursor-pointer uppercase text-sm">
              Login
            </h1>
          </Button>
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
