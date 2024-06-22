import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import Navbar from "@/components/navigation/Navbar";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
});

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
      <body className={'bg-[#0A0F19] ${hankenGrotesk.className}'}>
        <nav className="">
          <Navbar/>
        </nav>
        {children}
      </body>
    </html>
  );
}
