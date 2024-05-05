import Link from "next/link";
import Divider from "./Divider";

const navs = [
  { href: "/", label: "JC" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
];

const Header: React.FunctionComponent = () => {
  return (
    <>
      <header className="py-8 flex justify-between items-center space-x-3 h-36">
        <div className="space-x-3 hidden min-[732px]:flex">
          <Link
            href="/"
            className=" fill-primary hover:text-secondary transition"
          >
            <h1 className="font-bold text-3xl before:content-['(◠‿◠)'] before:text-secondary">
              &nbsp;Josh Chappelow
            </h1>
          </Link>
        </div>
        <div className="flex space-x-3">
          {navs.map((nav) => {
            return (
              <Link
                key={nav.label}
                href={nav.href}
                className={` fill-primary hover:text-secondary transition ${
                  nav.label === "JC" && "hidden max-[731px]:flex"
                }`}
              >
                <h1 className="font-bold text-3xl">{nav.label}</h1>
              </Link>
            );
          })}
        </div>
      </header>
      <Divider className="mb-8" />
    </>
  );
};

export default Header;
