import "./globals.css";
import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import Navbar from "./components/Navbar/Navbar";
import Providers from "./components/context/Providers";
import { Toaster, toast } from "sonner";
const dosis = Dosis({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "F-Commerce",
  description: "Created by Munazzar",
};

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  return (
    <html lang="en">
      <body className={dosis.className}>
        <Providers>
          <Navbar />
          {props.children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
