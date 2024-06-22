import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laracast",
  description: "Generated Flexsy Bilbis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      {/* <link
          rel="icon"
          href=""
          sizes="any"
          type="image/svg+xml"
        /> */}
      </head>
      <body className={'bg-[#0A0F19] ${inter.className}'}>
        <nav className="">
          <Navbar/>
        </nav>
        {children}
      </body>
    </html>
  );
}
