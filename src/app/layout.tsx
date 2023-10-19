import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { nunitoFont } from "./fonts";

export const metadata: Metadata = {
  title: "Center for School Health Education and Environment Hygiene",
  description: "The official CSHEEH Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunitoFont.className}>
      <body className="w-full">
        <div className="min-h-[100vh] w-full">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
