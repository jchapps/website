"use client";
import { ThemeProvider as NextProvider } from "next-themes";
import { FunctionComponent, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider: FunctionComponent<Props> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <NextProvider attribute="class" defaultTheme="system">
      {children}
    </NextProvider>
  );
};
