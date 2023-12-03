import "./globals.css";
import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";

const dosis = Dosis({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "F-Commerce",
  description: "Created by Munazzar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dosis.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
