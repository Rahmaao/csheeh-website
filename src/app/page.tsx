"use client";
import Navbar from "@/components/Navbar/Navbar";
import Header from "@/components/typography/Header";
import Image from "next/image";
import tw, { styled } from "twin.macro";

export default function Home() {
  return (
    <main className="mt-[24px] text-yellow-200">
      <Navbar />
      <Header>My name is Femi</Header>
    </main>
  );
}

const H2 = styled.h2(() => [tw`border border-[#ffff]`]);
