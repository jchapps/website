"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLogo: React.FunctionComponent = () => {
  const pathname = usePathname();

  const activePath = "/" === pathname;

  return (
    <div className="space-x-3 hidden min-[732px]:flex">
      <Link href="/" className=" fill-primary hover:text-secondary transition">
        <h1
          className={`font-bold text-3xl before:content-['(◠‿◠)'] before:text-secondary ${
            activePath && "text-secondary"
          } `}
        >
          &nbsp;Josh Chappelow
        </h1>
      </Link>
    </div>
  );
};

export default NavLogo;
