import React from "react";
import tw, { styled } from "twin.macro";
import { Nunito } from "next/font/google";

const nunitoFont = Nunito({ subsets: ["latin"] });

const Button = ({ children }: { children: React.ReactNode }) => {
  return <Root className={nunitoFont.className}>{children}</Root>;
};

export default Button;

const Root = styled.button(() => [
  tw`bg-[#A9CF46] w-[158px] p-[10px] h-[50px] rounded-[50px] gap-[9px] cursor-pointer flex flex-row items-center justify-center text-black font-[15px] font-[700] leading-[20.48px] text-center`,
]);
