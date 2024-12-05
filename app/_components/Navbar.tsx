import Link from "next/link";

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
  return (
    <div className="lg:flex hidden justify-between items-center w-full px-10 py-4">
      <Link href="/">
        <h1 className="text-2xl font-semibold uppercase">Avon</h1>
      </Link>
    </div>
  );
};

export default Navbar;
