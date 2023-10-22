"use client";
import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Header from "@/components/typography/Header";
import Image from "next/image";
import tw, { styled } from "twin.macro";
import HeartImage from "@/assets/icons/Heart.svg";
import RightArrow from "@/assets/icons/Arrow - Right.svg";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-full bg-black pt-40">
      {/* <Navbar /> */}
      <div className="w-[782px] text-center text-black flex flex-col center items-center gap-[43px]">
        <Header>
          <h1 className="text-[65px] leading-[68px] text-white">
            Building <span className="text-[#A9CF46]">Healthy Schools, </span>
            <span className="text-[#058A51]">Safe Environments</span> and
            <span className="text-[#FFD14F]"> Stronger Communities</span>
          </h1>
        </Header>
        <div>
          <Button>
            Get Involved
            <Image src={RightArrow} alt="Right Arrow" width={18} height={18} />
          </Button>
        </div>
      </div>
    </main>
  );
}
