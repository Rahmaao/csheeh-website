import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { nunitoFont } from "./fonts";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className='font-[Inter] w-full'>
        <div className="min-h-[100vh] w-full">
        <Navbar />
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
