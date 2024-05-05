import Link, { LinkProps } from "next/link";

type Props = {
  children: React.ReactNode;
} & Partial<LinkProps>;

const Title: React.FunctionComponent<Props> = ({ children, href }) => {
  return href !== undefined ? (
    <Link href={href} className="block w-fit">
      <h2 className="text-2xl font-semibold w-fit after:content-[''] after:block after:bottom-0 after:left-0 after:right-0 after:h-1 after:rounded-md after:bg-secondary after:hover:bg-primary after:hover:transition">
        {children}
      </h2>
    </Link>
  ) : (
    <h2 className="text-2xl font-semibold w-fit">{children}</h2>
  );
};

export default Title;
