"use client";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Header from "@/components/typography/Header";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import HeartImage from "@/assets/icons/Heart.svg";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-full">
      <Navbar />
      <div className="w-[782px] text-center text-black flex flex-col center items-center gap-[43px]">
        <Header>
          <h1 className="text-[65px] leading-[68px]">
            Building <span className="text-[#A9CF46]">Healthy Schools, </span>
            <span className="text-[#058A51]">Safe Environments</span> and
            <span className="text-[#FFD14F]"> Stronger Communities</span>
          </h1>
        </Header>
        <div>
          <Button>
            Get Involved
            <Image src={HeartImage} alt="Heart" width={14} height={14} />
          </Button>
        </div>
      </div>
    </main>
  );
}
