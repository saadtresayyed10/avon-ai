"use client";

import { Moon, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const hyperlinks = [
  {
    name: "About",
    linky: "/about",
  },
  {
    name: "Agency",
    linky: "https://groven-portfolio.vercel.app/",
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
  const [search, setSearch] = useState("");
  const [inputToggle, setInputToggle] = useState(false);

  const handleInputButton = () => {
    setInputToggle(true);
    setTimeout(() => {
      setInputToggle(false);
    }, 10000);
  };

  return (
    <div className="lg:flex hidden justify-between items-center w-full px-20 py-4 bg-white dark:bg-black dark:text-white text-black">
      <div className="flex items-center gap-x-1">
        <Image src="/images/shrimp.png" alt="Logo" width={32} height={32} />
        <Link href="/">
          <h1 className="text-2xl font-semibold uppercase">Avon</h1>
        </Link>
      </div>
      <ul className="flex justify-center items-center gap-x-8 text-sm capitalize">
        {hyperlinks
          .filter((h) => {
            return search.toLowerCase() === ""
              ? h
              : h.name.toLowerCase().includes(search);
          })
          .map((h, idx) => (
            <li key={idx}>
              <Link href={h.linky}>{h.name}</Link>
            </li>
          ))}
      </ul>
      <div className="flex items-center gap-x-4">
        {inputToggle && (
          <input
            type="text"
            placeholder="Search..."
            className="
    p-2 bg-transparent outline-none max-w-[150px]
    border-0 focus:border-b border-gray-950 
    placeholder-gray-400 placeholder:text-sm font-argesta
    focus:ring-0 text-black dark:text-white
  "
            onChange={(e) => setSearch(e.target.value)}
          />
        )}
        <button onClick={handleInputButton}>
          <Search className="w-4 h-4 stroke-[1.5]" />
        </button>
        <button>
          <Moon className="w-4 h-4 stroke-[1.5]" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
