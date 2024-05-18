import Link from "next/link";
import Divider from "../Divider";
import { NavItem } from "./NavItem";
import NavLogo from "./NavLogo";

const navs = [
  { href: "/", label: "JC" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
];

const Header: React.FunctionComponent = () => {
  return (
    <>
      <header className="py-8 flex justify-between items-center space-x-3 h-36">
        <NavLogo />
        <div className="flex space-x-3">
          {navs.map((nav) => {
            return (
              <NavItem key={nav.label} label={nav.label} href={nav.href} />
            );
          })}
        </div>
      </header>
      <Divider className="mb-8" />
    </>
  );
};

export default Header;
