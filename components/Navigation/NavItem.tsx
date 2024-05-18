"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {
  label: string;
  href: string;
};

export const NavItem: React.FunctionComponent<Props> = ({
  label,
  href,
}: Props) => {
  const pathname = usePathname();

  const activePath = href === pathname;

  return (
    <Link
      key={label}
      href={href}
      className={` fill-primary hover:text-secondary transition ${
        label === "JC" && "hidden max-[731px]:flex"
      } ${activePath && "text-secondary"}`}
    >
      <h1 className="font-bold text-3xl">{label}</h1>
    </Link>
  );
};
