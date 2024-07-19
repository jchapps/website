import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";
import NavWrapper from "@/components/Navigation/NavWrapper";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Josh Chappelow",
  description: "Josh Chappelow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.className} text-primary`}
      suppressHydrationWarning
    >
      <body className="bg-white dark:text-white dark:bg-primary">
        <ThemeProvider>
          <NavWrapper>{children}</NavWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
