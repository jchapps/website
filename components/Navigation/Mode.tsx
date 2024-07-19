"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === "system" && (
        <button
          onClick={() => setTheme("dark")}
          className="fill-primary hover:fill-secondary hover:text-secondary transition dark:fill-white"
        >
          <Image
            priority
            src="/system.svg"
            height={26}
            width={26}
            alt="System mode"
          />
        </button>
      )}
      {theme === "dark" && (
        <button onClick={() => setTheme("light")}>
          <Image
            priority
            src="/moon.svg"
            height={26}
            width={26}
            alt="Dark mode"
          />
        </button>
      )}
      {theme === "light" && (
        <button onClick={() => setTheme("system")}>
          <Image
            priority
            src="/sun.svg"
            height={26}
            width={26}
            alt="Light mode"
          />
        </button>
      )}
    </>
  );
};

export default ThemeSwitch;
