"use client";

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LayoutHeader from "@/components/Header";
import Footer from "@/components/Footer";
import { nunitoFont } from "./fonts";
import StyledComponentsRegistry from "./registry";
import { NextUIProvider } from "@nextui-org/react";

// export const metadata: Metadata = {
//   title: "Center for School Health Education and Environment Hygiene",
//   description: "The official CSHEEH Website",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunitoFont.className}>
      <body className="w-full">
        <StyledComponentsRegistry>
          <NextUIProvider>
            <LayoutHeader />
            <div className="min-h-[100vh] w-full">{children}</div>
            <Footer />
          </NextUIProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
