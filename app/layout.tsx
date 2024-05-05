import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";
import Navigation from "@/components/Navigation";

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
    <html lang="en" className={`${poppins.className} text-primary`}>
      <body>
        <Navigation>{children}</Navigation>
      </body>
    </html>
  );
}
