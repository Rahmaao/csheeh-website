import React from "react";
import tw, { styled } from "twin.macro";
import { Nunito } from "next/font/google";

const nunitoFont = Nunito({ subsets: ["latin"] });

const SmallButton = ({ children }: { children: React.ReactNode }) => {
  return <Root className={nunitoFont.className}>{children}</Root>;
};

export default SmallButton;

const Root = styled.button(() => [
  tw`bg-[#A9CF46] w-[138px] md:h-[30px] p-[10px] lg:h-[45px] h-[45px] rounded-[50px] gap-[9px] cursor-pointer flex flex-row items-center justify-center text-black text-[12px] font-[700] leading-[20.48px] text-center`,
]);
